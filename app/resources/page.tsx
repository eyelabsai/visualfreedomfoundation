import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ResourcesPage() {
  const faqs = [
    {
      question: "How Can I participate in the VFF?",
      answer: "We welcome medical professionals, institutions, and organizations to join our network. Contact us by joining VFF on the home page or email info@visual-freedom.org."
    },
    {
      question: "Do You Provide Direct Patient Care?",
      answer: "We work through our network of partner organizations and medical professionals to provide vision care services. Contact us to learn about available programs In your area."
    },
    {
      question: "Where Do You Operate?",
      answer: "We operate globally through our network of partners and have programs active in over 400 countries worldwide, focusing on underserved communities with limited access to vision care."
    }
  ]

  const practiceKitItems = [
    "Press Release",
    "Social Post Copy", 
    "Talking Points"
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0b1739] via-[#14304c] to-[#35848c] text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Resources</h1>
            <p className="text-xl text-gray-200">
              Essential tools and information to support your involvement with the Visual Freedom Foundation
            </p>
          </div>
        </div>
      </section>

      {/* VFF Practice Kit Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">VFF Practice Kit</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                The Visual Freedom Foundation Practice Kit equips clinics with the tools they need to promote VFF in their communities. It includes essential patient-facing materials to raise awareness, along with media resources to maximize local coverage about your practice and the Visual Freedom Foundation.
              </p>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">In folder:</h3>
                <ul className="space-y-3">
                  {practiceKitItems.map((item, index) => (
                    <li key={index} className="flex items-center text-blue-800">
                      <svg className="w-5 h-5 mr-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                  <details className="group">
                    <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                      <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                      <svg 
                        className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform duration-200" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-6 pb-6">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-[#0b1739] via-[#14304c] to-[#35848c] text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Involved?</h2>
            <p className="text-xl text-gray-200 mb-8">
              Join our network of medical professionals and organizations working to provide vision care worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact-us" 
                className="bg-white text-[#0b1739] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </a>
              <a 
                href="mailto:info@visual-freedom.org" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#0b1739] transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
