'use client'

import React, { useState, useEffect } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// Admin emails - you can modify this list
const ADMIN_EMAILS = [
  'gurpalvirdi@gmail.com', // Replace with your actual admin email
  'admin@visualfreedomfoundation.org', // Add more admin emails as needed
  'info@visualfreedomfoundation.org',
  'Suzanne@visual-freedom.org'
]

export default function AdminPage() {
  const { user, loading } = useAuth()
  const [surgeonData, setSurgeonData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    organization: '',
    licenseNumber: '',
    specialization: '',
    city: '',
    state: '',
    country: '',
    notes: ''
  })
  const [isCreating, setIsCreating] = useState(false)
  const [message, setMessage] = useState('')
  const [messageType, setMessageType] = useState<'success' | 'error'>('success')

  // Check if user is admin
  const isAdmin = user && ADMIN_EMAILS.includes(user.email)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setSurgeonData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const generateRandomPassword = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let password = ''
    for (let i = 0; i < 12; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return password
  }

  const handleCreateSurgeon = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsCreating(true)
    setMessage('')

    try {
      // Generate a temporary password
      const tempPassword = generateRandomPassword()

      // Geocode the address if location fields are provided
      let coordinates = null
      if (surgeonData.city || surgeonData.state || surgeonData.country) {
        const { geocodeAddress } = await import('@/lib/geocoding')
        coordinates = await geocodeAddress(surgeonData.city, surgeonData.state, surgeonData.country)
      }

      // Create the surgeon account using the new function
      const { createSurgeonAccount } = await import('@/lib/firebase')
      
      const result = await createSurgeonAccount(
        surgeonData.email,
        tempPassword,
        {
          ...surgeonData,
          coordinates,
          createdBy: user?.email,
          tempPassword: tempPassword
        }
      )

      if (result.user) {

        setMessage(`✅ Surgeon account created successfully! 
        
📧 Email: ${surgeonData.email}
🔑 Temporary Password: ${tempPassword}
        
Please send this information to the surgeon securely.`)
        setMessageType('success')
        
        // Reset form
        setSurgeonData({
          firstName: '',
          lastName: '',
          email: '',
          organization: '',
          licenseNumber: '',
          specialization: '',
          city: '',
          state: '',
          country: '',
          notes: ''
        })
      }
    } catch (error: any) {
      console.error('Create surgeon error:', error)
      
      if (error.code === 'auth/email-already-in-use') {
        setMessage('❌ An account with this email already exists')
      } else if (error.code === 'auth/invalid-email') {
        setMessage('❌ Invalid email address')
      } else {
        setMessage('❌ Failed to create surgeon account. Please try again.')
      }
      setMessageType('error')
    } finally {
      setIsCreating(false)
    }
  }

  // Show loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="flex-1 flex items-center justify-center py-12">
          <div className="text-center">
            <div className="text-lg text-gray-600">Loading...</div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  // Show access denied if not admin
  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="flex-1 flex items-center justify-center py-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-red-600 mb-4">Access Denied</h1>
            <p className="text-gray-600">You don't have permission to access this page.</p>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white shadow rounded-lg p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">
              Admin Panel - Create Surgeon Account
            </h1>
            
            <p className="text-gray-600 mb-6">
              Use this form to manually create accounts for surgeons who submitted the Google Form.
            </p>

            <form onSubmit={handleCreateSurgeon} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={surgeonData.firstName}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={surgeonData.lastName}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={surgeonData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-gray-700">
                  Organization/Hospital
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={surgeonData.organization}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="licenseNumber" className="block text-sm font-medium text-gray-700">
                    Medical License Number
                  </label>
                  <input
                    type="text"
                    id="licenseNumber"
                    name="licenseNumber"
                    value={surgeonData.licenseNumber}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="specialization" className="block text-sm font-medium text-gray-700">
                    Specialization
                  </label>
                  <select
                    id="specialization"
                    name="specialization"
                    value={surgeonData.specialization}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select Specialization</option>
                    <option value="Ophthalmology">Ophthalmology</option>
                    <option value="LASIK Surgery">LASIK Surgery</option>
                    <option value="Cataract Surgery">Cataract Surgery</option>
                    <option value="Retinal Surgery">Retinal Surgery</option>
                    <option value="Corneal Surgery">Corneal Surgery</option>
                    <option value="General Ophthalmology">General Ophthalmology</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>



              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={surgeonData.city}
                    onChange={handleChange}
                    placeholder="e.g., New York"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                    State/Province
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={surgeonData.state}
                    onChange={handleChange}
                    placeholder="e.g., NY"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                    Country
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={surgeonData.country}
                    onChange={handleChange}
                    placeholder="e.g., United States"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-gray-700">
                  Notes (from Google Form)
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={4}
                  value={surgeonData.notes}
                  onChange={handleChange}
                  placeholder="Copy any additional information from the Google Form submission..."
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isCreating}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isCreating ? 'Creating Account...' : 'Create Surgeon Account'}
                </button>
              </div>
            </form>

            {message && (
              <div className={`mt-6 p-4 rounded-md ${
                messageType === 'success' ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
              }`}>
                <div className={`text-sm whitespace-pre-line ${
                  messageType === 'success' ? 'text-green-700' : 'text-red-700'
                }`}>
                  {message}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}