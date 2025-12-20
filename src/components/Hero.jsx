import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
  const heroRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    const handleParallax = () => {
      if (heroRef.current) {
        const scrolled = window.pageYOffset
        const rate = scrolled * 0.5
        heroRef.current.style.transform = `translateY(${rate}px) scale(1.1)`
      }
    }
    window.addEventListener('scroll', handleParallax)
    return () => window.removeEventListener('scroll', handleParallax)
  }, [])

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-charcoal">
      <div className="absolute inset-0 z-0">
        <img
          ref={heroRef}
          src="/placeholder-hero-bg.jpg"
          alt="CMRCET MUN Conference"
          className="w-full h-full object-cover transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto animate-fade-in">
        <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 text-shadow tracking-wide">
          CMRCET Model United Nations
        </h1>
        <p className="text-white text-lg md:text-xl mb-10 font-sans font-medium tracking-wide">
          January 29th, 2026 — January 31st, 2026
        </p>
        <button
          onClick={() => navigate('/register')}
          className="inline-block bg-burgundy border-2 border-burgundy text-white px-8 py-3 uppercase tracking-wider font-sans font-semibold hover:bg-opacity-90 transition-all duration-300 rounded hover:scale-105 hover:shadow-lg hover:shadow-burgundy/50"
        >
          REGISTER NOW
        </button>
      </div>

      <div className="absolute bottom-10 left-0 right-0 z-10 px-6">
        <p className="text-white text-center text-sm md:text-base max-w-4xl mx-auto font-sans font-medium leading-relaxed">
          Come join us for the second edition of CMRCET Model United Nations!
        </p>
      </div>
    </section>
  )
}

export default Hero
