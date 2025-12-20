import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    } else {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
    setIsMenuOpen(false)
  }

  const handleRegisterClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault()
      scrollToSection('register')
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-charcoal shadow-lg backdrop-blur-none'
          : 'bg-black bg-opacity-20 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 rounded-full bg-burgundy border-2 border-white flex items-center justify-center">
                <div className="w-6 h-6 border border-white rounded-full"></div>
              </div>
              <span className="text-white text-xl font-serif font-bold">CMRCET MUN</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-white hover:text-burgundy transition-colors duration-200 uppercase text-sm font-sans font-semibold"
            >
              HOME
            </button>
            <button
              onClick={() => scrollToSection('committees')}
              className="text-white hover:text-burgundy transition-colors duration-200 uppercase text-sm font-sans font-semibold"
            >
              COMMITTEES
            </button>
            <button
              onClick={() => scrollToSection('schedule')}
              className="text-white hover:text-burgundy transition-colors duration-200 uppercase text-sm font-sans font-semibold"
            >
              SCHEDULE
            </button>
            <Link
              to="/register"
              onClick={handleRegisterClick}
              className="bg-burgundy text-white px-6 py-2 rounded uppercase text-sm font-sans font-semibold hover:bg-opacity-90 transition-all duration-300 hover:scale-105"
            >
              REGISTER
            </Link>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-charcoal border-t border-gray-800">
          <div className="px-6 py-4 space-y-4">
            <button onClick={() => scrollToSection('home')} className="block text-white hover:text-burgundy uppercase text-sm font-sans font-semibold w-full text-left">HOME</button>
            <button onClick={() => scrollToSection('committees')} className="block text-white hover:text-burgundy uppercase text-sm font-sans font-semibold w-full text-left">COMMITTEES</button>
            <button onClick={() => scrollToSection('schedule')} className="block text-white hover:text-burgundy uppercase text-sm font-sans font-semibold w-full text-left">SCHEDULE</button>
            <Link to="/register" onClick={handleRegisterClick} className="block text-white hover:text-burgundy uppercase text-sm font-sans font-semibold">REGISTER</Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
