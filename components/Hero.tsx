import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative h-[100vh] lg:h-[80vh] flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/images/content/Jessica-Cox-Aviation_cropped-2.png')",
          // Keep her head fully visible and nudge left for text space, move down to show more plane
          backgroundPosition: 'left 15% top 20%',
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* LEFT: Join VFF card (absolute so it doesn't affect layout) */}
      <div className="hidden lg:block absolute left-4 top-1/2 -translate-y-1/2 z-20 max-w-sm">
        <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 w-80 shadow-xl">
          <h3 className="text-xl font-bold text-[#33848C] mb-3">Join VFF</h3>
          <p className="text-gray-700 mb-4 text-xs leading-relaxed">
            Restoring sight through refractive surgery for underserved communities around the world.
          </p>

          <div className="space-y-2 mb-4">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfj4DLb0N_RHj5vzUP6hjzOt6M8DwMo6djIX1H9SQvnhiv77Q/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#33848C] text-white py-2 px-3 rounded text-xs font-medium hover:bg-[#2a6b72] transition-colors block text-center"
            >
              Become a Volunteer Ophthalmologist
            </a>
            <a
              href="https://forms.gle/j9xK9T774Ab7sXw16"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gray-200 text-gray-800 py-2 px-3 rounded text-xs font-medium hover:bg-gray-300 transition-colors block text-center"
            >
              Become An Optometry Ambassador
            </a>
            <a
              href="https://forms.gle/MjFgRaNqUHU3f1Aj7"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gray-200 text-gray-800 py-2 px-3 rounded text-xs font-medium hover:bg-gray-300 transition-colors block text-center"
            >
              Patient Application for Free Surgery
            </a>
            <a
              href="https://buy.stripe.com/8x25kFcevb9wfyzfho2go00"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#33848C] text-white py-4 px-4 rounded text-lg font-bold hover:bg-[#2a6b72] transition-colors block text-center"
            >
              DONATE NOW
            </a>
            <p className="text-center text-xs text-gray-600">$250 = 1 Surgery</p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <a
              href="https://docs.google.com/forms/d/18g4tMYwF7ZD_XTPlRI58JjW1DLtTognrel1q-rTbfAs/preview?edit_requested=true"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 p-2 rounded text-center hover:bg-gray-200 transition-colors"
            >
              <p className="font-semibold text-sm text-gray-800">For Ophthalmologists</p>
              <p className="text-xs text-gray-600 mt-1">Enter Patient Details</p>
            </a>
            <a
              href="https://docs.google.com/forms/d/18g4tMYwF7ZD_XTPlRI58JjW1DLtTognrel1q-rTbfAs/preview?edit_requested=true"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 p-2 rounded text-center hover:bg-gray-200 transition-colors"
            >
              <p className="font-semibold text-sm text-gray-800">For Optometrists</p>
              <p className="text-xs text-gray-600 mt-1">Enter Patient Details</p>
            </a>
          </div>
        </div>
      </div>

      {/* RIGHT: Headline block (absolute, away from her face) */}
      <div className="absolute right-4 lg:right-12 xl:right-20 top-1/2 -translate-y-1/2 z-20 max-w-xs sm:max-w-sm md:max-w-md text-white text-right">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-2 sm:mb-3">FREEDOM BEGINS</h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-2 sm:mb-3">WITH THE</h2>
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-6">GIFT OF SIGHT.</h3>
        <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 leading-relaxed">
          Born without arms, Jessica Cox has flown planes and inspired millions — but how to put on glasses or contacts without hands?
          After corrective eye surgery, Jessica gained the freedom of clear vision without limits.
        </p>
        <div className="flex justify-end">
          <Link href="/about-us" className="border-2 border-white text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 text-sm sm:text-base lg:text-lg font-medium hover:bg-white hover:text-black transition-all duration-300">
            Tell Me How
          </Link>
        </div>
      </div>

      {/* MOBILE: Join VFF card */}
      <div className="lg:hidden absolute bottom-0 left-0 right-0 p-3 sm:p-4 z-20">
        <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 sm:p-6 shadow-xl">
          <h3 className="text-xl sm:text-2xl font-bold text-[#33848C] mb-3 sm:mb-4">Join VFF</h3>
          <p className="text-gray-700 mb-4 sm:mb-6 text-xs sm:text-sm">
            Restoring sight through refractive surgery for underserved communities around the world.
          </p>

          <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfj4DLb0N_RHj5vzUP6hjzOt6M8DwMo6djIX1H9SQvnhiv77Q/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#33848C] text-white py-2 px-3 rounded text-xs font-medium hover:bg-[#2a6b72] transition-colors block text-center"
            >
              Become a Volunteer Ophthalmologist
            </a>
            <a
              href="https://forms.gle/j9xK9T774Ab7sXw16"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gray-200 text-gray-800 py-2 px-3 rounded text-xs font-medium hover:bg-gray-300 transition-colors block text-center"
            >
              Become An Optometry Ambassador
            </a>
            <a
              href="https://forms.gle/MjFgRaNqUHU3f1Aj7"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gray-200 text-gray-800 py-2 px-3 rounded text-xs font-medium hover:bg-gray-300 transition-colors block text-center"
            >
              Patient Application for Free Surgery
            </a>
            <a
              href="https://buy.stripe.com/8x25kFcevb9wfyzfho2go00"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#33848C] text-white py-3 sm:py-4 px-4 rounded text-base sm:text-lg font-bold hover:bg-[#2a6b72] transition-colors block text-center"
            >
              DONATE NOW
            </a>
            <p className="text-center text-xs text-gray-600">$250 = 1 Surgery</p>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            <a
              href="https://docs.google.com/forms/d/18g4tMYwF7ZD_XTPlRI58JjW1DLtTognrel1q-rTbfAs/preview?edit_requested=true"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 p-2 rounded text-center hover:bg-gray-200 transition-colors"
            >
              <p className="font-semibold text-xs sm:text-sm text-gray-800">For Ophthalmologists</p>
              <p className="text-xs text-gray-600 mt-1">Enter Patient Details</p>
            </a>
            <a
              href="https://docs.google.com/forms/d/18g4tMYwF7ZD_XTPlRI58JjW1DLtTognrel1q-rTbfAs/preview?edit_requested=true"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 p-2 rounded text-center hover:bg-gray-200 transition-colors"
            >
              <p className="font-semibold text-xs sm:text-sm text-gray-800">For Optometrists</p>
              <p className="text-xs text-gray-600 mt-1">Enter Patient Details</p>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hidden lg:block absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="bg-gray-600/50 p-2 rounded">
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}