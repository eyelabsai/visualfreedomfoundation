import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ServicesPage() {
  const services = [
    {
      title: "Refractive Surgery Programs",
      description: "We provide comprehensive refractive surgery programs for disadvantaged populations worldwide, helping people regain their sight and independence.",
      image: "https://visual-freedom.org/wp-content/uploads/2024/10/service-img.jpg"
    },
    {
      title: "Medical Professional Network",
      description: "Building a global network of medical professionals, volunteers, and partner organizations to bring cutting-edge surgical interventions to communities with limited access to eye care.",
      image: "https://visual-freedom.org/wp-content/uploads/2024/10/service-img.jpg"
    },
    {
      title: "Community Outreach",
      description: "Reaching out to communities worldwide that have limited access to life-changing refractive surgeries and treatments, ensuring everyone can experience the freedom that comes with clear vision.",
      image: "https://visual-freedom.org/wp-content/uploads/2024/10/service-img.jpg"
    },
    {
      title: "Surgeon Partnership Program",
      description: "Welcoming refractive surgeons worldwide to join our mission in combating the leading causes of preventable blindness through innovative surgical programs.",
      image: "https://visual-freedom.org/wp-content/uploads/2024/10/service-img.jpg"
    },
    {
      title: "Patient Support Services",
      description: "Providing comprehensive support services to ensure patients receive the best possible care before, during, and after their vision correction procedures.",
      image: "https://visual-freedom.org/wp-content/uploads/2024/10/service-img.jpg"
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
              <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h1>
              <p className="text-xl text-[#324A6D] max-w-3xl mx-auto">
                Transforming lives through comprehensive vision care services and innovative refractive surgery programs for communities worldwide.
              </p>
            </div>

            {/* Services Grid */}
            <div className="space-y-16">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <h2 className="text-3xl font-semibold text-gray-900 mb-4">{service.title}</h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <button className="btn-primary">
                      Learn More
                    </button>
                  </div>
                  
                  <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="mt-20 bg-vff-blue text-white rounded-lg p-12 text-center">
              <h2 className="text-3xl font-semibold mb-4">
                Ready to Make a Difference?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Join our mission to provide life-changing vision care to communities in need. Whether you're a medical professional or want to support our cause, we welcome you to be part of our vision for a world where sight is accessible to all.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-vff-blue hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors">
                  Become a Partner
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