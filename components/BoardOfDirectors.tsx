import React from 'react'

const boardMembers = [
  {
    name: "Greg Parkhurst, MD",
    title: "Board Chairman",
    organization: "Parkhurst NuVision",
    location: "San Antonio, TX, USA",
    image: "https://visual-freedom.org/wp-content/uploads/2024/10/parkhurst-1.jpg",
    link: "https://sanantonio-lasik.com/our-doctors/dr-greg-parkhurst/"
  },
  {
    name: "Jessica Cox",
    title: "Board Member",
    organization: "Jessica Cox Motivational Services",
    location: "Tucson, AZ, USA",
    image: "https://visual-freedom.org/wp-content/uploads/2024/10/jessicacox-e1730133433154.jpg",
    link: "https://jessicacox.com/about/"
  },
  {
    name: "Dan Durrie, MD",
    title: "Board Member",
    organization: "iOR Partners",
    location: "Kansas City, MO, USA",
    image: "https://visual-freedom.org/wp-content/uploads/2024/10/Durrie-iOR.jpg",
    link: "https://durrievision.com/a-note-from-dr-durrie/"
  },
  {
    name: "Osama Ibrahim, MD",
    title: "Board Member",
    organization: "Alexandria University",
    location: "Cairo, Egypt",
    image: "https://visual-freedom.org/wp-content/uploads/2024/10/osama-min-e1728520134638.jpg",
    link: "https://wcrsvs.org/team/osama-ibrahim/"
  },
  {
    name: "Roger Zaldivar, MD",
    title: "Board Member",
    organization: "Institute Zaldivar",
    location: "Mendoza, Argentina",
    image: "https://visual-freedom.org/wp-content/uploads/2024/10/FOTO-NUEVA-ROGER-904x1024-1-e1728520221317.jpeg",
    link: "https://wcrsvs.org/team/roger-zaldivar/"
  },
  {
    name: "Taj Nasser, MD",
    title: "Board Member",
    organization: "Tylock-George",
    location: "Dallas, TX, USA",
    image: "https://visual-freedom.org/wp-content/uploads/2024/10/dr_taj_nasser-e1730133778124.jpg",
    link: "https://www.tylock.com/eye-doctors-irving/taj-nasser-m-d/"
  }
]

export default function BoardOfDirectors() {
  return (
    <section className="py-16 bg-[#33848C17]">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6 capitalize leading-tight">
            Board of Directors
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {boardMembers.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="mb-4">
                <a 
                  href={member.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block transition-transform duration-300 group-hover:scale-105"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 mx-auto rounded-full object-cover border-4 border-gray-200 shadow-lg"
                  />
                </a>
              </div>
              
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                <a 
                  href={member.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#33848C] transition-colors"
                >
                  {member.name}
                  <br />
                  {member.title}
                </a>
              </h4>
              
              <p className="text-gray-600">
                {member.organization}
                <br />
                {member.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 