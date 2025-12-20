import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

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
          src="public\images\backgroundmun.png"
          alt="CMRCET MUN Conference"
          className="w-full h-full object-cover transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSBiYXNlRnJlcXVlbmN5PSIwLjkiIG51bU9jdGF2ZXM9IjQiIHJlc3VsdD0ibm9pc2UiLz48ZmVDb2xvck1hdHJpeCB0eXBlPSJzYXR1cmF0ZSIgdmFsdWVzPSIwIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbHRlcj0idXJsKCNub2lzZSkiIG9wYWNpdHk9IjAuMDMiLz48L3N2Zz4=')] opacity-30"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 text-shadow tracking-wide"
        >
          CMRCET Model United Nations
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white text-lg md:text-xl mb-10 font-sans font-medium tracking-wide"
        >
          January 29th, 2026 — January 31st, 2026
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <button
            onClick={() => navigate('/register')}
            className="inline-block bg-burgundy border-2 border-burgundy text-white px-8 py-3 uppercase tracking-wider font-sans font-semibold hover:bg-opacity-90 transition-all duration-300 rounded hover:scale-105 hover:shadow-lg hover:shadow-burgundy/50"
          >
            REGISTER NOW
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-10 left-0 right-0 z-10 px-6"
      >
        <p className="text-white text-center text-sm md:text-base max-w-4xl mx-auto font-sans font-medium leading-relaxed">
          Come join us for the second edition of CMRCET Model United Nations!
        </p>
      </motion.div>
    </section>
  )
}

export default Hero
