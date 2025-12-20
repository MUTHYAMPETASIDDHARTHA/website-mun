import { useNavigate } from 'react-router-dom'

const Committees = () => {
  const navigate = useNavigate()

  const committees = [
    {
      id: 'ccc',
      name: 'Continuous Crisis Committee',
      acronym: 'CCC',
      delegates: 60,
      image: 'public/images/home-crisis.webp'
    },
    {
      id: 'disec',
      name: 'Disarmament and International Security Committee',
      acronym: 'DISEC',
      delegates: 60,
      image: 'public/images/home-disec.webp'
    },
    {
      id: 'ip',
      name: 'International Press',
      acronym: 'IP',
      delegates: 60,
      image: 'public/images/ip-bg.jpg'
    },
    {
      id: 'lok-sabha',
      name: 'Lok Sabha',
      acronym: 'LS',
      delegates: 60,
      image: 'public/images/home-loksabha.jpg'
    },
    {
      id: 'unhrc',
      name: 'United Nations Human Rights Council',
      acronym: 'UNHRC',
      delegates: 60,
      image: 'public/images/unhrc.jpg'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <section className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/placeholder-committee-banner.jpg"
            alt="CMRCET MUN Committees"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-white text-6xl md:text-8xl font-serif font-bold mb-4 text-shadow">
            Committees
          </h1>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {committees.slice(0, 3).map((committee) => (
              <div
                key={committee.id}
                onClick={() => navigate(`/committees/${committee.id}`)}
                className="relative h-96 rounded-lg overflow-hidden group cursor-pointer transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="absolute inset-0 z-0">
                  <img
                    src={committee.image}
                    alt={committee.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black/90"></div>
                </div>

                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-burgundy border-2 border-white flex items-center justify-center mb-1">
                      <div className="w-6 h-6 border border-white rounded-full"></div>
                    </div>
                    <span className="text-white text-xs font-serif font-bold tracking-wide">CMRCET MUN</span>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <h3 className="text-white text-lg md:text-xl font-sans font-bold mb-2 leading-tight">
                    {committee.name}
                  </h3>
                  <p className="text-white text-sm font-sans">
                    {committee.delegates} Delegates
                  </p>
                </div>

                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
              {committees.slice(3, 5).map((committee) => (
                <div
                  key={committee.id}
                  onClick={() => navigate(`/committees/${committee.id}`)}
                  className="relative h-96 rounded-lg overflow-hidden group cursor-pointer transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="absolute inset-0 z-0">
                    <img
                      src={committee.image}
                      alt={committee.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black/90"></div>
                  </div>

                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-burgundy border-2 border-white flex items-center justify-center mb-1">
                        <div className="w-6 h-6 border border-white rounded-full"></div>
                      </div>
                      <span className="text-white text-xs font-serif font-bold tracking-wide">CMRCET MUN</span>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                    <h3 className="text-white text-lg md:text-xl font-sans font-bold mb-2 leading-tight">
                      {committee.name}
                    </h3>
                    <p className="text-white text-sm font-sans">
                      {committee.delegates} Delegates
                    </p>
                  </div>

                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Committees

