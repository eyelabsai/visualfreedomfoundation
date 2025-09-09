import React from 'react'

export default function FoundationPillars() {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#33848C] mb-6">
            Our Foundation
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            The principles that guide our mission to provide life-changing vision care and create a world where sight is accessible to all.
          </p>
        </div>
        
        {/* Foundation Pillars Image */}
        <div className="max-w-4xl mx-auto">
          <img 
            src="/images/content/Foundation.svg" 
            alt="Foundation Pillars" 
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}
