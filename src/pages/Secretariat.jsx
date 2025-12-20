const Secretariat = () => {
  const secretariatMembers = [
    {
      name: "Chidugu Akhil",
      role: "Secretary-General",
      image: "/placeholder-secretariat-1.jpg"
    },
    {
      name: "V. Aniketh Srivathsa",
      role: "Director-General",
      image: "/placeholder-secretariat-2.jpg"
    },
    {
      name: "K. Krishnadeep",
      role: "Director-General",
      image: "/placeholder-secretariat-3.jpg"
    },
    {
      name: "M. Jeevan Srikar",
      role: "Deputy-Secretary-General",
      image: "/placeholder-secretariat-4.jpg"
    },
    {
      name: "N. Greeshmitha",
      role: "Organising Committee Head",
      image: "/placeholder-secretariat-5.jpg"
    },
    {
      name: "M. Rishik",
      role: "Organising Committee Head",
      image: "/placeholder-secretariat-6.jpg"
    },
    {
      name: "M. Siddhartha",
      role: "USG-IT",
      image: "/placeholder-secretariat-7.jpg"
    },
    {
      name: "T. Karthik",
      role: "USG-DELEGATE AFFAIRS",
      image: "/placeholder-secretariat-8.jpg"
    },
    {
      name: "U. Tushar",
      role: "USG-DELEGATE AFFAIRS",
      image: "/placeholder-secretariat-9.jpg"
    },
    {
      name: "Pranav Prashanth",
      role: "USG-Transportation",
      image: "/placeholder-secretariat-10.jpg"
    },
    {
      name: "K. Kaushik Srinivas",
      role: "USG-Finance",
      image: "/placeholder-secretariat-11.jpg"
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
            Meet Our Secretariat
          </h1>
          <div className="w-24 h-1 bg-burgundy mx-auto mt-4"></div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {secretariatMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="relative h-80">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 bg-charcoal">
                  <h3 className="text-white text-xl font-serif font-bold mb-2 uppercase">
                    {member.name}
                  </h3>
                  <p className="text-burgundy text-lg font-sans font-semibold uppercase">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Secretariat

