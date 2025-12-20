import { useEffect, useRef, useState } from 'react'

const SecretariatSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const secretariatMembers = [
    {
      name: "Chidugu Akhil",
      role: "Secretary-General",
      image: "/images/secretary-general.jpg"
    },
    {
      name: "M. Jeevan Srikar",
      role: "Deputy-Secretary-General",
      image: "/images/deputy-secretary-general.jpg"
    },
    {
      name: "V. Aniketh Srivathsa",
      role: "Director-General",
      image: "/images/director-general.jpg"
    },
    {
      name: "K. Krishnadeep",
      role: "Director-General",
      image: "/images/director-general-2.jpg"
    },
    {
      name: "N. Greeshmitha",
      role: "Organising Committee Head",
      image: "/images/oc-head-2.jpg"
    },
    {
      name: "M. Rishik",
      role: "Organising Committee Head",
      image: "/images/oc-head-1.jpg"
    },
    {
      name: "M. Siddhartha",
      role: "USG-IT",
      image: "/placeholder-secretariat-7.jpg"
    },
    {
      name: "T. Karthik",
      role: "USG-DELEGATE AFFAIRS",
      image: "/placeholder-secretariat-8.jpg"
    },
    {
      name: "U. Tushar",
      role: "USG-DELEGATE AFFAIRS",
      image: "/placeholder-secretariat-9.jpg"
    },
    {
      name: "Karthik",
      role: "USG-Logistics",
      image: "/images/logistics_head.jpg"
    },
    {
      name: "Pranav Prashanth",
      role: "USG-Transportation",
      image: "/placeholder-secretariat-10.jpg"
    },
    {
      name: "K. Kaushik Srinivas",
      role: "USG-Finance",
      image: "/images/finance_head.jpg"
    }
  ]

  return (
    <section id="secretariat" ref={sectionRef} className="bg-gradient-to-b from-charcoal to-black py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-white text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6">
            Meet Our Secretariat
          </h2>
          <div className="w-24 h-1 bg-burgundy mx-auto"></div>
        </div>

        <div className="space-y-8">
          {/* Row 1: Secretary General, Deputy Secretary General */}
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto transform transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {secretariatMembers.slice(0, 2).map((member, index) => (
              <div
                key={index}
                className={`group relative bg-white rounded-xl overflow-hidden transform transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-burgundy/20 ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-charcoal text-xl font-serif font-bold mb-2 uppercase tracking-wide">
                    {member.name}
                  </h3>
                  <p className="text-burgundy text-base font-sans font-semibold uppercase tracking-wide">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2: Director General, Director General */}
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto transform transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {secretariatMembers.slice(2, 4).map((member, index) => (
              <div
                key={index + 2}
                className={`group relative bg-white rounded-xl overflow-hidden transform transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-burgundy/20 ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ transitionDelay: `${(index + 2) * 50}ms` }}
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-charcoal text-xl font-serif font-bold mb-2 uppercase tracking-wide">
                    {member.name}
                  </h3>
                  <p className="text-burgundy text-base font-sans font-semibold uppercase tracking-wide">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Row 3: Organising Committee Head, Organising Committee Head */}
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto transform transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {secretariatMembers.slice(4, 6).map((member, index) => (
              <div
                key={index + 4}
                className={`group relative bg-white rounded-xl overflow-hidden transform transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-burgundy/20 ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ transitionDelay: `${(index + 4) * 50}ms` }}
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-charcoal text-xl font-serif font-bold mb-2 uppercase tracking-wide">
                    {member.name}
                  </h3>
                  <p className="text-burgundy text-base font-sans font-semibold uppercase tracking-wide">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Row 4: Next 2 members */}
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto transform transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {secretariatMembers.slice(6, 8).map((member, index) => (
              <div
                key={index + 6}
                className={`group relative bg-white rounded-xl overflow-hidden transform transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-burgundy/20 ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ transitionDelay: `${(index + 6) * 50}ms` }}
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-charcoal text-xl font-serif font-bold mb-2 uppercase tracking-wide">
                    {member.name}
                  </h3>
                  <p className="text-burgundy text-base font-sans font-semibold uppercase tracking-wide">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Row 5: Last members */}
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto transform transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {secretariatMembers.slice(8).map((member, index) => (
              <div
                key={index + 8}
                className={`group relative bg-white rounded-xl overflow-hidden transform transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-burgundy/20 ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ transitionDelay: `${(index + 8) * 50}ms` }}
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-charcoal text-xl font-serif font-bold mb-2 uppercase tracking-wide">
                    {member.name}
                  </h3>
                  <p className="text-burgundy text-base font-sans font-semibold uppercase tracking-wide">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SecretariatSection

