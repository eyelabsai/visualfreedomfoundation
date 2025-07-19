import React from 'react'
import Link from 'next/link'

const testimonials = [
  {
    content: "Focus on Independence gave me the gift of Lasik which has given me the freedom to do more with my life now over a decade later.",
    name: "Jessica Cox",
    image: "/images/testimonials/jessica-cox-headshot.jpg"
  },
  {
    content: "A testimonial from a patient who benefited from the VFF charity services. Testimonials can be a highly effective way of establishing credibility and increasing the organization's reputation.",
    name: "Patient Name",
    image: "/images/testimonials/placeholder-patient.jpg"
  },
  {
    content: "A testimonial from a patient who benefited from the VFF charity services. Testimonials can be a highly effective way of establishing credibility and increasing the organization's reputation.",
    name: "Patient Name",
    image: "/images/testimonials/placeholder-patient.jpg"
  },
  {
    content: "A testimonial from a patient who benefited from the VFF charity services. Testimonials can be a highly effective way of establishing credibility and increasing the organization's reputation.",
    name: "Patient Name",
    image: "/images/testimonials/placeholder-patient.jpg"
  }
]

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
                  />
                </div>
                <div className="flex-1">
                  <blockquote className="text-gray-700 italic mb-4">
                    "{testimonial.content}"
                  </blockquote>
                  <cite className="text-sm font-semibold text-gray-900">
                    — {testimonial.name}
                  </cite>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/testimonials" 
            className="inline-block bg-[#33848C] hover:bg-[#2a6b72] text-white font-bold py-4 px-8 rounded-full border border-[#33848C] transition-colors duration-300"
          >
            Read More Stories
          </Link>
        </div>
      </div>
    </section>
  )
} 