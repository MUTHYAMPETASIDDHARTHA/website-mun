import { useParams, useNavigate } from 'react-router-dom'

const CommitteeDetail = () => {
  const { name } = useParams()
  const navigate = useNavigate()

  const committees = {
    ccc: {
      name: 'Continuous Crisis Committee',
      acronym: 'CCC',
      description: 'The Continuous Crisis Committee (CCC) is a dynamic and fast-paced committee that simulates real-time crisis situations. Delegates must respond to rapidly evolving scenarios, make critical decisions under pressure, and adapt their strategies as new information emerges. This committee challenges participants to think on their feet and demonstrate exceptional diplomatic skills.',
      delegates: 60,
      image: '/images/crisis-bg.png'
    },
    disec: {
      name: 'Disarmament and International Security Committee',
      acronym: 'DISEC',
      description: 'The Disarmament and International Security Committee (DISEC) addresses critical issues related to global security, arms control, and international peacekeeping. Delegates will engage in comprehensive debates on nuclear non-proliferation, conventional weapons regulation, and strategies for maintaining international peace and security in an increasingly complex global landscape.',
      delegates: 60,
      image: '/images/image.png'
    },
    ip: {
      name: 'International Press',
      acronym: 'IP',
      description: 'The International Press committee provides a unique perspective on Model UN proceedings, with delegates serving as journalists covering the conference. Members will report on committee sessions, conduct interviews, create multimedia content, and maintain the conference newspaper. This committee offers an opportunity to develop communication skills and gain insight into media operations.',
      delegates: 60,
      image: '/images/ip-bg.jpg'
    },
    'lok-sabha': {
      name: 'Lok Sabha',
      acronym: 'LS',
      description: 'The Lok Sabha committee simulates the lower house of the Indian Parliament, focusing on domestic policy issues and legislative processes. Delegates will represent various constituencies and political parties, engaging in parliamentary debates, question hours, and legislative drafting. This committee provides insight into Indian democracy and governance mechanisms.',
      delegates: 60,
      image: '/images/loksabha-bg.jpg'
    },
    unhrc: {
      name: 'United Nations Human Rights Council',
      acronym: 'UNHRC',
      description: 'The United Nations Human Rights Council (UNHRC) addresses pressing human rights issues on a global scale. Delegates will examine violations of fundamental rights, develop resolutions to protect vulnerable populations, and work toward ensuring dignity and equality for all. This committee emphasizes the importance of human rights in international relations.',
      delegates: 60,
      image: '/images/hrc-bg.jpg'
    }
  }

  const committee = committees[name] || committees.ccc

  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={committee.image}
            alt={committee.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-20">
          <h1 className="text-white text-5xl md:text-7xl font-serif font-bold mb-4 text-shadow">
            {committee.name}
          </h1>
          <p className="text-white text-2xl md:text-3xl font-serif mb-8">
            {committee.acronym}
          </p>
          <p className="text-white text-lg md:text-xl font-sans mb-12 leading-relaxed max-w-3xl mx-auto">
            {committee.description}
          </p>
          <div className="mb-8">
            <p className="text-white text-xl font-sans mb-4">
              <span className="font-bold">{committee.delegates}</span> Delegates
            </p>
          </div>
          <a
            href="#register"
            onClick={(e) => {
              e.preventDefault()
              navigate('/register')
            }}
            className="inline-block bg-burgundy border-2 border-burgundy text-white px-12 py-4 uppercase tracking-wider font-sans font-semibold hover:bg-opacity-90 transition-all duration-300 rounded text-lg hover:scale-105 hover:shadow-lg hover:shadow-burgundy/50"
          >
            REGISTER NOW
          </a>
        </div>
      </section>
    </div>
  )
}

export default CommitteeDetail

