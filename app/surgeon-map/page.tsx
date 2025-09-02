'use client'

import React, { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SurgeonMap from '@/components/SurgeonMap'
import { getSurgeons } from '@/lib/firebase'

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

export default function SurgeonMapPage() {
  const [surgeons, setSurgeons] = useState<Surgeon[]>([])
  const [loadingSurgeons, setLoadingSurgeons] = useState(true)

  useEffect(() => {
    loadSurgeons()
  }, [])

  const loadSurgeons = async () => {
    try {
      setLoadingSurgeons(true)
      const surgeonsData = await getSurgeons()
      setSurgeons(surgeonsData)
    } catch (error) {
      console.error('Error loading surgeons:', error)
    } finally {
      setLoadingSurgeons(false)
    }
  }



  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="container-custom">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Surgeon Map</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Explore our network of qualified surgeons across the globe. Find a surgeon near you or discover 
            specialists in different regions for your vision correction needs.
          </p>
        </div>

        {loadingSurgeons ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#33848C] mx-auto mb-4"></div>
            <p className="text-gray-600">Loading surgeon locations...</p>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <SurgeonMap surgeons={surgeons} />
          </div>
        )}

        {surgeons.length === 0 && !loadingSurgeons && (
          <div className="text-center py-6 bg-white rounded-lg shadow-lg">
            <div className="text-gray-400 mb-3">
              <svg className="mx-auto h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No Surgeons Found</h3>
            <p className="text-gray-500 text-sm">
              No surgeons have been added to the map yet. Use the search bar above to find surgeons by location.
            </p>
          </div>
        )}
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
