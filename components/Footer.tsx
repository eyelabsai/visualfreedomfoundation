import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-2">Global Refractive</h3>
            <h3 className="text-xl font-bold mb-4">Foundation</h3>
            <p className="text-gray-300 mb-2">
              Empowering People with
            </p>
            <p className="text-gray-300 mb-2">
              Visual Impairments
            </p>
            <p className="text-gray-300">
              Worldwide
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about-us" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/key-pillars" className="text-gray-300 hover:text-white transition-colors">Key Pillars</Link></li>
              <li><Link href="/contact-us" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="/patients" className="text-gray-300 hover:text-white transition-colors">Patients</Link></li>
              <li><Link href="/partners-and-community" className="text-gray-300 hover:text-white transition-colors">Partners</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><Link href="/login" className="text-gray-300 hover:text-white transition-colors">Login</Link></li>
              <li><Link href="/register" className="text-gray-300 hover:text-white transition-colors">Register</Link></li>
              <li><Link href="/my-account" className="text-gray-300 hover:text-white transition-colors">My Account</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 Visual Freedom Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 