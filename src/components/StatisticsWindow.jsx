import { useEffect, useRef, useState } from 'react'

const StatisticsWindow = () => {
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

  const stats = [
    { value: '1,00,000', label: 'Prize Pool', suffix: '+' },
    { value: '280', label: 'Delegates', suffix: '+' },
    { value: '3', label: 'Days', suffix: '' },
    { value: '1', label: 'Unforgettable Experience', suffix: '' }
  ]

  return (
    <section ref={sectionRef} className="bg-charcoal py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center transform transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-burgundy mb-2">
                {stat.value}
                {stat.suffix && <span className="text-white">{stat.suffix}</span>}
              </div>
              <div className="text-white text-sm md:text-base font-sans font-semibold uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatisticsWindow

