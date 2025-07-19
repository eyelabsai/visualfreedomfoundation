import React from 'react'

const stats = [
  {
    number: "30k",
    label: "Doctors",
    description: "Serving the mission."
  },
  {
    number: "$2.5",
    label: "Support",
    description: "From generous donors."
  },
  {
    number: "400",
    label: "Countries",
    description: "Served to date."
  },
  {
    number: "550",
    label: "Programs",
    description: "Available to help."
  }
]

export default function Statistics() {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="mb-4">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#33848C] mb-2">
                  {stat.number}
                </div>
              </div>
              
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                {stat.label}
              </h4>
              
              <p className="text-gray-600">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 