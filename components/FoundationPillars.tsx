'use client'

import React, { useState } from 'react'

interface PillarData {
  id: string
  title: string
  description: string
  link?: string
  linkText?: string
}

const pillarData: PillarData[] = [
  {
    id: 'focus-independence',
    title: 'Focus on Independence',
    description: 'Join the Visual Freedom Foundation network. Partner with us to restore sight and independence in your community — supporting individuals with upper limb disabilities and those who are bed- or wheelchair-bound.'
  },
  {
    id: 'eye-to-eye',
    title: 'Eye 2 Eye Initiative',
    description: 'Sponsor a Surgery $250 = One eye surgery. Your contribution can restore someone\'s sight. Donate $250 for every paid refractive surgery done in your office to sponsor a refractive surgery for someone in need. Help us reach more people by displaying our handout in your waiting room.',
    link: '#',
    linkText: 'Donate Now'
  },
  {
    id: 'developing-world',
    title: 'Refractive Surgery in the Developing World',
    description: 'Share our mission with colleagues and patients to multiply our impact. Encourage them to donate, volunteer, and join the Visual Freedom Foundation network.',
    link: '/services',
    linkText: 'Link to Resources section'
  },
  {
    id: 'centers-excellence',
    title: 'Visual Freedom Centers of Excellence',
    description: 'Join us as a Visual Freedom Center of Excellence and help transform lives in your own community. Offer free refractive surgery to just one patient each month — reaching those living below the poverty line and individuals for whom glasses or contact lenses are not a practical option.'
  }
]

export default function FoundationPillars() {
  const [hoveredPillar, setHoveredPillar] = useState<string | null>(null)

  const handleMouseEnter = (pillarId: string) => {
    setHoveredPillar(pillarId)
  }

  const handleMouseLeave = () => {
    setHoveredPillar(null)
  }

  const getPillarInfo = (pillarId: string) => {
    return pillarData.find(pillar => pillar.id === pillarId)
  }

  return (
    <div className="relative">
      {/* Use the original SVG as background */}
      <div className="relative w-1/2 mx-auto">
        <img 
          src="/images/content/Foundation.svg" 
          alt="Foundation Pillars" 
          className="w-full h-auto"
        />
        
        {/* Invisible hover areas overlaid on the SVG */}
        <div className="absolute inset-0">
          {/* Pillar 1 - Focus on Independence */}
          <div 
            className="absolute cursor-pointer hover:bg-red-500/20 transition-colors border border-red-500/30"
            style={{ 
              left: '8.7%', 
              top: '25.4%', 
              width: '19.9%', 
              height: '58.9%' 
            }}
            onMouseEnter={() => handleMouseEnter('focus-independence')}
            onMouseLeave={handleMouseLeave}
          />
          
          {/* Pillar 2 - Eye 2 Eye Initiative */}
          <div 
            className="absolute cursor-pointer hover:bg-yellow-500/20 transition-colors border border-yellow-500/30"
            style={{ 
              left: '29.7%', 
              top: '25.4%', 
              width: '19.9%', 
              height: '58.9%' 
            }}
            onMouseEnter={() => handleMouseEnter('eye-to-eye')}
            onMouseLeave={handleMouseLeave}
          />
          
          {/* Pillar 3 - Refractive Surgery in the Developing World */}
          <div 
            className="absolute cursor-pointer hover:bg-teal-500/20 transition-colors border border-teal-500/30"
            style={{ 
              left: '50.7%', 
              top: '25.4%', 
              width: '19.9%', 
              height: '58.9%' 
            }}
            onMouseEnter={() => handleMouseEnter('developing-world')}
            onMouseLeave={handleMouseLeave}
          />
          
          {/* Pillar 4 - Visual Freedom Centers of Excellence */}
          <div 
            className="absolute cursor-pointer hover:bg-blue-400/20 transition-colors border border-blue-400/30"
            style={{ 
              left: '71.7%', 
              top: '25.4%', 
              width: '19.9%', 
              height: '58.9%' 
            }}
            onMouseEnter={() => handleMouseEnter('centers-excellence')}
            onMouseLeave={handleMouseLeave}
          />
        </div>
      </div>


      {/* Hover tooltip */}
      {hoveredPillar && (
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 z-50 bg-white rounded-lg shadow-xl p-3 max-w-xs border">
          <div className="text-center">
            <h3 className="text-sm font-bold text-gray-900 mb-2">
              {getPillarInfo(hoveredPillar)?.title}
            </h3>
            <p className="text-xs text-gray-700 mb-2 leading-relaxed">
              {getPillarInfo(hoveredPillar)?.description}
            </p>
            {getPillarInfo(hoveredPillar)?.link && (
              <a 
                href={getPillarInfo(hoveredPillar)?.link}
                className="inline-block bg-[#33848C] text-white px-3 py-1 rounded text-xs hover:bg-[#2a6b73] transition-colors"
              >
                {getPillarInfo(hoveredPillar)?.linkText}
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  )
}