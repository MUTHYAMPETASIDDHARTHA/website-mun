import { useEffect, useRef, useState } from 'react'

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

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

  return (
    <section id="about" ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-charcoal">
      <div className="absolute inset-0 z-0">
        <img
          src="/placeholder-about-bg.jpg"
          alt="CMRCET MUN About"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/95 to-charcoal"></div>
      </div>

      <div className={`relative z-10 text-center px-6 max-w-4xl mx-auto py-20 transform transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <h2 className="text-white text-5xl md:text-7xl font-serif font-bold mb-8 text-shadow">
          About CMRCET MUN
        </h2>
        <div className="w-24 h-1 bg-burgundy mx-auto mb-12"></div>
        <div className="text-white text-lg md:text-xl font-sans font-normal leading-relaxed space-y-6 text-left">
          <p>
            CMRCET Model United Nations is a premier academic simulation conference that brings together students from across the region to engage in diplomatic discourse and international relations.
          </p>
          <p>
            Our conference strives to simulate the complexities of international relations, offering participants a transformative educational experience that prepares them to become future leaders. Through rigorous debate, collaborative problem-solving, and diplomatic negotiation, delegates develop essential skills in leadership, public speaking, and critical thinking.
          </p>
          <p>
            True to the spirit of the United Nations, CMRCET MUN fosters a constructive forum for open dialogue on a range of complex global issues. We challenge delegates to think critically about the world around them in new and ambitious ways, to engage with perspectives that may differ from their own, and to work collaboratively toward solutions that benefit the global community.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

