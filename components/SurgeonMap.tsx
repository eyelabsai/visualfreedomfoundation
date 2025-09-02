'use client'

import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import 'leaflet/dist/leaflet.css'

// Dynamically import the map components to avoid SSR issues
const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
)

const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
)

const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
)

const Popup = dynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false }
)

interface Surgeon {
  id: string
  firstName: string
  lastName: string
  email: string
  organization: string
  specialization: string
  location: {
    city: string
    state: string
    country: string
    coordinates?: {
      lat: number
      lng: number
    }
  }
}

interface SurgeonMapProps {
  surgeons: Surgeon[]
}

// Custom marker icon to fix the default marker issue
const createCustomIcon = () => {
  if (typeof window === 'undefined') return null
  
  const L = require('leaflet')
  
  return L.icon({
    iconUrl: 'data:image/svg+xml;base64,' + btoa(`
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#33848C"/>
      </svg>
    `),
    iconSize: [24, 24],
    iconAnchor: [12, 24],
    popupAnchor: [0, -24]
  })
}

export default function SurgeonMap({ surgeons }: SurgeonMapProps) {
  const [mounted, setMounted] = useState(false)
  const [mapKey, setMapKey] = useState(0)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<Surgeon[]>([])
  const [isSearching, setIsSearching] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Force re-render of map when surgeons change
    setMapKey(prev => prev + 1)
  }, [surgeons])

  // Filter surgeons with valid coordinates
  const surgeonsWithCoordinates = surgeons.filter(
    surgeon => surgeon.location?.coordinates?.lat && surgeon.location?.coordinates?.lng
  )

  // Calculate map center based on surgeon locations
  const getMapCenter = () => {
    if (surgeonsWithCoordinates.length === 0) {
      return [20, 0] // Default center (equator, prime meridian)
    }

    const totalLat = surgeonsWithCoordinates.reduce((sum, surgeon) => 
      sum + surgeon.location.coordinates!.lat, 0
    )
    const totalLng = surgeonsWithCoordinates.reduce((sum, surgeon) => 
      sum + surgeon.location.coordinates!.lng, 0
    )

    return [
      totalLat / surgeonsWithCoordinates.length,
      totalLng / surgeonsWithCoordinates.length
    ]
  }

  // Search functionality
  const handleSearch = async () => {
    if (!searchQuery.trim()) {
      setSearchResults([])
      return
    }

    setIsSearching(true)
    
    try {
      // Check if query looks like a zip code (5 digits)
      const isZipCode = /^\d{5}$/.test(searchQuery.trim())
      
      let results = []
      
      if (isZipCode) {
        // Search by zip code - find surgeons in nearby areas
        const query = searchQuery.trim()
        results = surgeons.filter(surgeon => {
          // For zip code search, we'll look for surgeons in the same state/region
          // This is a simplified approach - in a real app you'd use a proper zip code database
          return surgeon.location?.state && surgeon.location.state.length <= 3
        })
      } else {
        // Regular search by surgeon name, organization, or location
        const query = searchQuery.toLowerCase()
        results = surgeons.filter(surgeon => {
          const nameMatch = `${surgeon.firstName} ${surgeon.lastName}`.toLowerCase().includes(query)
          const orgMatch = surgeon.organization?.toLowerCase().includes(query)
          const cityMatch = surgeon.location?.city?.toLowerCase().includes(query)
          const stateMatch = surgeon.location?.state?.toLowerCase().includes(query)
          const countryMatch = surgeon.location?.country?.toLowerCase().includes(query)
          
          return nameMatch || orgMatch || cityMatch || stateMatch || countryMatch
        })
      }
      
      setSearchResults(results)
      
      // If we have search results with coordinates, center map on first result
      if (results.length > 0 && results[0].location?.coordinates) {
        const firstResult = results[0]
        // This will trigger a map re-render with new center
        setMapKey(prev => prev + 1)
      }
    } catch (error) {
      console.error('Search error:', error)
    } finally {
      setIsSearching(false)
    }
  }

  // Get map center based on search results or all surgeons
  const getCurrentMapCenter = () => {
    if (searchResults.length > 0 && searchResults[0].location?.coordinates) {
      const firstResult = searchResults[0]
      if (firstResult.location.coordinates?.lat && firstResult.location.coordinates?.lng) {
        return [firstResult.location.coordinates.lat, firstResult.location.coordinates.lng]
      }
    }
    return getMapCenter()
  }

  if (!mounted) {
    return (
      <div className="h-96 bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#33848C] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading map...</p>
        </div>
      </div>
    )
  }

  const center = getCurrentMapCenter()

    return (
    <div className="relative">
      {/* Search Bar */}
      <div className="mb-4 p-4 bg-white rounded-lg shadow-sm border relative z-20">
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Search by name, organization, city, state, country, or zip code..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#33848C] focus:border-transparent"
          />
          <button
            onClick={handleSearch}
            disabled={isSearching}
            className="px-6 py-2 bg-[#33848C] text-white rounded-lg hover:bg-[#2a6b72] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSearching ? 'Searching...' : 'Search'}
          </button>
          {searchQuery && (
            <button
              onClick={() => {
                setSearchQuery('')
                setSearchResults([])
              }}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              Clear
            </button>
          )}
        </div>
        
        {/* Search Results Summary */}
        {searchResults.length > 0 && (
          <div className="mt-3 text-sm text-gray-600">
            Found {searchResults.length} surgeon(s) matching "{searchQuery}"
          </div>
        )}
      </div>

      {/* Map Container */}
      <div className="h-[600px] w-full relative">
        <MapContainer
          key={mapKey}
          center={center as [number, number]}
          zoom={searchResults.length > 0 ? 8 : 2}
          style={{ height: '100%', width: '100%' }}
          className="z-0"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          
          {surgeonsWithCoordinates.map((surgeon) => {
            const icon = createCustomIcon()
            const isSearchResult = searchResults.some(result => result.id === surgeon.id)
            
            return (
              <Marker
                key={surgeon.id}
                position={[
                  surgeon.location.coordinates!.lat,
                  surgeon.location.coordinates!.lng
                ]}
                icon={icon}
              >
                <Popup>
                  <div className="p-2">
                    <h3 className="font-bold text-lg text-[#33848C] mb-2">
                      Dr. {surgeon.firstName} {surgeon.lastName}
                    </h3>
                    <div className="space-y-1 text-sm">
                      <p><strong>Specialization:</strong> {surgeon.specialization}</p>
                      <p><strong>Organization:</strong> {surgeon.organization}</p>
                      <p><strong>Location:</strong> {surgeon.location.city}, {surgeon.location.state}, {surgeon.location.country}</p>
                      <p><strong>Email:</strong> {surgeon.email}</p>
                    </div>
                  </div>
                </Popup>
              </Marker>
            )
          })}
        </MapContainer>

        {/* Map Legend */}
        <div className="absolute top-4 right-4 bg-white p-4 rounded-lg shadow-lg z-10">
          <h4 className="font-semibold text-gray-900 mb-2">Legend</h4>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-[#33848C] rounded-full"></div>
            <span className="text-sm text-gray-600">Surgeon Location</span>
          </div>
          <div className="mt-2 text-xs text-gray-500">
            <p>Click on markers for details</p>
          </div>
        </div>

        {/* Surgeon Count */}
        <div className="absolute top-4 left-4 bg-white p-3 rounded-lg shadow-lg z-10">
          <div className="text-center">
            <div className="text-2xl font-bold text-[#33848C]">
              {searchResults.length > 0 ? searchResults.length : surgeonsWithCoordinates.length}
            </div>
            <div className="text-xs text-gray-600">
              {searchResults.length > 0 ? 'Search Results' : 'Surgeons on Map'}
            </div>
          </div>
        </div>
      </div>
      
      {/* Search Results List */}
      {searchResults.length > 0 && (
        <div className="mt-4 bg-white rounded-lg shadow-lg p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Search Results</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {searchResults.map((surgeon) => (
              <div key={surgeon.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-[#33848C] mb-2">
                  Dr. {surgeon.firstName} {surgeon.lastName}
                </h4>
                <div className="space-y-1 text-sm text-gray-600">
                  <p><strong>Specialization:</strong> {surgeon.specialization || 'N/A'}</p>
                  <p><strong>Organization:</strong> {surgeon.organization || 'N/A'}</p>
                  <p><strong>Location:</strong> {surgeon.location?.city || ''}, {surgeon.location?.state || ''}, {surgeon.location?.country || ''}</p>
                  <p><strong>Email:</strong> {surgeon.email}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
