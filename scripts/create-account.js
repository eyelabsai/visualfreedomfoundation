// Script to create user accounts with authentication
// Run this with: node scripts/create-account.js

import { initializeApp } from 'firebase/app'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
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
const auth = getAuth(app)
const db = getFirestore(app)

// Generate random password
function generateRandomPassword() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%'
  let password = ''
  for (let i = 0; i < 12; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return password
}

// Account details - EDIT THIS SECTION
const accountDetails = {
  firstName: 'Suzanne',
  lastName: 'LaKamp Adkins',
  email: 'Suzanne@visual-freedom.org',
  role: 'admin', // Options: 'admin', 'surgeon', 'user'
  organization: 'Visual Freedom Foundation',
  // Add more fields as needed for surgeons:
  // licenseNumber: '',
  // specialization: '',
  // location: { city: '', state: '', country: '' }
}

async function createAccount() {
  try {
    const { email, firstName, lastName, role, organization } = accountDetails
    const tempPassword = 'Password123' // Default temporary password
    
    console.log(`Creating account for ${firstName} ${lastName}...`)
    console.log('Email:', email)
    
    // Create authentication account
    const userCredential = await createUserWithEmailAndPassword(auth, email, tempPassword)
    const user = userCredential.user
    
    console.log('✅ Authentication account created!')
    console.log('User ID:', user.uid)
    
    // Create user profile in Firestore
    const userData = {
      firstName,
      lastName,
      email,
      role,
      organization: organization || '',
      accountStatus: 'active',
      createdAt: new Date().toISOString(),
      createdBy: 'script',
      tempPassword: tempPassword,
      passwordChangeRequired: true
    }
    
    await setDoc(doc(db, 'users', user.uid), userData)
    
    console.log('✅ User profile created in Firestore!')
    console.log('\n' + '='.repeat(70))
    console.log('ACCOUNT CREATED SUCCESSFULLY!')
    console.log('='.repeat(70))
    console.log('📧 Email:', email)
    console.log('🔑 Temporary Password:', tempPassword)
    console.log('👤 Role:', role)
    console.log('🏢 Organization:', organization)
    console.log('='.repeat(70))
    console.log('\n⚠️  IMPORTANT: Send this password securely to the user!')
    console.log('They will be required to change it on first login.\n')
    
    process.exit(0)
  } catch (error) {
    console.error('❌ Error creating account:', error.message)
    if (error.code === 'auth/email-already-in-use') {
      console.error('\n⚠️  This email already has an account.')
      console.error('Use the password reset feature instead: http://localhost:3000/lost-password')
    }
    process.exit(1)
  }
}

createAccount()

