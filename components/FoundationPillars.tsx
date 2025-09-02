import React from 'react'

export default function FoundationPillars() {
  const pillars = [
    {
      id: 1,
      title: "FOCUS ON INDEPENDENCE",
      description: "Supporting individuals with spinal cord injuries, quadriplegia, or conditions limiting hand use.",
      color: "bg-red-500",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      )
    },
    {
      id: 2,
      title: "EYE TO EYE INITIATIVE",
      description: "Inspired by TOMS \"buy one, give one\": each paid surgery funds a free surgery for someone in need.",
      color: "bg-yellow-500",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      )
    },
    {
      id: 3,
      title: "REFRACTIVE SURGERY IN THE DEVELOPING WORLD",
      description: "Building sustainable solutions and advanced centers for underserved regions.",
      color: "bg-[#33848C]",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      )
    },
    {
      id: 4,
      title: "VISUAL FREEDOM CENTERS OF EXCELLENCE",
      description: "Local care centers offering free refractive surgeries for lower-income individuals.",
      color: "bg-[#4AD9D9]",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>
      )
    }
  ]

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
        
        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => (
            <div key={pillar.id} className="relative">
              {/* Pillar Card */}
              <div className={`${pillar.color} text-white p-6 rounded-lg h-full flex flex-col`}>
                {/* Icon */}
                <div className="mb-4 text-white opacity-90">
                  {pillar.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-lg font-bold mb-4 leading-tight">
                  {pillar.title}
                </h3>
                
                {/* Description */}
                <p className="text-sm leading-relaxed flex-grow">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
