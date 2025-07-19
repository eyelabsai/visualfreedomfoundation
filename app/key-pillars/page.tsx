import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function KeyPillarsPage() {
  const pillars = [
    {
      title: "Innovation",
      description: "We leverage cutting-edge surgical interventions and the latest advances in refractive surgery to provide the best possible outcomes for our patients.",
      icon: "🔬"
    },
    {
      title: "Accessibility",
      description: "Breaking down barriers to vision care by reaching underserved communities and making life-changing treatments available to those who need them most.",
      icon: "🌍"
    },
    {
      title: "Excellence",
      description: "Maintaining the highest standards of medical care through our network of skilled refractive surgeons and medical professionals worldwide.",
      icon: "⭐"
    },
    {
      title: "Partnership",
      description: "Building strong collaborations with medical professionals, volunteers, and organizations to expand our reach and impact globally.",
      icon: "🤝"
    },
    {
      title: "Compassion",
      description: "Driven by empathy and understanding, we are committed to transforming lives and restoring independence through the gift of sight.",
      icon: "❤️"
    },
    {
      title: "Sustainability",
      description: "Creating lasting change through sustainable programs that continue to benefit communities long after our initial intervention.",
      icon: "🌱"
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
              <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Key Pillars</h1>
              <p className="text-xl text-[#324A6D] max-w-3xl mx-auto">
                The foundational principles that guide our mission to provide life-changing vision care and create a world where sight is accessible to all.
              </p>
            </div>

            {/* Pillars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {pillars.map((pillar, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
                  <div className="text-4xl mb-4 text-center">{pillar.icon}</div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">{pillar.title}</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Our Approach Section */}
            <div className="bg-gray-50 rounded-lg p-12 mb-16">
              <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Our Approach</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Comprehensive Care</h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    We believe in providing holistic vision care that addresses not just the medical needs of our patients, but also their emotional and social well-being. Our approach ensures that every individual receives personalized care tailored to their unique circumstances.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="text-vff-blue mr-2">✓</span>
                      Pre-operative consultation and assessment
                    </li>
                    <li className="flex items-center">
                      <span className="text-vff-blue mr-2">✓</span>
                      State-of-the-art surgical procedures
                    </li>
                    <li className="flex items-center">
                      <span className="text-vff-blue mr-2">✓</span>
                      Post-operative care and follow-up
                    </li>
                    <li className="flex items-center">
                      <span className="text-vff-blue mr-2">✓</span>
                      Ongoing support and rehabilitation
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Global Impact</h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Through our network of dedicated medical professionals and partners, we're creating a lasting impact on communities worldwide. Our work extends beyond individual treatments to building sustainable healthcare infrastructure.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-vff-blue">30k+</div>
                      <div className="text-gray-600">Doctors Serving</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-vff-blue">400+</div>
                      <div className="text-gray-600">Countries Reached</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-vff-blue">$2.5M</div>
                      <div className="text-gray-600">In Support</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-vff-blue">550+</div>
                      <div className="text-gray-600">Programs Active</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-vff-blue text-white rounded-lg p-12 text-center">
              <h2 className="text-3xl font-semibold mb-4">
                Be Part of Our Mission
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Whether you're a medical professional, a potential partner, or someone who shares our vision, there are many ways to get involved and make a difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-vff-blue hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors">
                  Join Our Network
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-vff-blue font-bold py-3 px-8 rounded-lg transition-colors">
                  Learn More
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