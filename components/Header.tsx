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
    <header className="relative shadow-sm border-b">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b1739] via-[#14304c] to-[#35848c]"></div>
      
      <div className="container-custom relative z-10">
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
            <Link href="/" className="text-white hover:text-[#87CEEB] transition-colors whitespace-nowrap font-medium">
              HOME
            </Link>
            <Link href="/about-us" className="text-white hover:text-[#87CEEB] transition-colors whitespace-nowrap font-medium">
              ABOUT US
            </Link>
            <Link href="/resources" className="text-white hover:text-[#87CEEB] transition-colors whitespace-nowrap font-medium">
              RESOURCES
            </Link>
            <Link href="/surgeon-map" className="text-white hover:text-[#87CEEB] transition-colors whitespace-nowrap font-medium">
              SURGEON MAP
            </Link>
            <Link href="/partners-and-community" className="text-white hover:text-[#87CEEB] transition-colors whitespace-nowrap font-medium">
              OUR PARTNERS
            </Link>
            <Link href="/contact-us" className="text-white hover:text-[#87CEEB] transition-colors whitespace-nowrap font-medium">
              CONTACT US
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-white hover:text-[#87CEEB] hover:bg-white/20 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          
          <div className="flex items-center space-x-4 ml-8">
            {loading ? (
              // Show loading state
              <div className="text-white/80">Loading...</div>
            ) : user ? (
              // Show authenticated user state with divider
              <>
                <div className="h-6 w-px bg-white/30 hidden md:block"></div>
                <div className="flex items-center space-x-4">
                  <span className="text-white hidden sm:block whitespace-nowrap text-sm">
                    Welcome, {userData?.firstName || user.displayName?.split(' ')[0] || 'User'}!
                  </span>
                  <span className="text-white sm:hidden whitespace-nowrap text-sm">
                    Hi, {userData?.firstName || user.displayName?.split(' ')[0] || 'User'}!
                  </span>
                  {/* Show Admin Panel link for admin users */}
                  {user && ADMIN_EMAILS.includes(user.email) && (
                    <Link href="/admin" className="bg-white text-[#0b1739] hover:bg-white/90 px-3 py-1 rounded text-sm whitespace-nowrap transition-colors">
                      Admin Panel
                    </Link>
                  )}
                  <Link href="/my-account" className="bg-white/20 text-white hover:bg-white/30 px-3 py-1 rounded text-sm whitespace-nowrap transition-colors">
                    Profile
                  </Link>
                  <button 
                    onClick={handleLogout}
                    className="text-white hover:text-[#87CEEB] transition-colors text-sm whitespace-nowrap"
                  >
                    Logout
                  </button>
                </div>
              </>
            ) : (
              // Show login/register buttons for non-authenticated users with divider
              <>
                <div className="h-6 w-px bg-white/30 hidden md:block"></div>
                <Link href="/login" className="bg-white/20 text-white hover:bg-white/30 px-4 py-2 rounded transition-colors">
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
          <div className="lg:hidden border-t border-white/20 py-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-white hover:text-[#87CEEB] transition-colors font-medium px-4 py-2 hover:bg-white/20 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                HOME
              </Link>
              <Link 
                href="/about-us" 
                className="text-white hover:text-[#87CEEB] transition-colors font-medium px-4 py-2 hover:bg-white/20 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                ABOUT US
              </Link>
              <Link 
                href="/resources" 
                className="text-white hover:text-[#87CEEB] transition-colors font-medium px-4 py-2 hover:bg-white/20 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                RESOURCES
              </Link>
              <Link 
                href="/surgeon-map" 
                className="text-white hover:text-[#87CEEB] transition-colors font-medium px-4 py-2 hover:bg-white/20 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                SURGEON MAP
              </Link>
              <Link 
                href="/partners-and-community" 
                className="text-white hover:text-[#87CEEB] transition-colors font-medium px-4 py-2 hover:bg-white/20 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                OUR PARTNERS
              </Link>
              <Link 
                href="/contact-us" 
                className="text-white hover:text-[#87CEEB] transition-colors font-medium px-4 py-2 hover:bg-white/20 rounded-md"
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