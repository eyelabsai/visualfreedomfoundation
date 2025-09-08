import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BoardOfDirectors from '@/components/BoardOfDirectors'
import { getPage } from '@/lib/content'

export default function AboutPage() {
  // In a real app, you'd load this data server-side
  const aboutContent = {
    title: "About",
    content: "At Visual Freedom Foundation, we are committed to transforming the lives of amputees, paraplegics and communities worldwide with limited access to life-changing refractive surgeries and treatments. Our mission is to help people regain their sight, independence, and confidence, ensuring that everyone, regardless of their circumstances, can experience the freedom that comes with clear vision."
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="py-12">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">About Visual Freedom Foundation</h1>
            
            <div className="prose prose-lg max-w-none">
              <div className="bg-gray-50 rounded-lg p-8 mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Story</h2>
                <p className="text-lg text-[#324A6D] leading-relaxed">
                  {aboutContent.content}
                </p>
              </div>

              <div className="mb-12">
                <img 
                  src="/images/content/aboutusmissionvalueimpact.png" 
                  alt="Our Mission, Vision, and Impact" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>

              <div className="bg-vff-blue text-white rounded-lg p-8">
                <h2 className="text-2xl font-semibold mb-4">In the Press</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Focus on Independence</h4>
                    <p className="text-blue-100">
                      Featured in CRS Today discussing our mission to provide vision correction surgery to those in need.
                    </p>
                    <a 
                      href="https://crstoday.com/articles/mar-2022/a-focus-on-independence" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block mt-2 text-white hover:text-blue-200 underline"
                    >
                      Read Article
                    </a>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Spinal Cord Injury Zone</h4>
                    <p className="text-blue-100">
                      Coverage of our work providing sight to quadriplegics and expanding access to vision care.
                    </p>
                    <a 
                      href="https://spinalcordinjuryzone.com/news/2450/focus-on-independence-gives-sight-to-quadriplegics" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block mt-2 text-white hover:text-blue-200 underline"
                    >
                      Read Article
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <BoardOfDirectors />
      
      <Footer />
    </div>
  )
} 