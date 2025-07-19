'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useAuth } from '@/contexts/AuthContext'

export default function MyAccountPage() {
  const { user } = useAuth()
  const [isLoading, setIsLoading] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  })
  const [userData, setUserData] = useState<any>(null)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  // Load user data on component mount
  useEffect(() => {
    const loadUserData = async () => {
      if (user) {
        try {
          const { getUserData } = await import('@/lib/firebase')
          const data = await getUserData(user.uid)
          
          if (data) {
            setUserData(data)
            setFormData({
              firstName: data.firstName || '',
              lastName: data.lastName || '',
              email: data.email || user.email || ''
            })
          } else {
            // If no user data exists, use email from auth
            setFormData({
              firstName: '',
              lastName: '',
              email: user.email || ''
            })
          }
        } catch (error) {
          console.error('Error loading user data:', error)
        }
      }
    }

    loadUserData()
  }, [user])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    setSuccess('')

    try {
      const { updateUserData, createUserData } = await import('@/lib/firebase')
      
      const dataToSave = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        updatedAt: new Date().toISOString()
      }

      if (userData) {
        // Update existing user data
        await updateUserData(user?.uid, dataToSave)
      } else {
        // Create new user data with createdAt
        await createUserData(user?.uid, {
          ...dataToSave,
          createdAt: new Date().toISOString(),
          lastLogin: new Date().toISOString()
        })
      }
      
      setSuccess('Profile updated successfully!')
      setIsEditing(false)
      
      // Refresh user data
      const { getUserData } = await import('@/lib/firebase')
      const updatedData = await getUserData(user?.uid)
      setUserData(updatedData)
    } catch (error: any) {
      console.error('Update profile error:', error)
      setError('Failed to update profile. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleLogout = async () => {
    setIsLoading(true)
    
    try {
      const { authFunctions } = await import('@/lib/firebase')
      await authFunctions.signOut()
      
      // Redirect to home page
      window.location.href = '/'
    } catch (error) {
      console.error('Logout error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  // Redirect if not authenticated
  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="flex-1 flex items-center justify-center py-12 px-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Access Denied</h2>
            <p className="text-gray-600 mb-4">Please log in to access your account.</p>
            <Link href="/login" className="text-vff-blue hover:text-vff-darkBlue">
              Go to Login
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="py-12">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white shadow rounded-lg">
              {/* Header */}
              <div className="px-6 py-4 border-b border-gray-200">
                <h1 className="text-2xl font-bold text-gray-900">My Account</h1>
                <p className="text-gray-600">Manage your account settings and preferences</p>
              </div>

              <div className="p-6">
                {/* Success/Error Messages */}
                {success && (
                  <div className="mb-6 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded">
                    {success}
                  </div>
                )}
                
                {error && (
                  <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Profile Information */}
                  <div className="lg:col-span-2">
                    <div className="bg-gray-50 rounded-lg p-6">
                      <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-semibold text-gray-900">Profile Information</h2>
                        {!isEditing && (
                          <button
                            onClick={() => setIsEditing(true)}
                            className="btn-primary"
                          >
                            Edit Profile
                          </button>
                        )}
                      </div>
                      
                      {isEditing ? (
                        <form onSubmit={handleUpdateProfile} className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                                First Name
                              </label>
                              <input
                                id="firstName"
                                name="firstName"
                                type="text"
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-vff-blue focus:border-vff-blue"
                                value={formData.firstName}
                                onChange={handleChange}
                              />
                            </div>
                            <div>
                              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                                Last Name
                              </label>
                              <input
                                id="lastName"
                                name="lastName"
                                type="text"
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-vff-blue focus:border-vff-blue"
                                value={formData.lastName}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                              Email Address
                            </label>
                            <input
                              id="email"
                              name="email"
                              type="email"
                              required
                              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-vff-blue focus:border-vff-blue"
                              value={formData.email}
                              onChange={handleChange}
                            />
                          </div>
                          
                          <div className="flex space-x-3 pt-4">
                            <button
                              type="submit"
                              disabled={isLoading}
                              className="btn-primary disabled:opacity-50"
                            >
                              {isLoading ? 'Saving...' : 'Save Changes'}
                            </button>
                            <button
                              type="button"
                              onClick={() => {
                                setIsEditing(false)
                                setError('')
                                setSuccess('')
                                // Reset form data
                                if (userData) {
                                  setFormData({
                                    firstName: userData.firstName || '',
                                    lastName: userData.lastName || '',
                                    email: userData.email || user.email || ''
                                  })
                                }
                              }}
                              className="btn-secondary"
                            >
                              Cancel
                            </button>
                          </div>
                        </form>
                      ) : (
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700">First Name</label>
                            <p className="mt-1 text-sm text-gray-900">{formData.firstName || 'Not provided'}</p>
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-gray-700">Last Name</label>
                            <p className="mt-1 text-sm text-gray-900">{formData.lastName || 'Not provided'}</p>
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-gray-700">Email Address</label>
                            <p className="mt-1 text-sm text-gray-900">{formData.email}</p>
                          </div>
                          
                          {userData?.createdAt && (
                            <div>
                              <label className="block text-sm font-medium text-gray-700">Member Since</label>
                              <p className="mt-1 text-sm text-gray-900">{new Date(userData.createdAt).toLocaleDateString()}</p>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div>
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
                      
                      <div className="space-y-3">
                        <Link 
                          href="/lost-password" 
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                        >
                          Change Password
                        </Link>
                        
                        <button 
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                          disabled
                        >
                          Notification Settings (Coming Soon)
                        </button>
                        
                        <button 
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                          disabled
                        >
                          Privacy Settings (Coming Soon)
                        </button>
                      </div>
                      
                      <div className="mt-6 pt-6 border-t border-gray-200">
                        <button
                          onClick={handleLogout}
                          disabled={isLoading}
                          className="w-full btn-secondary disabled:opacity-50"
                        >
                          {isLoading ? 'Signing out...' : 'Sign Out'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
} 