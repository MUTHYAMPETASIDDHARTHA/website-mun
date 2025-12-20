import { useState } from 'react'

const Schedule = () => {
  const [activeDay, setActiveDay] = useState(0)

  const scheduleDays = [
    {
      day: 'Day 1',
      date: 'January 29th, 2026',
      events: [
        { time: '09:00 AM - 10:00 AM', title: 'Opening Registrations', color: 'bg-green-500' },
        { time: '10:00 AM - 11:00 AM', title: 'Opening Ceremony', color: 'bg-blue-500' },
        { time: '11:30 AM - 11:45 AM', title: 'High Tea 1', color: 'bg-purple-500' },
        { time: '11:45 AM - 02:00 PM', title: 'Committee Session I', color: 'bg-orange-500' },
        { time: '02:00 PM - 02:50 PM', title: 'Lunch', color: 'bg-green-500' },
      ]
    },
    {
      day: 'Day 2',
      date: 'January 30th, 2026',
      events: [
        { time: '09:00 AM - 12:00 PM', title: 'Committee Session II', color: 'bg-blue-500' },
        { time: '12:00 PM - 01:00 PM', title: 'Lunch Break', color: 'bg-green-500' },
        { time: '01:00 PM - 04:00 PM', title: 'Committee Session III', color: 'bg-purple-500' },
        { time: '04:30 PM - 05:00 PM', title: 'High Tea 2', color: 'bg-orange-500' },
      ]
    },
    {
      day: 'Day 3',
      date: 'January 31st, 2026',
      events: [
        { time: '09:00 AM - 12:00 PM', title: 'Committee Session IV', color: 'bg-blue-500' },
        { time: '12:00 PM - 01:00 PM', title: 'Lunch Break', color: 'bg-green-500' },
        { time: '01:00 PM - 03:00 PM', title: 'Final Committee Session', color: 'bg-purple-500' },
        { time: '03:30 PM - 05:00 PM', title: 'Closing Ceremony', color: 'bg-orange-500' },
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-charcoal">
      <section className="relative w-full h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-b from-charcoal via-charcoal to-black"></div>
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-white text-6xl md:text-8xl font-serif font-bold mb-4 text-shadow">
            Itinerary
          </h1>
          <div className="w-24 h-1 bg-burgundy mx-auto mt-4"></div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-gray-800 rounded-full p-2 gap-2">
              {scheduleDays.map((day, index) => (
                <button
                  key={index}
                  onClick={() => setActiveDay(index)}
                  className={`px-6 py-3 rounded-full font-sans font-medium transition-all duration-300 ${
                    activeDay === index
                      ? 'bg-yellow-400 text-charcoal'
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                  }`}
                >
                  {day.day} / {day.date.split(' ')[1].replace('th', '').replace('st', '').replace('nd', '').replace('rd', '')} {day.date.split(' ')[0].slice(0, 3).toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {scheduleDays[activeDay].events.map((event, index) => (
              <div key={index} className="flex items-start gap-6">
                <div className={`${event.color} w-32 h-20 rounded flex items-center justify-center flex-shrink-0`}>
                  <p className="text-white text-sm font-sans font-semibold text-center px-2">
                    {event.time}
                  </p>
                </div>
                <div className="flex-1">
                  <h3 className="text-white text-2xl md:text-3xl font-sans font-bold">
                    {event.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Schedule

