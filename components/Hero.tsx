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
                <p className="text-lg md:text-xl text-[#324A6D] font-light text-center leading-relaxed">
                  "laser vision correction gave me the freedom to do more with my life"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 