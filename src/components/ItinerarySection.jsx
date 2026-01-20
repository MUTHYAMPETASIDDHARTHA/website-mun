import { useEffect, useRef, useState } from 'react'

export const itineraryDays = [
  {
    title: 'Itinerary – Day 1',
    events: [
      { time: '9:30 AM – 10:30 AM', title: 'Registrations' },
      { time: '10:30 AM – 11:30 AM', title: 'Opening Ceremony' },
      { time: '12:00 PM – 12:15 PM', title: 'High-Tea' },
      { time: '12:15 PM – 1:30 PM', title: 'Committee Session-1' },
      { time: '1:45 PM – 2:30 PM', title: 'Lunch' },
      { time: '2:30 PM – 4:10 PM', title: 'Committee Session-2' },
    ],
  },
  {
    title: 'Itinerary – Day 2',
    events: [
      { time: '9:45 AM – 11:45 AM', title: 'Committee Session-3' },
      { time: '11:45 AM – 12:00 PM', title: 'High-Tea' },
      { time: '12:00 PM – 1:30 PM', title: 'Committee Session-4' },
      { time: '1:30 PM – 2:30 PM', title: 'Lunch' },
      { time: '2:30 PM – 4:10 PM', title: 'Committee Session-5' },
      { time: '4:30 PM – 6:30 PM', title: 'Socials' },
    ],
  },
  {
    title: 'Itinerary – Day 3',
    events: [
      { time: '9:45 AM – 11:45 AM', title: 'Committee Session-6' },
      { time: '11:30 AM – 11:45 AM', title: 'High-Tea' },
      { time: '11:45 AM – 12:45 PM', title: 'Committee Session-7' },
      { time: '12:45 PM – 1:45 PM', title: 'Lunch' },
      { time: '1:45 PM – 2:30 PM', title: 'Press Conference' },
      { time: '2:30 PM – 4:30 PM', title: 'Closing Ceremony' },
    ],
  },
]

const useInView = (options = { threshold: 0.18 }) => {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        observer.unobserve(entry.target)
      }
    }, options)

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [options])

  return [ref, isVisible]
}

const ItineraryDayCard = ({ day }) => {
  const [ref, isVisible] = useInView()

  return (
    <div
      ref={ref}
      className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl shadow-xl px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12 transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-3">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-cream tracking-wide">
          {day.title}
        </h3>
        <div className="w-16 h-1 bg-burgundy sm:w-20"></div>
      </div>

      <div className="mt-8 space-y-5">
        {day.events.map((event, index) => (
          <div
            key={`${event.time}-${event.title}`}
            className={`flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 transform transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
            style={{ transitionDelay: isVisible ? `${140 + index * 80}ms` : '0ms' }}
          >
            {/* Time badge */}
            <div className="relative w-full sm:w-52 md:w-56 lg:w-60 flex-shrink-0">
              <div className="bg-burgundy text-cream font-sans font-bold text-sm sm:text-base px-4 py-3 rounded-lg shadow-lg shadow-burgundy/40 ring-1 ring-burgundy/40 tracking-wide leading-snug transform -rotate-1">
                <span className="block">{event.time}</span>
              </div>
              <div className="absolute -bottom-1 left-2 w-8 h-2 bg-burgundy/30 rounded-full blur-[2px]"></div>
              <div className="absolute -bottom-1 right-3 w-10 h-2 bg-burgundy/30 rounded-full blur-[2px]"></div>
            </div>

            {/* Title */}
            <div className="flex-1">
              <div className="bg-black/25 border border-white/5 rounded-xl px-4 py-3 md:px-5 md:py-4">
                <p className="text-lg md:text-xl lg:text-2xl font-sans font-semibold text-cream">
                  {event.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const ItinerarySection = ({ className = '', variant = 'stacked' }) => {
  const [activeDay, setActiveDay] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isEntering, setIsEntering] = useState(false)

  useEffect(() => {
    setIsEntering(true)
    return () => setIsEntering(false)
  }, [activeDay])

  const handleTabClick = (index) => {
    if (index === activeDay) return
    setDirection(index > activeDay ? 1 : -1)
    setActiveDay(index)
  }

  if (variant !== 'tabs') {
    return (
      <div className={`max-w-5xl mx-auto px-6 lg:px-8 space-y-10 lg:space-y-14 ${className}`}>
        {itineraryDays.map((day) => (
          <ItineraryDayCard key={day.title} day={day} />
        ))}
      </div>
    )
  }

  const baseTransform = direction === 0 ? 'translate-y-3' : direction > 0 ? 'translate-x-3' : '-translate-x-3'

  return (
    <div className={`max-w-5xl mx-auto px-6 lg:px-8 ${className}`}>
      {/* Tabs */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex items-center rounded-full bg-white/5 backdrop-blur-md border border-white/10 p-1.5 shadow-lg shadow-burgundy/10">
          {itineraryDays.map((day, index) => {
            const isActive = index === activeDay
            return (
              <button
                key={day.title}
                type="button"
                onClick={() => handleTabClick(index)}
                className={`relative px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-sans font-semibold transition-all duration-300 ${
                  isActive
                    ? 'text-cream bg-gradient-to-r from-burgundy via-burgundy/90 to-burgundy/70 shadow-xl shadow-burgundy/50 ring-1 ring-burgundy/40'
                    : 'bg-transparent text-gray-300 hover:text-cream hover:bg-white/5'
                }`}
              >
                Day {index + 1}
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 h-[2px] w-12 -translate-x-1/2 bg-cream/90 rounded-full blur-[0.2px]" />
                )}
              </button>
            )
          })}
        </div>
      </div>

      {/* Active day */}
      <div
        className={`transition-all duration-500 ease-out transform ${
          isEntering ? 'opacity-100 translate-x-0 translate-y-0' : `opacity-0 ${baseTransform}`
        }`}
      >
        <ItineraryDayCard day={itineraryDays[activeDay]} />
      </div>
    </div>
  )
}

export default ItinerarySection


