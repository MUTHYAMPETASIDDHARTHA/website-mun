const Register = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-charcoal to-black py-20">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6">
            Registration
          </h1>
          <div className="w-24 h-1 bg-burgundy mx-auto mb-4"></div>
          <p className="text-gray-300 text-lg md:text-xl font-sans font-medium">
            Select your registration type to begin your journey
          </p>
        </div>

        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 mb-8">
          <h3 className="text-white text-xl font-serif font-bold mb-4 flex items-center">
            <span className="w-1 h-6 bg-burgundy mr-3"></span>
            Important Information
          </h3>
          <ul className="space-y-3 text-gray-300 font-sans text-sm md:text-base">
            <li className="flex items-start">
              <span className="text-burgundy mr-2">•</span>
              <span>All registrations are processed through Google Forms</span>
            </li>
            <li className="flex items-start">
              <span className="text-burgundy mr-2">•</span>
              <span>Committee allotments are done on a first-come, first-served basis</span>
            </li>
            <li className="flex items-start">
              <span className="text-burgundy mr-2">•</span>
              <span>You will receive a confirmation email within 48 hours</span>
            </li>
            <li className="flex items-start">
              <span className="text-burgundy mr-2">•</span>
              <span>Accommodation details will be shared separately for External delegates</span>
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <a
            href="#"
            className="group relative bg-gray-800 border border-gray-700 rounded-lg p-12 text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-burgundy/20 overflow-hidden"
          >
            <div className="absolute top-4 right-4 text-white opacity-50 group-hover:opacity-100 transition-opacity">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
            <div className="mb-6 flex justify-center">
              <div className="w-16 h-16 rounded-full bg-burgundy/20 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
            <div className="text-3xl md:text-4xl font-serif font-bold text-white mb-4 group-hover:text-burgundy transition-colors duration-300">
              External Delegate
            </div>
          </a>
          <a
            href="#"
            className="group relative bg-gray-800 border border-gray-700 rounded-lg p-12 text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-burgundy/20 overflow-hidden"
          >
            <div className="absolute top-4 right-4 text-white opacity-50 group-hover:opacity-100 transition-opacity">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
            <div className="mb-6 flex justify-center">
              <div className="w-16 h-16 rounded-full bg-burgundy/20 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            </div>
            <div className="text-3xl md:text-4xl font-serif font-bold text-white mb-4 group-hover:text-burgundy transition-colors duration-300">
              CMRGI Delegation
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Register

