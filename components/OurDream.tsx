import React from 'react'

export default function OurDream() {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#33848C] mb-6">
            Our Dream
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            At Global Refractive Foundation, we are committed to transforming the lives of amputees, paraplegics and communities worldwide with limited access to life-changing refractive surgeries and treatments. Our mission is to help people regain their sight, independence, and confidence, ensuring that everyone, regardless of their circumstances.
          </p>
        </div>
        
        {/* Video Section */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="relative bg-gray-200 rounded-lg overflow-hidden shadow-lg">
            <div className="aspect-video bg-gray-300 flex items-center justify-center">
              {/* Placeholder for video - you can replace this with actual video embed */}
              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-8 h-8 text-[#33848C] ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <p className="text-gray-600 font-medium">Jessica Cox Video</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Jessica Cox Banner */}
        <div className="bg-gradient-to-r from-[#33848C] to-[#4AD9D9] text-white py-6 px-8 rounded-lg">
          <p className="text-center text-lg leading-relaxed">
            Born without arms, Jessica Cox has flown planes and inspired millions — but glasses held her back. After LASIK, she gained the freedom of clear vision without limits.
          </p>
        </div>
      </div>
    </section>
  )
}
