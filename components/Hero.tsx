import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative h-[70vh] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/banners/hero-banner.jpg')",
          backgroundPosition: 'center center'
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30" />
      
      <div className="relative z-10 flex items-center h-full">
        <div className="flex w-full items-center">
          {/* Left side - Join VFF sidebar */}
          <div className="hidden lg:flex lg:w-1/2 justify-start">
            <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-lg p-6 w-96 shadow-xl ml-4">
              <h3 className="text-2xl font-bold text-[#33848C] mb-4">Join VFF</h3>
              <p className="text-gray-700 mb-6 text-sm">
                Restoring sight through refractive surgery for underserved communities around the world.
              </p>
              
              <div className="space-y-3 mb-6">
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfOdwDOD397b64vCNtmbR6iAuQiqC1yYLnca1YIZdnIUyU4wg/viewform?usp=sharing&ouid=101040064194418031486"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#33848C] text-white py-3 px-4 rounded text-sm font-medium hover:bg-[#2a6b72] transition-colors block text-center"
                >
                  Become a Volunteer Ophthalmologist
                </a>
                <button className="w-full bg-gray-200 text-gray-800 py-3 px-4 rounded text-sm font-medium hover:bg-gray-300 transition-colors">
                  Become An Optometry Ambassador
                </button>
                <button className="w-full bg-gray-200 text-gray-800 py-3 px-4 rounded text-sm font-medium hover:bg-gray-300 transition-colors">
                  Patient Application for Free Surgery
                </button>
                <button className="w-full bg-[#33848C] text-white py-4 px-4 rounded text-lg font-bold hover:bg-[#2a6b72] transition-colors">
                  DONATE NOW
                </button>
                <p className="text-center text-sm text-gray-600">$250 = 1 Surgery</p>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <a 
                  href="https://docs.google.com/forms/d/18g4tMYwF7ZD_XTPlRI58JjW1DLtTognrel1q-rTbfAs/preview?edit_requested=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 p-3 rounded text-center hover:bg-gray-200 transition-colors"
                >
                  <p className="font-semibold text-sm text-gray-800">For Ophthalmologists</p>
                  <p className="text-xs text-gray-600 mt-1">Enter Patient Details</p>
                </a>
                <a 
                  href="https://docs.google.com/forms/d/18g4tMYwF7ZD_XTPlRI58JjW1DLtTognrel1q-rTbfAs/preview?edit_requested=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 p-3 rounded text-center hover:bg-gray-200 transition-colors"
                >
                  <p className="font-semibold text-sm text-gray-800">For Optometrists</p>
                  <p className="text-xs text-gray-600 mt-1">Enter Patient Details</p>
                </a>
              </div>
            </div>
          </div>
          
          {/* Right side - Emilio story */}
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <div className="text-white max-w-2xl text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                Emilio always wanted to fly.
              </h1>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
                Thanks to you, now he can.
              </h2>
              <button className="border-2 border-white text-white px-8 py-3 text-lg font-medium hover:bg-white hover:text-black transition-all duration-300">
                Tell Me More
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Join VFF section */}
      <div className="lg:hidden absolute bottom-0 left-0 right-0 p-4">
        <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-lg p-6 shadow-xl">
          <h3 className="text-2xl font-bold text-[#33848C] mb-4">Join VFF</h3>
          <p className="text-gray-700 mb-6 text-sm">
            Restoring sight through refractive surgery for underserved communities around the world.
          </p>
          
          <div className="space-y-3 mb-6">
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSfOdwDOD397b64vCNtmbR6iAuQiqC1yYLnca1YIZdnIUyU4wg/viewform?usp=sharing&ouid=101040064194418031486"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#33848C] text-white py-3 px-4 rounded text-sm font-medium hover:bg-[#2a6b72] transition-colors block text-center"
            >
              Become a Volunteer Ophthalmologist
            </a>
            <button className="w-full bg-gray-200 text-gray-800 py-3 px-4 rounded text-sm font-medium hover:bg-gray-300 transition-colors">
              Become An Optometry Ambassador
            </button>
            <button className="w-full bg-gray-200 text-gray-800 py-3 px-4 rounded text-sm font-medium hover:bg-gray-300 transition-colors">
              Patient Application for Free Surgery
            </button>
            <button className="w-full bg-[#33848C] text-white py-4 px-4 rounded text-lg font-bold hover:bg-[#2a6b72] transition-colors">
              DONATE NOW
            </button>
            <p className="text-center text-sm text-gray-600">$250 = 1 Surgery</p>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <a 
              href="https://docs.google.com/forms/d/18g4tMYwF7ZD_XTPlRI58JjW1DLtTognrel1q-rTbfAs/preview?edit_requested=true"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 p-3 rounded text-center hover:bg-gray-200 transition-colors"
            >
              <p className="font-semibold text-sm text-gray-800">For Ophthalmologists</p>
              <p className="text-xs text-gray-600 mt-1">Enter Patient Details</p>
            </a>
            <a 
              href="https://docs.google.com/forms/d/18g4tMYwF7ZD_XTPlRI58JjW1DLtTognrel1q-rTbfAs/preview?edit_requested=true"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 p-3 rounded text-center hover:bg-gray-200 transition-colors"
            >
              <p className="font-semibold text-sm text-gray-800">For Optometrists</p>
              <p className="text-xs text-gray-600 mt-1">Enter Patient Details</p>
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="bg-gray-600 bg-opacity-50 p-2 rounded">
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
} 