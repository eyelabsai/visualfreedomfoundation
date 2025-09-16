import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="py-12">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h1>
              <p className="text-xl text-[#324A6D] max-w-3xl mx-auto">
                Get in touch with our team to learn more about our mission, partnership opportunities, or how you can support our vision care programs worldwide.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send us a message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vff-blue focus:border-transparent"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vff-blue focus:border-transparent"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vff-blue focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vff-blue focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option value="partnership">Partnership Opportunities</option>
                      <option value="volunteer">Volunteer Opportunities</option>
                      <option value="medical">Medical Professional Inquiry</option>
                      <option value="donation">Donation & Support</option>
                      <option value="patient">Patient Services</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vff-blue focus:border-transparent"
                      placeholder="Tell us how we can help you or how you'd like to get involved..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary py-3 text-lg"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Get in touch</h2>
                
                <div className="space-y-8">
                  {/* General Contact */}
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">General Information</h3>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <span className="text-vff-blue mr-3">📧</span>
                        <div>
                          <p className="font-medium">Email</p>
                          <p className="text-gray-600">info@visual-freedom.org</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <span className="text-vff-blue mr-3">🌐</span>
                        <div>
                          <p className="font-medium">Website</p>
                          <p className="text-gray-600">https://visual-freedom.org</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Board Contact */}
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Board Leadership</h3>
                    <div className="space-y-3">
                      <div>
                        <p className="font-medium">Board Chairman</p>
                        <p className="text-gray-600">Dr. Greg Parkhurst, MD</p>
                        <p className="text-gray-600">Parkhurst NuVision, San Antonio, TX</p>
                      </div>
                    </div>
                  </div>

                  {/* Partnership Contact */}
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Partnership Opportunities</h3>
                    <p className="text-gray-700 mb-4">
                      Interested in partnering with us or joining our network of medical professionals? We'd love to hear from you.
                    </p>
                    <button className="btn-primary">
                      Learn About Partnerships
                    </button>
                  </div>

                  {/* Emergency Contact */}
                  <div className="bg-vff-blue text-white rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-4">For Medical Emergencies</h3>
                    <p className="text-blue-100">
                      If you have a medical emergency, please contact your local emergency services immediately. The Visual Freedom Foundation provides support services but is not an emergency medical provider.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-20">
              <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">How can I become a partner?</h3>
                  <p className="text-gray-700">
                    We welcome medical professionals, institutions, and organizations to join our network. Contact us through the form above or <a href="https://docs.google.com/forms/d/e/1FAIpQLSfOdwDOD397b64vCNtmbR6iAuQiqC1yYLnca1YIZdnIUyU4wg/viewform?usp=sharing&ouid=101040064194418031486" target="_blank" rel="noopener noreferrer" className="text-vff-blue hover:text-blue-600 underline">click here</a> to become a VFF Ambassador.
                  </p>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Do you provide direct patient care?</h3>
                  <p className="text-gray-700">
                    We work through our network of partner organizations and medical professionals to provide vision care services. Contact us to learn about available programs in your area.
                  </p>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">How can I support your mission?</h3>
                  <p className="text-gray-700">
                    There are many ways to support our work, including volunteering, fundraising, spreading awareness, or partnering with us professionally. Get in touch to explore opportunities.
                  </p>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Where do you operate?</h3>
                  <p className="text-gray-700">
                    We operate globally through our network of partners and have programs active in over 400 countries worldwide, focusing on underserved communities with limited access to vision care.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
} 