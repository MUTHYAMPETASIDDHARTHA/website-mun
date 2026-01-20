import ItinerarySection from './ItinerarySection'

const ScheduleSection = () => {
  return (
    <section id="schedule" className="bg-charcoal py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-white text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6">
            Conference Schedule
          </h2>
          <div className="w-24 h-1 bg-burgundy mx-auto"></div>
        </div>
        <ItinerarySection variant="tabs" />
      </div>
    </section>
  )
}

export default ScheduleSection
