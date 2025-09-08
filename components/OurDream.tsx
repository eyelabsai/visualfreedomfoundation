import React from 'react'

export default function OurDream() {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#33848C] mb-6">
            Advancing Vision Care For All On A Global Scale.
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            At Visual Freedom Foundation, we are committed to transforming the lives of amputees,
            paraplegics and communities worldwide with limited access to life-changing refractive
            surgeries and treatments. Our mission is to help people regain their sight, independence,
            and confidence, ensuring that everyone, regardless of their circumstances,
            can experience the freedom that comes with clear vision.
          </p>
        </div>
        
        {/* Video Section */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <img 
              src="/images/content/tajvideo.png" 
              alt="Taj Video" 
              className="w-full h-auto"
            />
          </div>
        </div>
        
        {/* Quote Image */}
        <div className="max-w-3xl mx-auto">
          <img 
            src="/images/content/quote.png" 
            alt="Quote" 
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}
