import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

const CommitteeDetail = () => {
  const { name } = useParams()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [name])

  const handleInternalClick = () => {
    window.open('https://forms.gle/5vJKNJdoaAh5dYJX7', '_blank')
  }

  const handleExternalClick = () => {
    window.open('https://forms.gle/2eW8DP92m8P9G3ap6', '_blank')
  }

  const handlePdfClick = () => {
    if (committee.pdf) {
      window.open(committee.pdf, '_blank')
    }
  }

  const committees = {
    ccc: {
      name: 'Continuous Crisis Committee',
      acronym: 'CCC',
      description: 'The Continuous Crisis Committee (CCC) is a dynamic and fast-paced committee that simulates real-time crisis situations. Delegates must respond to rapidly evolving scenarios, make critical decisions under pressure, and adapt their strategies as new information emerges. This committee challenges participants to think on their feet and demonstrate exceptional diplomatic skills.',
      mandate: 'The Continuous Crisis Committee operates under a unique framework where delegates face rapidly unfolding crises that require immediate response and strategic thinking. Unlike traditional committees, CCC sessions are characterized by real-time updates, unexpected developments, and the need for quick decision-making.',
      debate: 'Debates in CCC are intense and fast-paced, with crisis updates interrupting proceedings at any moment. Delegates must balance immediate crisis response with long-term strategic planning, often working under time constraints and with incomplete information.',
      experience: 'This committee is ideal for delegates who thrive under pressure and enjoy dynamic, unpredictable scenarios. It requires quick thinking, adaptability, and the ability to make decisive choices while maintaining diplomatic decorum.',
      skillset: 'Participants will develop critical thinking, crisis management, rapid decision-making, negotiation under pressure, strategic planning, and leadership skills. The committee emphasizes real-world problem-solving and the ability to work effectively in high-stakes situations.',
      delegates: 60,
      image: '/images/crisis-bg.png',
      agenda: 'Freeze date is 23rd June 1948.',
      pdf: '/images/CMRCET HCCC BG 2026.pdf',
      executiveBoard: [
        { name: 'Ishaan Poddar', role: 'Director', image: '/images/dirctor-crisis.jpeg' },
        { name: 'Suvidya Kanakanala', role: 'Deputy Director', image: '/images/deputy-director-crisis.jpeg' },
        { name: 'S. Bhavith Reddy', role: 'Repportuer', image: '/images/repportuer-ccc.jpeg' }
      ]
    },
    disec: {
      name: 'Disarmament and International Security Committee',
      acronym: 'DISEC',
      description: 'The Disarmament and International Security Committee (DISEC) addresses critical issues related to global security, arms control, and international peacekeeping. Delegates will engage in comprehensive debates on nuclear non-proliferation, conventional weapons regulation, and strategies for maintaining international peace and security in an increasingly complex global landscape.',
      mandate: 'DISEC serves as the primary forum for discussing matters related to international peace and security, with a particular focus on disarmament, arms control, and conflict prevention. The committee addresses both traditional and emerging security threats.',
      debate: 'Debates in DISEC are characterized by rigorous analysis of security policies, detailed examination of arms control mechanisms, and comprehensive discussion of peacekeeping strategies. Delegates engage in substantive policy discussions and work toward consensus-building.',
      experience: 'This committee is perfect for delegates interested in international relations, security studies, and conflict resolution. It requires thorough research, understanding of complex security dynamics, and the ability to navigate sensitive geopolitical issues.',
      skillset: 'Participants will enhance their research capabilities, policy analysis, diplomatic negotiation, public speaking, consensus-building, and understanding of international security frameworks. The committee emphasizes analytical thinking and collaborative problem-solving.',
      delegates: 60,
      image: '/images/image.png',
      agenda: 'Deliberation on the establishment of a Weapons of Mass Destruction-free Zone in the Middle East.',
      pdf: '/pdfs/disec.pdf',
      executiveBoard: [
        { name: 'Eshwar Chava', role: 'Chair', image: '/images/chair-disec.jpeg' },
        { name: 'Thanwika Shivarathree', role: 'Vice Chair', image: '/images/vice_chair-disec.jpeg' },
        { name: 'Jayden Lawrence', role: 'Repportuer', image: '/images/repportuer-disec.jpeg' }
      ]
    },
    ip: {
      name: 'International Press',
      acronym: 'IP',
      description: 'The International Press committee provides a unique perspective on Model UN proceedings, with delegates serving as journalists covering the conference. Members will report on committee sessions, conduct interviews, create multimedia content, and maintain the conference newspaper. This committee offers an opportunity to develop communication skills and gain insight into media operations.',
      mandate: 'The International Press serves as the media arm of the conference, responsible for documenting proceedings, analyzing debates, and providing comprehensive coverage of all committee activities. Members act as impartial observers and storytellers.',
      debate: 'While IP members do not participate in traditional debates, they engage in editorial discussions, story planning, and content creation. They must balance objective reporting with engaging storytelling, often working under tight deadlines.',
      experience: 'This committee is ideal for delegates interested in journalism, media, communications, and creative writing. It offers a unique behind-the-scenes perspective on MUN proceedings and requires strong writing and communication skills.',
      skillset: 'Participants will develop journalistic writing, interviewing techniques, multimedia production, editorial skills, critical analysis, time management, and media ethics. The committee emphasizes creativity, objectivity, and effective communication.',
      delegates: 60,
      image: '/images/ip-bg.jpg',
      agenda: 'Yet to be announced',
      pdf: '/pdfs/ip.pdf',
      executiveBoard: [
        { name: 'Sai Preethi Pollu', role: 'Head', image: '/images/head-ip.jpeg' },
        { name: 'Sri Krishna Chaitanya', role: 'Director of Photography', image: '/images/dop-ip.jpeg' },
        { name: 'Nethi Saraschandra', role: 'Editor in Chief', image: '/images/editor-in-chief-ip.jpeg' }
      ]
    },
    'lok-sabha': {
      name: 'Lok Sabha',
      acronym: 'LS',
      description: 'The Lok Sabha committee simulates the lower house of the Indian Parliament, focusing on domestic policy issues and legislative processes. Delegates will represent various constituencies and political parties, engaging in parliamentary debates, question hours, and legislative drafting. This committee provides insight into Indian democracy and governance mechanisms.',
      mandate: 'The Lok Sabha committee addresses critical domestic policy issues facing India, focusing on legislative processes, parliamentary procedures, and democratic governance. Delegates represent constituencies and political parties, working within the framework of Indian parliamentary democracy.',
      debate: 'Debates follow authentic parliamentary procedures including question hour, zero hour, and legislative discussions. Delegates engage in structured debates, propose amendments, and work toward passing legislation while representing their party positions and constituency interests.',
      experience: 'This committee is perfect for delegates interested in Indian politics, governance, and legislative processes. It requires understanding of parliamentary procedures, political dynamics, and the ability to balance party loyalty with constituency representation.',
      skillset: 'Participants will develop parliamentary procedure knowledge, legislative drafting, political negotiation, public speaking, constituency representation, and understanding of democratic processes. The committee emphasizes procedural knowledge and political acumen.',
      delegates: 60,
      image: '/images/loksabha-bg.jpg',
      agenda: [
        'Deliberating upon strengthening privacy laws in India with special emphasis on regulating moral policing and countering forces curtailing liberty in India.',
        'Discussion on regulating Sports Sector in India and emphasising debate on privatising all the Sports Bodies or bringing in Government control across all the Sports Bodies in Indis, with detailed analysis of National Sports Governance Act, 2025.'
      ],
      pdf: '/images/CMRCET MUN I LOK SABHA BG .pdf',
      executiveBoard: [
        { name: 'Naman Vankdari', role: 'Speaker', image: '/images/speaker-ls.jpeg' },
        { name: 'Sai Ruthwik Gampa', role: 'Co-Deputy Speaker', image: '/images/co-deputy speaker ls-1.jpeg' },
        { name: 'Nidadavolu Krishna Reddy', role: 'Co-Deputy Speaker', image: '/images/co-deputy speaker ls-2.jpeg' },
        { name: 'Dharmavaram Prabhas Krishna', role: 'Scribe', image: '/images/scribe ls.jpeg' }
      ]
    },
    unhrc: {
      name: 'United Nations Human Rights Council',
      acronym: 'UNHRC',
      description: 'The United Nations Human Rights Council (UNHRC) addresses pressing human rights issues on a global scale. Delegates will examine violations of fundamental rights, develop resolutions to protect vulnerable populations, and work toward ensuring dignity and equality for all. This committee emphasizes the importance of human rights in international relations.',
      mandate: 'The UNHRC is responsible for promoting and protecting human rights worldwide, addressing violations, and developing mechanisms to ensure fundamental freedoms. The committee examines specific human rights situations and works toward comprehensive solutions.',
      debate: 'Debates focus on identifying human rights violations, analyzing root causes, and developing comprehensive resolutions that address both immediate concerns and long-term solutions. Delegates engage in sensitive discussions while maintaining diplomatic decorum.',
      experience: 'This committee is ideal for delegates passionate about human rights, social justice, and humanitarian issues. It requires empathy, understanding of international law, and the ability to navigate complex ethical and political considerations.',
      skillset: 'Participants will develop understanding of human rights frameworks, legal analysis, humanitarian advocacy, diplomatic negotiation, conflict resolution, and ethical reasoning. The committee emphasizes empathy, legal knowledge, and collaborative problem-solving.',
      delegates: 60,
      image: '/images/hrc-bg.jpg',
      agenda: 'Assessing the Human Rights situation in Belarus with special emphasis on the Political Prisoners, Freedom of Expression and Judicial Independence.',
      pdf: '/pdfs/unhrc.pdf',
      executiveBoard: [
        { name: 'To be announced', role: 'Executive Board', image: null },
        { name: 'To be announced', role: 'Executive Board', image: null },
        { name: 'To be announced', role: 'Executive Board', image: null }
      ]
    }
  }

  const committee = committees[name] || committees.ccc

  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 z-0">
        <img
          src={committee.image}
          alt={committee.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-black/90 to-black"></div>
      </div>

      <section className="relative z-10 min-h-screen">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 pt-20 lg:pt-32 pb-20">
          {/* Committee Title */}
          <div className="text-center mb-16 pt-20">
            <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 text-shadow">
              {committee.name}
            </h1>
            <p className="text-white text-2xl md:text-3xl font-serif mb-8">
              {committee.acronym}
            </p>
            <div className="w-24 h-1 bg-burgundy mx-auto mb-8"></div>
            <p className="text-white text-lg md:text-xl font-sans leading-relaxed max-w-3xl mx-auto mb-6">
              {committee.description}
            </p>
            <p className="text-white text-xl font-sans">
              <span className="font-bold">{committee.delegates}</span> Delegates
            </p>
          </div>

          {/* Agenda Section */}
          <div className="max-w-4xl mx-auto mb-20">
            {Array.isArray(committee.agenda) ? (
              <div className="space-y-6">
                {committee.agenda.map((agendaItem, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 lg:p-12 shadow-xl">
                    <h2 className="text-white text-3xl md:text-4xl font-serif font-bold mb-6 text-center">
                      Agenda {index + 1}
                    </h2>
                    <div className="w-16 h-1 bg-burgundy mx-auto mb-8"></div>
                    <p className="text-gray-300 text-center text-lg md:text-xl font-sans">
                      {agendaItem}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 lg:p-12 shadow-xl">
                <h2 className="text-white text-3xl md:text-4xl font-serif font-bold mb-6 text-center">
                  Agenda
                </h2>
                <div className="w-16 h-1 bg-burgundy mx-auto mb-8"></div>
                <p className="text-gray-300 text-center text-lg md:text-xl font-sans">
                  {committee.agenda}
                </p>
              </div>
            )}
          </div>

          {/* Background Guide / Problem Statement PDF Section */}
          {committee.pdf && (
            <div className="max-w-4xl mx-auto mb-20">
              <div
                onClick={handlePdfClick}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 lg:p-12 shadow-xl cursor-pointer hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex flex-col items-center">
                  <div className="mb-6">
                    <svg className="w-16 h-16 text-burgundy/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h2 className="text-white text-3xl md:text-4xl font-serif font-bold mb-4 text-center">
                    Background Guide / Problem Statement
                  </h2>
                  <div className="w-16 h-1 bg-burgundy mx-auto mb-4"></div>
                  <p className="text-gray-300 text-center text-lg md:text-xl font-sans">
                    Click to view PDF
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Executive Board Section */}
          <div className="max-w-5xl mx-auto mb-20">
            <h2 className="text-white text-3xl md:text-4xl font-serif font-bold mb-6 text-center">
              Executive Board
            </h2>
            <div className="w-16 h-1 bg-burgundy mx-auto mb-12"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {committee.executiveBoard.map((member, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 text-center shadow-xl hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-burgundy/20 to-charcoal/40 border-2 border-burgundy/30 mx-auto mb-6 flex items-center justify-center overflow-hidden">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <svg className="w-16 h-16 text-burgundy/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    )}
                  </div>
                  <h3 className="text-white text-xl font-sans font-bold mb-3">
                    {member.name}
                  </h3>
                  <p className="text-burgundy font-sans text-base font-semibold">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Register Buttons */}
          <div className="text-center pt-8 pb-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
              <button
                onClick={handleInternalClick}
                className="w-full sm:w-auto bg-burgundy border-2 border-burgundy text-white px-8 py-4 uppercase tracking-wider font-sans font-semibold hover:bg-opacity-90 transition-all duration-300 rounded text-base hover:scale-105 hover:shadow-lg hover:shadow-burgundy/50"
              >
                Internal Delegate
              </button>
              <button
                onClick={handleExternalClick}
                className="w-full sm:w-auto bg-burgundy border-2 border-burgundy text-white px-8 py-4 uppercase tracking-wider font-sans font-semibold hover:bg-opacity-90 transition-all duration-300 rounded text-base hover:scale-105 hover:shadow-lg hover:shadow-burgundy/50"
              >
                External Delegate
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CommitteeDetail

