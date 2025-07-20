import React from 'react'

export default function MissionVision() {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Video */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-lg">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 text-center capitalize leading-tight">
                Vision Correction Surgery for a Brighter Future
              </h1>
            </div>
          </div>
          
          {/* Right Column - Video */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-lg">
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <iframe
                  src="https://player.vimeo.com/video/1077604030?h=8f7685f17a&dnt=1&app_id=122963&title=0&byline=0&portrait=0&controls=1&autopause=0"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                  title="VFF Video"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Welcome Section */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="w-full max-w-lg">
              <img
                src="/images/content/vision-correction-illustration.png"
                alt="Vision Correction"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
          
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6 capitalize leading-tight">
              Welcome to the Visual Freedom Foundation
            </h2>
            <p className="text-lg md:text-xl text-[#324A6D] font-light leading-relaxed">
              Empowering People with Visual Impairments Worldwide<br />
              At Visual Freedom Foundation, we are committed to transforming the lives of amputees, paraplegics and communities worldwide with limited access to life-changing refractive surgeries and treatments. Our mission is to help people regain their sight, independence, and confidence, ensuring that everyone, regardless of their circumstances, can experience the freedom that comes with clear vision.
            </p>
          </div>
        </div>
        
        {/* Mission and Vision */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6 capitalize leading-tight">
              Our Mission
            </h2>
            <p className="text-lg text-[#324A6D] font-light leading-relaxed max-w-md mx-auto">
              The Visual Freedom Foundation is a nonprofit organization dedicated to combating the leading causes of preventable blindness through innovative refractive surgery programs for disadvantaged populations worldwide. The Foundation welcomes refractive surgeons worldwide to join our mission.
            </p>
          </div>
          
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6 capitalize leading-tight">
              Our Vision
            </h2>
            <p className="text-lg text-[#324A6D] font-light leading-relaxed max-w-md mx-auto">
              A world where no one is held back by visual impairments. We believe in the power of sight to unlock opportunities and create brighter futures. Through our global network of medical professionals, volunteers, and partner organizations, we bring cutting-edge surgical interventions to communities with limited access to eye care.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 