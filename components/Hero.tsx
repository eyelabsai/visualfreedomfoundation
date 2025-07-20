import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-[305px] bg-gradient-to-r from-primary-600 to-primary-700">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/banners/hero-banner.jpg')",
          backgroundPosition: 'center center'
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      
      <div className="container-custom relative z-10">
        <div className="flex items-center min-h-[305px]">
          <div className="w-full md:w-1/2 p-4">
            <div className="bg-white bg-opacity-90 rounded-lg p-6 md:p-8">
              <div className="text-center mb-4">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 capitalize leading-tight">
                  Imagine having to put your contacts in like this
                </h1>
              </div>
              
              <div className="bg-white bg-opacity-90 rounded-lg p-4 md:p-6">
                <p className="text-lg md:text-xl text-[#324A6D] font-light text-center leading-relaxed mb-6">
                  "laser vision correction gave me the freedom to do more with my life"
                </p>
                
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfOdwDOD397b64vCNtmbR6iAuQiqC1yYLnca1YIZdnIUyU4wg/viewform?usp=sharing&ouid=101040064194418031486" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-[#33848C] hover:bg-[#2a6b72] text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 text-center"
                  >
                    Join Now - Physician Enrollment
                  </a>
                  <a 
                    href="https://docs.google.com/forms/d/18g4tMYwF7ZD_XTPlRI58JjW1DLtTognrel1q-rTbfAs/edit?ts=68004b0d" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white hover:bg-gray-100 text-[#33848C] font-bold py-3 px-6 rounded-lg border-2 border-[#33848C] transition-colors duration-300 text-center"
                  >
                    Patient Reporting Form
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 