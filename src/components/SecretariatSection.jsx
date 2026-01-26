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

  // Secretariat members in exact order as specified
  const secretariatMembers = [
    // Row 1: 3 cards
    { name: 'Samhita Vemuri', role: 'Chief Advisor', image: '/images/Samhita.PNG' },
    { name: 'Chidugu Akhil', role: 'Secretary General', image: '/images/Akhil.jpeg' },
    { name: 'Varun Kokkiligadda', role: 'Chief Advisor', image: '/images/Varun anna.jpg' },
    
    // Row 2: 3 cards
    { name: 'V. Aniketh Srivathsa', role: 'Director General', image: '/images/Aniketh.jpg' },
    { name: 'Krishnadeep Kondabathini', role: 'Director General', image: '/images/IMG_0202.jpg' },
    { name: 'M. Jeevan Srikar', role: 'Deputy Secretary General', image: '/images/Jeevan.jpeg' },
    
    // Row 3+: 4 cards per row (16 members)
    { name: 'N. Greeshmitha', role: 'Organizing Committee Head', image: '/images/Greeshmitha.jpg' },
    { name: 'M. Rishik', role: 'Organizing Committee Head', image: '/images/Rishik.jpg' },
    { name: 'T. Karthik', role: 'Charge Delegate Affairs', image: '/images/Karthik Charge D.jpeg' },
    { name: 'Tushar Uday', role: 'External Delegate Affairs', image: '/images/Tushar.jpeg' },
    
    { name: 'G. Nitin', role: 'Logistics Head', image: '/images/Nithin.jpg' },
    { name: 'Karthik', role: 'Logistics Head', image: '/images/Karthik logistic.jpeg' },
    { name: 'B. Rakshith', role: 'Public Relations Head', image: '/images/Rakshith .jpeg' },
    { name: 'J. Venkat Durga Prasad', role: 'Social Media Lead', image: '/images/Baymax.jpeg' },
    
    { name: 'G. Praneeth Kumar Goud', role: 'Content Creation Lead', image: '/images/Praneeth.jpeg' },
    { name: 'Kaushik Srinivas Khanapur', role: 'Finance Head', image: '/images/IMG_1427.jpg' },
    { name: 'Sri Harsha Varanasi', role: 'Marketing Head', image: '/images/Harsha.jpg' },
    { name: 'M. Dheeraj', role: 'Marketing Head', image: '/images/Dheeraj.jpeg'},
    
    { name: 'Sai Mohith Challa', role: 'Hospitality Head', image: '/images/Mohith.jpg'},
    { name: 'K. Sudeep Mukul', role: 'Designing Head', image: '/images/Sudeep.jpg' },
    { name: 'M. Siddhartha', role: 'IT Head', image: '/images/sIDDHARTHA.jpg' },
    { name: 'Pranav Prashanth', role: 'Transport Head', image: '/images/Pranav.jpg' },
  ]

  // Split into rows: first 2 rows have 3 cards, rest have 4 cards
  const row1 = secretariatMembers.slice(0, 3)
  const row2 = secretariatMembers.slice(3, 6)
  const remainingMembers = secretariatMembers.slice(6)
  
  // Group remaining into rows of 4
  const remainingRows = []
  for (let i = 0; i < remainingMembers.length; i += 4) {
    remainingRows.push(remainingMembers.slice(i, i + 4))
  }

  return (
    <section id="secretariat" ref={sectionRef} className="bg-charcoal py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-white text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6">
            Secretariat
          </h2>
          <div className="w-24 h-1 bg-burgundy mx-auto"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Row 1: 3 cards */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-8 lg:mb-12 transform transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {row1.map((member, index) => (
              <div
                key={member.name}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 text-center shadow-xl hover:bg-white/10 transition-all duration-300"
                style={{ transitionDelay: isVisible ? `${(index + 1) * 100}ms` : '0ms' }}
              >
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-burgundy/20 to-charcoal/40 border-2 border-burgundy/30 mx-auto mb-6 flex items-center justify-center overflow-hidden">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <svg className="w-16 h-16 text-burgundy/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  )}
                </div>
                <h3 className="text-white text-xl font-sans font-bold mb-3">
                  {member.name}
                </h3>
                <p className="text-burgundy font-sans text-base font-semibold">
                  {member.role}
                </p>
              </div>
            ))}
          </div>

          {/* Row 2: 3 cards */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-8 lg:mb-12 transform transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {row2.map((member, index) => (
              <div
                key={member.name}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 text-center shadow-xl hover:bg-white/10 transition-all duration-300"
                style={{ transitionDelay: isVisible ? `${(index + 4) * 100}ms` : '0ms' }}
              >
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-burgundy/20 to-charcoal/40 border-2 border-burgundy/30 mx-auto mb-6 flex items-center justify-center overflow-hidden">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <svg className="w-16 h-16 text-burgundy/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  )}
                </div>
                <h3 className="text-white text-xl font-sans font-bold mb-3">
                  {member.name}
                </h3>
                <p className="text-burgundy font-sans text-base font-semibold">
                  {member.role}
                </p>
              </div>
            ))}
          </div>

          {/* Remaining rows: 4 cards per row */}
          {remainingRows.map((row, rowIndex) => (
            <div
              key={`row-${rowIndex + 3}`}
              className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8 lg:mb-12 transform transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: isVisible ? `${600 + rowIndex * 200}ms` : '0ms' }}
            >
              {row.map((member, index) => (
                <div
                  key={member.name}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 text-center shadow-xl hover:bg-white/10 transition-all duration-300"
                  style={{ transitionDelay: isVisible ? `${700 + rowIndex * 200 + index * 50}ms` : '0ms' }}
                >
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-burgundy/20 to-charcoal/40 border-2 border-burgundy/30 mx-auto mb-6 flex items-center justify-center overflow-hidden">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <svg className="w-16 h-16 text-burgundy/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    )}
                  </div>
                  <h3 className="text-white text-xl font-sans font-bold mb-3">
                    {member.name}
                  </h3>
                  <p className="text-burgundy font-sans text-base font-semibold">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SecretariatSection

