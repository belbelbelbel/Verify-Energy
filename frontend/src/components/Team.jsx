import { ArrowRight, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube, Globe } from "lucide-react"
import Navbar from "./Navbar"

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1a1a2e] via-[#020a0a] to-[#051f2f] text-white min-h-[60vh] pt-24" style={{
        backgroundImage: "url('/hero-bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
        <div className="absolute inset-0 bg-[url('/hero-bg.png')] bg-center bg-cover opacity-10 z-[1]"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-5 pt-20 pb-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Our Expert Team</h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Meet the passionate professionals driving the future of sustainable energy solutions.
            </p>
          </div>
        </div>
      </section>

   

      {/* Team Grid Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Meet the Team</h2>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              { image: "/photo_2025-09-03_15-14-38.jpg", name: "Jack Jack", role: "President" },
              { image: "/photo_2025-09-03_15-14-40.jpg", name: "Jack Jack", role: "President" },
              { image: "/photo_2025-09-03_15-05-10.jpg", name: "Jack Jack", role: "President" },
              { image: "/photo_2025-09-03_15-14-35.jpg", name: "Jack Jack", role: "President" },
              { image: "/photo_2025-09-03_15-14-42.jpg", name: "Jack Jack", role: "President" },
              { image: "/photo_2025-09-03_15-14-44.jpg", name: "Jack Jack", role: "President" },
              { image: "/photo_2025-09-03_15-14-47.jpg", name: "Jack Jack", role: "President" },
              { image: "/photo_2025-09-03_15-14-49.jpg", name: "Jack Jack", role: "President" },
              { image: "/photo_2025-09-03_15-14-51.jpg", name: "Jack Jack", role: "President" },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-210 md:h-204 object-contain"
                />
                {/* <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-[#dc2626] font-semibold mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">Ph.D. Energy Policy, Stanford University</p>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Join Our Newsletter</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Stay connected and informed. Join our newsletter for the latest updates, inspiration, and engineering
            insights.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#dc2626] focus:border-transparent"
            />
            <button className="bg-[#dc2626] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-[#b91c1c] flex items-center justify-center">
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-6xl mx-auto px-5 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our World-Class Team</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Shape the future of energy with us. We're expanding globally and seeking exceptional talent across
            engineering, research, business development, and sustainability.
          </p>

          <div className="flex flex-col items-center sm:flex-row gap-4 justify-center">
            <button className="bg-[#dc2626] rounded-md text-white px-6 py-3 font-semibold w-[220px] transition-all duration-300 hover:bg-[#b91c1c] hover:-translate-y-0.5">
              Join Us
            </button>
            <button className="bg-transparent rounded-md text-white border-2 border-white/30 px-6 py-3 font-semibold w-[220px] flex items-center justify-center transition-all duration-300 hover:border-[#dc2626] hover:text-[#dc2626]">
              Learn More <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-16 pb-8">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-[#dc2626] to-[#ea580c] rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="font-bold">Veridyn Energy</div>
              </div>
              <p className="text-gray-400 text-sm mb-6">
                Powering the future of energy through innovation, sustainability, and cutting-edge technology solutions.
              </p>
              <p className="text-gray-400 text-sm mb-2">Copyright © 2025 Veridyn Energy ltd.</p>
              <p className="text-gray-400 text-sm">All rights reserved</p>

              <div className="flex space-x-4 mt-4">
                <Instagram className="w-5 h-5 text-gray-400 cursor-pointer transition-colors duration-300 hover:text-[#dc2626]" />
                <Globe className="w-5 h-5 text-gray-400 cursor-pointer transition-colors duration-300 hover:text-[#dc2626]" />
                <Twitter className="w-5 h-5 text-gray-400 cursor-pointer transition-colors duration-300 hover:text-[#dc2626]" />
                <Youtube className="w-5 h-5 text-gray-400 cursor-pointer transition-colors duration-300 hover:text-[#dc2626]" />
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <div className="space-y-2 text-gray-400">
                <p>999</p>
                <p>@s.com</p>
                <p>+234 123456789</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Link</h4>
              <div className="space-y-2">
                <a
                  href="/"
                  className="text-gray-400 no-underline transition-colors duration-300 hover:text-[#dc2626] block"
                >
                  Home
                </a>
                <a
                  href="/about"
                  className="text-gray-400 no-underline transition-colors duration-300 hover:text-[#dc2626] block"
                >
                  About Us
                </a>
                <a
                  href="/projects"
                  className="text-gray-400 no-underline transition-colors duration-300 hover:text-[#dc2626] block"
                >
                  Projects
                </a>
                <a
                  href="/team"
                  className="text-gray-400 no-underline transition-colors duration-300 hover:text-[#dc2626] block"
                >
                  Team
                </a>
                <a
                  href="/contact"
                  className="text-gray-400 no-underline transition-colors duration-300 hover:text-[#dc2626] block"
                >
                  Contact Us
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <div className="space-y-2">
                <a
                  href="#"
                  className="text-gray-400 no-underline transition-colors duration-300 hover:text-[#dc2626] block"
                >
                  Renewable Energy Solutions
                </a>
                <a
                  href="#"
                  className="text-gray-400 no-underline transition-colors duration-300 hover:text-[#dc2626] block"
                >
                  Energy Consulting
                </a>
                <a
                  href="#"
                  className="text-gray-400 no-underline transition-colors duration-300 hover:text-[#dc2626] block"
                >
                  Power System Design
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-400">@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-400">1234567890</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-400">myhouse</span>
                </div>
              </div>

              <div className="flex space-x-4 mt-4">
                <Facebook className="w-5 h-5 text-gray-400 cursor-pointer transition-colors duration-300 hover:text-[#dc2626]" />
                <Twitter className="w-5 h-5 text-gray-400 cursor-pointer transition-colors duration-300 hover:text-[#dc2626]" />
                <Instagram className="w-5 h-5 text-gray-400 cursor-pointer transition-colors duration-300 hover:text-[#dc2626]" />
                <Linkedin className="w-5 h-5 text-gray-400 cursor-pointer transition-colors duration-300 hover:text-[#dc2626]" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
