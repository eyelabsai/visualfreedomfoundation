# Surgeon Map Feature

## Overview
The Surgeon Map feature allows logged-in users to view an interactive map showing the locations of all registered surgeons in the Visual Freedom Foundation network. This provides patients with an easy way to find surgeons near them or in specific regions.

## Features

### 🔐 Authentication Required
- Only logged-in users can access the surgeon map
- Non-authenticated users are redirected to the login page

### 🗺️ Interactive Map
- Built with React Leaflet and OpenStreetMap
- Shows surgeon locations with custom markers
- Click on markers to see detailed surgeon information
- Responsive design that works on all devices

### 📍 Surgeon Information Displayed
- Name and title
- Specialization
- Years of experience
- Organization/Hospital
- Location (City, State, Country)
- Contact email

### 🌍 International Coverage
- Supports surgeons from any country
- Automatic geocoding of addresses to coordinates
- Global map view with zoom capabilities

## How to Use

### For Patients/Users
1. Log in to your account
2. Click "Surgeon Map" in the header navigation
3. Browse the map to find surgeons in your area
4. Click on markers to see detailed information
5. Use zoom and pan to explore different regions

### For Admins
1. Access the Admin Panel
2. Create new surgeon accounts with location information
3. The system automatically converts addresses to map coordinates
4. Surgeons appear on the map once their accounts are created

## Technical Implementation

### Dependencies
- `react-leaflet` - React wrapper for Leaflet maps
- `leaflet` - Interactive maps library
- `@types/leaflet` - TypeScript definitions

### Key Components
- `SurgeonMap` - Main map component with markers and popups
- `SurgeonMapPage` - Page wrapper with authentication and data loading
- `geocoding.js` - Utility for converting addresses to coordinates

### Database Structure
Surgeons are stored in Firestore with the following location structure:
```json
{
  "location": {
    "city": "New York",
    "state": "NY", 
    "country": "United States",
    "coordinates": {
      "lat": 40.7128,
      "lng": -74.0060
    }
  }
}
```

### Geocoding Service
- Uses OpenStreetMap's Nominatim service (free)
- Automatically converts city/state/country to coordinates
- Includes rate limiting to respect service limits

## Setup Instructions

### 1. Install Dependencies
```bash
npm install react-leaflet@4.2.1 leaflet @types/leaflet
```

### 2. Add Sample Data (Optional)
To test the map with sample surgeons:
```bash
node scripts/add-sample-surgeons.js
```

### 3. Configure Firebase
Ensure your Firebase project has the necessary collections:
- `users` - for storing surgeon profiles
- Proper security rules for authenticated access

## Customization

### Map Styling
- Custom marker icons in brand colors
- Responsive popup design
- Legend and surgeon count display

### Location Fields
- City, State/Province, Country
- Automatic coordinate generation
- Support for international addresses

## Security Considerations

- Map access restricted to authenticated users
- Surgeon data filtered by role and account status
- No sensitive information exposed in map popups

## Future Enhancements

- Search and filter capabilities
- Distance-based sorting
- Integration with appointment booking
- Surgeon availability indicators
- Patient reviews and ratings

## Troubleshooting

### Map Not Loading
- Check browser console for errors
- Ensure Leaflet CSS is properly imported
- Verify internet connection for map tiles

### No Surgeons Displayed
- Check if surgeons have location data
- Verify surgeon accounts are active
- Check Firebase permissions and data structure

### Geocoding Issues
- Verify address format (city, state, country)
- Check rate limiting on geocoding service
- Ensure coordinates are valid numbers

## Support

For technical issues or questions about the surgeon map feature, please contact the development team or refer to the Firebase console for data verification.



