// Script to check current surgeons in the database
// Run this with: node scripts/check-surgeons.js

import { initializeApp } from 'firebase/app'
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDv5hDQdpjG3w7gyXzv-DA4BPL2uFx1AWM",
  authDomain: "visualfreedomfoundation-822e3.firebaseapp.com",
  projectId: "visualfreedomfoundation-822e3",
  storageBucket: "visualfreedomfoundation-822e3.firebasestorage.app",
  messagingSenderId: "175393111749",
  appId: "1:175393111749:web:d26bb2942dcd96f7b93aac",
  measurementId: "G-RR4YRNKFQD"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

async function checkSurgeons() {
  try {
    console.log('🔍 Checking current surgeons in database...\n')
    
    const surgeonsQuery = query(
      collection(db, 'users'),
      where('role', '==', 'surgeon')
    )
    
    const querySnapshot = await getDocs(surgeonsQuery)
    
    if (querySnapshot.empty) {
      console.log('❌ No surgeons found in database')
      console.log('💡 To add surgeons:')
      console.log('   1. Use Admin Panel: /admin')
      console.log('   2. Or run: node scripts/add-sample-surgeons.js')
      return
    }
    
    console.log(`✅ Found ${querySnapshot.size} surgeon(s):\n`)
    
    querySnapshot.forEach((doc) => {
      const data = doc.data()
      console.log(`👨‍⚕️ Dr. ${data.firstName} ${data.lastName}`)
      console.log(`   📧 Email: ${data.email}`)
      console.log(`   🏥 Organization: ${data.organization || 'N/A'}`)
      console.log(`   🎯 Specialization: ${data.specialization || 'N/A'}`)
      
      if (data.location) {
        console.log(`   📍 Location: ${data.location.city || ''}, ${data.location.state || ''}, ${data.location.country || ''}`)
        if (data.location.coordinates) {
          console.log(`   🗺️  Coordinates: ${data.location.coordinates.lat}, ${data.location.coordinates.lng}`)
          console.log(`   ✅ Will appear on map`)
        } else {
          console.log(`   ❌ No coordinates - won't appear on map`)
        }
      } else {
        console.log(`   ❌ No location data - won't appear on map`)
      }
      
      console.log(`   📊 Status: ${data.accountStatus || 'N/A'}`)
      console.log('')
    })
    
    // Count surgeons with coordinates
    const surgeonsWithCoordinates = querySnapshot.docs.filter(doc => {
      const data = doc.data()
      return data.location?.coordinates?.lat && data.location?.coordinates?.lng
    })
    
    console.log(`📊 Summary:`)
    console.log(`   Total surgeons: ${querySnapshot.size}`)
    console.log(`   With coordinates: ${surgeonsWithCoordinates.length}`)
    console.log(`   Will appear on map: ${surgeonsWithCoordinates.length}`)
    
  } catch (error) {
    console.error('❌ Error checking surgeons:', error)
  }
}

checkSurgeons()



