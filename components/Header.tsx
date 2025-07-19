'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useAuth } from '@/contexts/AuthContext'

export default function Header() {
  const { user, loading } = useAuth()
  const [userData, setUserData] = useState<any>(null)

  // Load user data when user is authenticated
  useEffect(() => {
    const loadUserData = async () => {
      if (user) {
        try {
          const { getUserData } = await import('@/lib/firebase')
          const data = await getUserData(user.uid)
          setUserData(data)
        } catch (error) {
          console.error('Error loading user data:', error)
        }
      } else {
        setUserData(null)
      }
    }

    loadUserData()
  }, [user])

  const handleLogout = async () => {
    try {
      const { authFunctions } = await import('@/lib/firebase')
      await authFunctions.signOut()
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-[#33848C]">
              Visual Freedom Foundation
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-[#33848C] transition-colors">
              Home
            </Link>
            <Link href="/about-us" className="text-gray-700 hover:text-[#33848C] transition-colors">
              About
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-[#33848C] transition-colors">
              Services
            </Link>
            <Link href="/key-pillars" className="text-gray-700 hover:text-[#33848C] transition-colors">
              Key Pillars
            </Link>
            <Link href="/partners-and-community" className="text-gray-700 hover:text-[#33848C] transition-colors">
              Partners
            </Link>
            <Link href="/contact-us" className="text-gray-700 hover:text-[#33848C] transition-colors">
              Contact
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            {loading ? (
              // Show loading state
              <div className="text-gray-600">Loading...</div>
            ) : user ? (
              // Show authenticated user state with divider
              <>
                <div className="h-6 w-px bg-gray-300 hidden md:block"></div>
                <div className="flex items-center space-x-4">
                  <span className="text-gray-700 hidden sm:block">
                    Welcome, {userData?.firstName || user.displayName?.split(' ')[0] || 'User'}!
                  </span>
                  <span className="text-gray-700 sm:hidden">
                    Hi, {userData?.firstName || user.displayName?.split(' ')[0] || 'User'}!
                  </span>
                  <Link href="/my-account" className="btn-secondary">
                    Profile
                  </Link>
                  <button 
                    onClick={handleLogout}
                    className="text-gray-600 hover:text-gray-800 transition-colors text-sm"
                  >
                    Logout
                  </button>
                </div>
              </>
            ) : (
              // Show login/register buttons for non-authenticated users with divider
              <>
                <div className="h-6 w-px bg-gray-300 hidden md:block"></div>
                <Link href="/login" className="btn-secondary">
                  Login
                </Link>
                <Link href="/register" className="btn-primary">
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  )
} 