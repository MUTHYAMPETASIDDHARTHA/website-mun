import { useEffect, useState } from 'react'
import { itineraryDays } from '../components/ItinerarySection'

const TabbedDayCard = ({ day, direction }) => {
  const [isEntering, setIsEntering] = useState(false)

  useEffect(() => {
    // Trigger enter animation on mount / when day changes
    setIsEntering(true)
    return () => setIsEntering(false)
  }, [day, direction])

  const baseTransform =
    direction === 0 ? 'translate-y-4' : direction > 0 ? 'translate-x-4' : '-translate-x-4'

  return (
    <div
      className={`bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl shadow-2xl shadow-burgundy/10 px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12 transition-all duration-500 ease-out transform ${
        isEntering ? 'opacity-100 translate-x-0 translate-y-0' : `opacity-0 ${baseTransform}`
      }`}
    >
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-3 mb-6">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-cream tracking-wide">
          {day.title}
        </h2>
        <div className="w-16 h-1 bg-burgundy sm:w-20"></div>
      </div>

      <div className="mt-6 space-y-5">
        {day.events.map((event, index) => (
          <div
            key={`${event.time}-${event.title}`}
            className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-5 py-4 sm:px-6 sm:py-5 shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-burgundy/15 hover:-translate-y-0.5 transform transition-all duration-300 ease-out"
            style={{ transitionDelay: `${80 + index * 55}ms` }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              {/* Content */}
              <div className="min-w-0 flex-1">
                <p className="text-lg md:text-xl lg:text-2xl font-sans font-semibold text-cream leading-snug">
                  {event.title}
                </p>
                {event.location && (
                  <p className="mt-1 text-sm md:text-base font-sans text-gray-200/90">
                    {event.location}
                  </p>
                )}
                {event.description && (
                  <p className="mt-2 text-sm md:text-base font-sans text-gray-300 leading-relaxed">
                    {event.description}
                  </p>
                )}
              </div>

              {/* Time pill (high visibility) */}
              <div className="flex-shrink-0 sm:pl-4">
                <div className="inline-flex items-center justify-center rounded-full bg-burgundy px-5 py-2.5 shadow-lg shadow-burgundy/40 ring-1 ring-burgundy/40 group-hover:shadow-burgundy/60 transition-shadow duration-300">
                  <span className="text-cream font-sans font-bold text-sm sm:text-base tracking-wide whitespace-nowrap">
                    {event.time}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const Schedule = () => {
  const [activeDay, setActiveDay] = useState(0)
  const [direction, setDirection] = useState(0)

  const handleTabClick = (index) => {
    if (index === activeDay) return
    setDirection(index > activeDay ? 1 : -1)
    setActiveDay(index)
  }

  return (
    <div className="min-h-screen bg-charcoal">
      <section className="relative w-full h-[42vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-charcoal bg-[radial-gradient(circle_at_top,_rgba(128,0,32,0.55),transparent_58%),radial-gradient(circle_at_bottom,_rgba(128,0,32,0.35),transparent_60%)]" />
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-cream text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-4 text-shadow">
            Itinerary
          </h1>
          <p className="text-gray-200 text-base md:text-lg font-sans max-w-xl mx-auto">
            A refined overview of the three-day conference schedule at CMRCET MUN.
          </p>
          <div className="w-24 h-1 bg-burgundy mx-auto mt-6"></div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-gradient-to-b from-charcoal via-charcoal/95 to-charcoal">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
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

          {/* Active day card */}
          <TabbedDayCard day={itineraryDays[activeDay]} direction={direction} />
        </div>
      </section>
    </div>
  )
}

export default Schedule

