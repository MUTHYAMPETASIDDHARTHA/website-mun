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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <h3 className="text-white text-2xl md:text-3xl font-serif font-bold mb-4">
              Day 1
            </h3>
            <p className="text-gray-300 text-lg font-sans">
              Coming Soon
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-white text-2xl md:text-3xl font-serif font-bold mb-4">
              Day 2
            </h3>
            <p className="text-gray-300 text-lg font-sans">
              Coming Soon
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-white text-2xl md:text-3xl font-serif font-bold mb-4">
              Day 3
              </h3>
            <p className="text-gray-300 text-lg font-sans">
              Coming Soon
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ScheduleSection
