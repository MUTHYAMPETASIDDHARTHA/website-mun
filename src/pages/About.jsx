const About = () => {
  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="public/images/cmr-bg.jpg"
            alt="CMRCET MUN About"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-20 animate-fade-in">
          <h1 className="text-white text-5xl md:text-7xl font-serif font-bold mb-8 text-shadow">
            About CMRCET MUN
          </h1>
          <div className="text-white text-lg md:text-xl font-sans leading-relaxed space-y-6">
            <p>
              CMRCET Model United Nations is a premier academic simulation conference that brings together students from across the region to engage in diplomatic discourse and international relations.
            </p>
            <p>
              Our conference strives to simulate the complexities of international relations, offering participants a transformative educational experience that prepares them to become future leaders. Through rigorous debate, collaborative problem-solving, and diplomatic negotiation, delegates develop essential skills in leadership, public speaking, and critical thinking.
            </p>
            <p>
              True to the spirit of the United Nations, CMRCET MUN fosters a constructive forum for open dialogue on a range of complex global issues. We challenge delegates to think critically about the world around them in new and ambitious ways, to engage with perspectives that may differ from their own, and to work collaboratively toward solutions that benefit the global community.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

