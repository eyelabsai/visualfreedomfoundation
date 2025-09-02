// Geocoding utility using OpenStreetMap Nominatim service
// This is free to use but has rate limits

export const geocodeAddress = async (city, state, country) => {
  try {
    // Build the address string
    const address = [city, state, country].filter(Boolean).join(', ')
    
    if (!address.trim()) {
      return null
    }

    // Use OpenStreetMap Nominatim service
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}&limit=1`
    )
    
    if (!response.ok) {
      throw new Error('Geocoding request failed')
    }
    
    const data = await response.json()
    
    if (data && data.length > 0) {
      const result = data[0]
      return {
        lat: parseFloat(result.lat),
        lng: parseFloat(result.lon)
      }
    }
    
    return null
  } catch (error) {
    console.error('Geocoding error:', error)
    return null
  }
}

// Batch geocode multiple addresses with delay to respect rate limits
export const batchGeocode = async (addresses, delayMs = 1000) => {
  const results = []
  
  for (let i = 0; i < addresses.length; i++) {
    const address = addresses[i]
    const coordinates = await geocodeAddress(address.city, address.state, address.country)
    
    results.push({
      ...address,
      coordinates
    })
    
    // Add delay between requests to respect rate limits
    if (i < addresses.length - 1) {
      await new Promise(resolve => setTimeout(resolve, delayMs))
    }
  }
  
  return results
}



