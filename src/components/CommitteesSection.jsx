import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CommitteesSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)
  const navigate = useNavigate()

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

  const committees = [
    {
      id: 'ccc',
      name: 'Continuous Crisis Committee',
      acronym: 'CCC',
      delegates: 60,
      image: '/images/home-crisis.webp'
    },
    {
      id: 'disec',
      name: 'Disarmament and International Security Committee',
      acronym: 'DISEC',
      delegates: 60,
      image: '/images/home-disec.webp'
    },
    {
      id: 'ip',
      name: 'International Press',
      acronym: 'IP',
      delegates: 60,
      image: '/images/ip-bg.jpg'
    },
    {
      id: 'lok-sabha',
      name: 'Lok Sabha',
      acronym: 'LS',
      delegates: 60,
      image: '/images/home-loksabha.jpg'
    },
    {
      id: 'unhrc',
      name: 'United Nations Human Rights Council',
      acronym: 'UNHRC',
      delegates: 60,
      image: '/images/unhrc.jpg'
    }
  ]

  return (
    <section id="committees" ref={sectionRef} className="bg-charcoal py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-white text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6">
            Committees
          </h2>
          <div className="w-24 h-1 bg-burgundy mx-auto"></div>
        </div>

        <div className={`mb-16 transform transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-8">
            <h3 className="text-white text-2xl md:text-3xl font-serif font-bold mb-6">
              How to Choose the Right Portfolio
            </h3>
            <div className="space-y-4 text-gray-300 font-sans text-base md:text-lg leading-relaxed">
              <p>
                Selecting the right portfolio is crucial for a meaningful and productive MUN experience. Each committee offers unique challenges and learning opportunities that align with different interests and skill sets.
              </p>
              <p>
                Before making your selection, we strongly encourage you to research the agenda topics and understand the country positions you will be representing. A thorough understanding of your assigned country's stance on the issues at hand will enable you to engage more effectively in debates and contribute meaningfully to resolutions.
              </p>
              <p className="font-semibold text-white">
                Please note: Delegates must choose ONE Primary Priority and ONE Secondary Priority when registering. Committee allotments are made on a first-come, first-served basis, so we recommend submitting your preferences early.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* First row: 3 committees */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 transform transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {committees.slice(0, 3).map((committee, index) => (
              <div
                key={committee.id}
                onClick={() => navigate(`/committee/${committee.id}`)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    navigate(`/committee/${committee.id}`)
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`View ${committee.name} details`}
                className={`relative h-96 rounded-lg overflow-hidden group cursor-pointer transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-burgundy/20 ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="absolute inset-0 z-0">
                  <img
                    src={committee.image}
                    alt={committee.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/90 group-hover:from-black/40 group-hover:via-black/50 group-hover:to-black/80 transition-all duration-300"></div>
                </div>

                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-burgundy border-2 border-white flex items-center justify-center mb-1 group-hover:scale-110 transition-transform">
                      <div className="w-6 h-6 border border-white rounded-full"></div>
                    </div>
                    <span className="text-white text-xs font-serif font-bold tracking-wide">CMRCET MUN</span>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <h3 className="text-white text-lg md:text-xl font-sans font-bold mb-2 leading-tight">
                    {committee.name}
                  </h3>
                  <p className="text-white text-sm font-sans font-medium">
                    {committee.delegates} Delegates
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Second row: 2 committees centered */}
          <div className={`flex justify-center transform transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
              {committees.slice(3, 5).map((committee, index) => (
                <div
                  key={committee.id}
                  onClick={() => navigate(`/committee/${committee.id}`)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      navigate(`/committee/${committee.id}`)
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={`View ${committee.name} details`}
                  className={`relative h-96 rounded-lg overflow-hidden group cursor-pointer transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-burgundy/20 ${
                    isVisible ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ transitionDelay: `${(index + 4) * 100}ms` }}
                >
                  <div className="absolute inset-0 z-0">
                    <img
                      src={committee.image}
                      alt={committee.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/90 group-hover:from-black/40 group-hover:via-black/50 group-hover:to-black/80 transition-all duration-300"></div>
                  </div>

                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-burgundy border-2 border-white flex items-center justify-center mb-1 group-hover:scale-110 transition-transform">
                        <div className="w-6 h-6 border border-white rounded-full"></div>
                      </div>
                      <span className="text-white text-xs font-serif font-bold tracking-wide">CMRCET MUN</span>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                    <h3 className="text-white text-lg md:text-xl font-sans font-bold mb-2 leading-tight">
                      {committee.name}
                    </h3>
                    <p className="text-white text-sm font-sans font-medium">
                      {committee.delegates} Delegates
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CommitteesSection

