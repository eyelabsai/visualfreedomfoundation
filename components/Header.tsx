'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useAuth } from '@/contexts/AuthContext'

// Admin emails - update this list with actual admin emails
const ADMIN_EMAILS = [
  'gurpalvirdi@gmail.com',
  'admin@visualfreedomfoundation.org',
  'info@visualfreedomfoundation.org'
]

export default function Header() {
  const { user, loading } = useAuth()
  const [userData, setUserData] = useState<any>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3">
              <Image 
                src="/images/content/vffwhitebackgroundhorizontal.png" 
                alt="Visual Freedom Foundation Logo" 
                width={250} 
                height={75}
                className="h-16 w-auto"
              />
            </Link>
          </div>
          
          <nav className="hidden lg:flex items-center space-x-8 ml-12">
            <Link href="/" className="text-black hover:text-[#33848C] transition-colors whitespace-nowrap font-medium bg-gray-100 px-3 py-1 rounded">
              HOME
            </Link>
            <Link href="/about-us" className="text-black hover:text-[#33848C] transition-colors whitespace-nowrap font-medium">
              ABOUT US
            </Link>
            <Link href="/services" className="text-black hover:text-[#33848C] transition-colors whitespace-nowrap font-medium">
              RESOURCES
            </Link>
            <Link href="/surgeon-map" className="text-black hover:text-[#33848C] transition-colors whitespace-nowrap font-medium">
              SURGEON MAP
            </Link>
            <Link href="/partners-and-community" className="text-black hover:text-[#33848C] transition-colors whitespace-nowrap font-medium">
              OUR PARTNERS
            </Link>
            <Link href="/contact-us" className="text-black hover:text-[#33848C] transition-colors whitespace-nowrap font-medium">
              CONTACT US
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-[#33848C] hover:bg-gray-100 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          
          <div className="flex items-center space-x-4 ml-8">
            {loading ? (
              // Show loading state
              <div className="text-gray-600">Loading...</div>
            ) : user ? (
              // Show authenticated user state with divider
              <>
                <div className="h-6 w-px bg-gray-300 hidden md:block"></div>
                <div className="flex items-center space-x-4">
                  <span className="text-gray-700 hidden sm:block whitespace-nowrap text-sm">
                    Welcome, {userData?.firstName || user.displayName?.split(' ')[0] || 'User'}!
                  </span>
                  <span className="text-gray-700 sm:hidden whitespace-nowrap text-sm">
                    Hi, {userData?.firstName || user.displayName?.split(' ')[0] || 'User'}!
                  </span>
                  {/* Show Admin Panel link for admin users */}
                  {user && ADMIN_EMAILS.includes(user.email) && (
                    <Link href="/admin" className="btn-primary text-sm whitespace-nowrap">
                      Admin Panel
                    </Link>
                  )}
                  <Link href="/my-account" className="btn-secondary text-sm whitespace-nowrap">
                    Profile
                  </Link>
                  <button 
                    onClick={handleLogout}
                    className="text-gray-600 hover:text-gray-800 transition-colors text-sm whitespace-nowrap"
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
                {/* <Link href="/register" className="btn-primary">
                  Register
                </Link> */}
              </>
            )}
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-[#33848C] transition-colors font-medium px-4 py-2 hover:bg-gray-50 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                HOME
              </Link>
              <Link 
                href="/about-us" 
                className="text-gray-700 hover:text-[#33848C] transition-colors font-medium px-4 py-2 hover:bg-gray-50 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                ABOUT US
              </Link>
              <Link 
                href="/services" 
                className="text-gray-700 hover:text-[#33848C] transition-colors font-medium px-4 py-2 hover:bg-gray-50 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                RESOURCES
              </Link>
              <Link 
                href="/surgeon-map" 
                className="text-gray-700 hover:text-[#33848C] transition-colors font-medium px-4 py-2 hover:bg-gray-50 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                SURGEON MAP
              </Link>
              <Link 
                href="/partners-and-community" 
                className="text-gray-700 hover:text-[#33848C] transition-colors font-medium px-4 py-2 hover:bg-gray-50 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                OUR PARTNERS
              </Link>
              <Link 
                href="/contact-us" 
                className="text-gray-700 hover:text-[#33848C] transition-colors font-medium px-4 py-2 hover:bg-gray-50 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                CONTACT US
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
} 