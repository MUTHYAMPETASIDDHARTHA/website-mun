import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const RegisterSection = () => {
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
      { threshold: 0.2 }
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

  const handleRegisterClick = () => {
    navigate('/register')
  }

  return (
    <section id="register" ref={sectionRef} className="bg-gradient-to-b from-charcoal to-black py-20 lg:py-32">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-white text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6">
            Register Now
          </h2>
          <div className="w-24 h-1 bg-burgundy mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg md:text-xl font-sans font-medium">
            Join us for an unforgettable experience
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 transform transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <button
            onClick={handleRegisterClick}
            className="group relative bg-white rounded-lg p-12 text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-burgundy/20 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-burgundy/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-4 group-hover:text-burgundy transition-colors duration-300">
                INTERNAL
              </div>
              <p className="text-lg font-sans font-semibold text-gray-600">
                For CMRGI Students
              </p>
            </div>
          </button>
          <button
            onClick={handleRegisterClick}
            className="group relative bg-white rounded-lg p-12 text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-burgundy/20 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-burgundy/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-4 group-hover:text-burgundy transition-colors duration-300">
                EXTERNAL
              </div>
              <p className="text-lg font-sans font-semibold text-gray-600">
                For Other Colleges
              </p>
            </div>
          </button>
        </div>
      </div>
    </section>
  )
}

export default RegisterSection

