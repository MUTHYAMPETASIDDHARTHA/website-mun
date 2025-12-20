import { useState, useEffect, useRef } from 'react'

const ScheduleSection = () => {
  const [activeDay, setActiveDay] = useState(0)
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

  const scheduleDays = [
    {
      day: 'Day 1',
      date: 'January 29th, 2026',
      title: 'Opening Ceremony & Committee Sessions',
      events: [
        { time: '09:00 AM - 10:00 AM', title: 'Opening Registrations', location: 'Main Lobby', description: 'Check-in, receive delegate kits, and network with fellow delegates' },
        { time: '10:00 AM - 11:00 AM', title: 'Opening Ceremony', location: 'Main Auditorium', description: 'Welcome address and keynote speeches' },
        { time: '11:30 AM - 11:45 AM', title: 'High Tea 1', location: 'Lobby', description: 'Networking break' },
        { time: '11:45 AM - 02:00 PM', title: 'Committee Session I', location: 'Committee Rooms', description: 'First committee session begins' },
        { time: '02:00 PM - 02:50 PM', title: 'Lunch', location: 'Dining Hall', description: 'Lunch break' },
      ]
    },
    {
      day: 'Day 2',
      date: 'January 30th, 2026',
      title: 'Committee Sessions Continue',
      events: [
        { time: '09:00 AM - 12:00 PM', title: 'Committee Session II', location: 'Committee Rooms', description: 'Continued deliberations' },
        { time: '12:00 PM - 01:00 PM', title: 'Lunch Break', location: 'Dining Hall', description: 'Lunch break' },
        { time: '01:00 PM - 04:00 PM', title: 'Committee Session III', location: 'Committee Rooms', description: 'Afternoon session' },
        { time: '04:30 PM - 05:00 PM', title: 'High Tea 2', location: 'Lobby', description: 'Networking break' },
      ]
    },
    {
      day: 'Day 3',
      date: 'January 31st, 2026',
      title: 'Final Sessions & Closing Ceremony',
      events: [
        { time: '09:00 AM - 12:00 PM', title: 'Committee Session IV', location: 'Committee Rooms', description: 'Final deliberations' },
        { time: '12:00 PM - 01:00 PM', title: 'Lunch Break', location: 'Dining Hall', description: 'Lunch break' },
        { time: '01:00 PM - 03:00 PM', title: 'Final Committee Session', location: 'Committee Rooms', description: 'Resolution voting and final debates' },
        { time: '03:30 PM - 05:00 PM', title: 'Closing Ceremony', location: 'Main Auditorium', description: 'Awards ceremony and closing remarks' },
      ]
    }
  ]

  return (
    <section id="schedule" ref={sectionRef} className="bg-charcoal py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-white text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6">
            Conference Schedule
          </h2>
          <div className="w-24 h-1 bg-burgundy mx-auto"></div>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 transform transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-purple-900/50 border border-purple-700 rounded-lg p-6">
            <h3 className="text-white text-lg font-serif font-bold mb-3">Dress Code</h3>
            <p className="text-gray-300 font-sans text-sm">Business Formals for all sessions. Traditional attire encouraged for Social Night.</p>
          </div>
          <div className="bg-blue-900/50 border border-blue-700 rounded-lg p-6">
            <h3 className="text-white text-lg font-serif font-bold mb-3">Important Note</h3>
            <p className="text-gray-300 font-sans text-sm">All delegates must carry their ID cards and delegate kits at all times.</p>
          </div>
          <div className="bg-red-900/50 border border-red-700 rounded-lg p-6">
            <h3 className="text-white text-lg font-serif font-bold mb-3">Contact</h3>
            <p className="text-gray-300 font-sans text-sm">For schedule queries, contact the organizing committee at schedule@mun.org</p>
          </div>
        </div>

        <div className={`flex justify-center mb-12 transform transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex bg-gray-800 rounded-lg p-2 gap-2 border border-gray-700">
            {scheduleDays.map((day, index) => (
              <button
                key={index}
                onClick={() => setActiveDay(index)}
                className={`px-6 py-3 rounded-lg font-sans font-semibold transition-all duration-300 ${
                  activeDay === index
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white scale-105'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {day.day}
              </button>
            ))}
          </div>
        </div>

        <div className={`bg-gray-800 border border-gray-700 rounded-lg p-8 transform transition-all duration-1000 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center mr-4">
              <span className="text-white font-serif font-bold text-xl">{activeDay + 1}</span>
            </div>
            <div>
              <h3 className="text-white text-2xl md:text-3xl font-serif font-bold">
                {scheduleDays[activeDay].day} - {scheduleDays[activeDay].title}
              </h3>
              <div className="flex items-center text-gray-400 font-sans text-sm mt-1">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {scheduleDays[activeDay].date}
              </div>
            </div>
          </div>

          <div className="relative pl-8 border-l-2 border-blue-500 space-y-8">
            {scheduleDays[activeDay].events.map((event, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-12 top-2 w-4 h-4 rounded-full bg-blue-500 border-2 border-charcoal"></div>
                <div className="bg-gray-700/50 rounded-lg p-6 hover:bg-gray-700 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h4 className="text-white text-xl md:text-2xl font-sans font-bold mb-2 md:mb-0">
                      {event.title}
                    </h4>
                    <div className="flex items-center text-blue-400 font-sans font-semibold text-sm">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {event.time}
                    </div>
                  </div>
                  <div className="flex items-center text-gray-400 font-sans text-sm mb-2">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {event.location}
                  </div>
                  <p className="text-gray-300 font-sans text-sm leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ScheduleSection
