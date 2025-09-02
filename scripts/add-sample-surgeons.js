// Script to add sample surgeons for testing the map functionality
// Run this with: node scripts/add-sample-surgeons.js

import { initializeApp } from 'firebase/app'
import { getFirestore, doc, setDoc } from 'firebase/firestore'

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

const sampleSurgeons = [
  {
    firstName: "John",
    lastName: "Smith",
    email: "john.smith@example.com",
    organization: "Manhattan Eye Hospital",
    licenseNumber: "NY12345",
    specialization: "LASIK Surgery",
    yearsExperience: "15",
    location: {
      city: "New York",
      state: "NY",
      country: "United States",
      coordinates: { lat: 40.7128, lng: -74.0060 }
    },
    role: "surgeon",
    accountStatus: "active",
    createdAt: new Date().toISOString()
  },
  {
    firstName: "Sarah",
    lastName: "Johnson",
    email: "sarah.johnson@example.com",
    organization: "Los Angeles Vision Center",
    licenseNumber: "CA67890",
    specialization: "Cataract Surgery",
    yearsExperience: "12",
    location: {
      city: "Los Angeles",
      state: "CA",
      country: "United States",
      coordinates: { lat: 34.0522, lng: -118.2437 }
    },
    role: "surgeon",
    accountStatus: "active",
    createdAt: new Date().toISOString()
  },
  {
    firstName: "Michael",
    lastName: "Chen",
    email: "michael.chen@example.com",
    organization: "Toronto Eye Institute",
    licenseNumber: "ON54321",
    specialization: "Retinal Surgery",
    yearsExperience: "18",
    location: {
      city: "Toronto",
      state: "ON",
      country: "Canada",
      coordinates: { lat: 43.6532, lng: -79.3832 }
    },
    role: "surgeon",
    accountStatus: "active",
    createdAt: new Date().toISOString()
  },
  {
    firstName: "Emma",
    lastName: "Wilson",
    email: "emma.wilson@example.com",
    organization: "London Eye Clinic",
    licenseNumber: "UK98765",
    specialization: "Corneal Surgery",
    yearsExperience: "14",
    location: {
      city: "London",
      state: "England",
      country: "United Kingdom",
      coordinates: { lat: 51.5074, lng: -0.1278 }
    },
    role: "surgeon",
    accountStatus: "active",
    createdAt: new Date().toISOString()
  },
  {
    firstName: "David",
    lastName: "Brown",
    email: "david.brown@example.com",
    organization: "Sydney Vision Specialists",
    licenseNumber: "NSW13579",
    specialization: "General Ophthalmology",
    yearsExperience: "20",
    location: {
      city: "Sydney",
      state: "NSW",
      country: "Australia",
      coordinates: { lat: -33.8688, lng: 151.2093 }
    },
    role: "surgeon",
    accountStatus: "active",
    createdAt: new Date().toISOString()
  }
]

async function addSampleSurgeons() {
  try {
    console.log('Adding sample surgeons...')
    
    for (const surgeon of sampleSurgeons) {
      const surgeonId = `sample_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
      await setDoc(doc(db, 'users', surgeonId), surgeon)
      console.log(`Added surgeon: Dr. ${surgeon.firstName} ${surgeon.lastName} in ${surgeon.location.city}`)
    }
    
    console.log('Sample surgeons added successfully!')
    process.exit(0)
  } catch (error) {
    console.error('Error adding sample surgeons:', error)
    process.exit(1)
  }
}

addSampleSurgeons()



