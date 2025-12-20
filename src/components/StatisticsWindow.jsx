import { useEffect, useRef, useState } from 'react'

const StatisticsWindow = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState({ prize: 0, delegates: 0, days: 3, experience: 1 })
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

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const steps = 60
    const stepDuration = duration / steps

    let currentStep = 0
    const interval = setInterval(() => {
      currentStep++
      const progress = currentStep / steps

      setCounts({
        prize: Math.floor(100000 * progress),
        delegates: Math.floor(280 * progress),
        days: 3,
        experience: 1
      })

      if (currentStep >= steps) {
        clearInterval(interval)
        setCounts({
          prize: 100000,
          delegates: 280,
          days: 3,
          experience: 1
        })
      }
    }, stepDuration)

    return () => clearInterval(interval)
  }, [isVisible])

  const formatNumber = (num) => {
    if (num >= 1000) {
      return num.toLocaleString('en-IN')
    }
    return num.toString()
  }

  const stats = [
    { value: formatNumber(counts.prize), label: 'Prize Pool', suffix: '+' },
    { value: formatNumber(counts.delegates), label: 'Delegates', suffix: '+' },
    { value: counts.days, label: 'Days', suffix: '' },
    { value: counts.experience, label: 'Unforgettable Experience', suffix: '' }
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
