import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function PartnersPage() {
  const partners = [
    {
      name: "Parkhurst NuVision",
      location: "San Antonio, TX, USA",
      description: "Leading vision correction center providing innovative LASIK and refractive surgery solutions.",
      contact: "Dr. Greg Parkhurst, MD - Board Chairman"
    },
    {
      name: "iOR Partners",
      location: "Kansas City, MO, USA", 
      description: "Advanced ophthalmology practice specializing in refractive surgery and comprehensive eye care.",
      contact: "Dr. Dan Durrie, MD - Board Member"
    },
    {
      name: "Alexandria University",
      location: "Cairo, Egypt",
      description: "Academic medical institution advancing eye care research and education in the Middle East.",
      contact: "Dr. Osama Ibrahim, MD - Board Member"
    },
    {
      name: "Institute Zaldivar",
      location: "Mendoza, Argentina",
      description: "Premier ophthalmology institute serving Latin America with cutting-edge vision correction procedures.",
      contact: "Dr. Roger Zaldivar, MD - Board Member"
    },
    {
      name: "Tylock-George",
      location: "Dallas, TX, USA",
      description: "Comprehensive eye care practice committed to advancing vision health through innovative treatments.",
      contact: "Dr. Taj Nasser, MD - Board Member"
    }
  ]

  const communityPrograms = [
    {
      title: "Surgeon Training Programs",
      description: "Comprehensive training programs for refractive surgeons worldwide to expand access to quality vision care.",
      impact: "30k+ doctors trained"
    },
    {
      title: "Community Outreach Initiatives", 
      description: "Direct outreach to underserved communities to identify and treat preventable causes of blindness.",
      impact: "400+ countries reached"
    },
    {
      title: "Medical Equipment Donation",
      description: "Providing essential surgical equipment and technology to facilities in need around the world.",
      impact: "$2.5M in support provided"
    },
    {
      title: "Research & Development",
      description: "Supporting innovative research to advance refractive surgery techniques and accessibility.",
      impact: "550+ active programs"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="py-12">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">Partners & Community</h1>
              <p className="text-xl text-[#324A6D] max-w-3xl mx-auto">
                Building a global network of medical professionals, institutions, and communities working together to make vision care accessible to all.
              </p>
            </div>

            {/* Partners Section */}
            <div className="mb-20">
              <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Our Partners</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {partners.map((partner, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">{partner.name}</h3>
                    <p className="text-vff-blue font-medium mb-4">{partner.location}</p>
                    <p className="text-gray-700 leading-relaxed mb-4">{partner.description}</p>
                    <p className="text-sm text-gray-600 font-medium">{partner.contact}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Community Programs Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Community Programs</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {communityPrograms.map((program, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-8">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">{program.title}</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">{program.description}</p>
                    <div className="bg-vff-blue text-white px-4 py-2 rounded-lg inline-block">
                      <span className="font-semibold">{program.impact}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Join Our Network Section */}
            <div className="bg-gray-50 rounded-lg p-12 mb-16">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-semibold text-gray-900 mb-4">Join Our Network</h2>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                  Whether you're a medical professional, institution, or organization, there are many ways to partner with us and make a difference.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">👨‍⚕️</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Medical Professionals</h3>
                  <p className="text-gray-700">Join our network of surgeons and healthcare providers making vision care accessible worldwide.</p>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl mb-4">🏥</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Healthcare Institutions</h3>
                  <p className="text-gray-700">Partner with us to expand your impact and reach underserved communities in need of vision care.</p>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl mb-4">🌟</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Volunteers & Supporters</h3>
                  <p className="text-gray-700">Support our mission through volunteering, fundraising, or spreading awareness about our cause.</p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-vff-blue text-white rounded-lg p-12 text-center">
              <h2 className="text-3xl font-semibold mb-4">
                Ready to Partner With Us?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Together, we can create a world where no one is held back by visual impairments. Join our global community of partners working to transform lives through vision care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-vff-blue hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors">
                  Become a Partner
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-vff-blue font-bold py-3 px-8 rounded-lg transition-colors">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
} 