import {
  ArrowRight,
  MapPin,
  Calendar,
  Zap,
  Mail,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Globe,
} from "lucide-react"
import Navbar from "./Navbar"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
     <Navbar/>
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1a1a2e] via-[#020a0a] to-[#051f2f] text-white min-h-[60vh] pt-24" style={{
        backgroundImage: "url('/hero-bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
        <div className="absolute inset-0 bg-[url('/hero-bg.png')] bg-center bg-cover opacity-10 z-[1]"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-5 pt-20 pb-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Our Projects</h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover our innovative energy projects that are shaping the future of sustainable power generation and
              distribution.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">N500M+</div>
              <div className="text-gray-600">Revenue Generated</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">5</div>
              <div className="text-gray-600">Communities Powered</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">10 +</div>
              <div className="text-gray-600">Countries</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">50 +</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Recent Project</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
              <img
                src="projectimg1.png"
                alt="Solar Valley Initiative"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Solar Valley Initiative</h3>
                <p className="text-gray-600 mb-4">
                  Large-scale solar farm development project providing clean energy to over 50,000 homes.
                </p>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-gray-500 text-sm">
                    <MapPin className="h-4 w-4 mr-2" />
                    Lagos
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="h-4 w-4 mr-2" />
                    January, 2024
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Zap className="h-4 w-4 mr-2" />
                    200MW
                  </div>
                </div>

                <button className="w-full bg-transparent text-[#dc2626] border-2 border-[#dc2626] px-6 py-3 font-semibold rounded-lg transition-all duration-300 hover:bg-[#dc2626] hover:text-white flex items-center justify-center">
                  View Details <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
              <img
                src="projectimg2.png"
                alt="Solar Valley Initiative"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Solar Valley Initiative</h3>
                <p className="text-gray-600 mb-4">
                  Large-scale solar farm development project providing clean energy to over 50,000 homes.
                </p>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-gray-500 text-sm">
                    <MapPin className="h-4 w-4 mr-2" />
                    Lagos
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="h-4 w-4 mr-2" />
                    January, 2024
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Zap className="h-4 w-4 mr-2" />
                    200MW
                  </div>
                </div>

                <button className="w-full bg-transparent text-[#dc2626] border-2 border-[#dc2626] px-6 py-3 font-semibold rounded-lg transition-all duration-300 hover:bg-[#dc2626] hover:text-white flex items-center justify-center">
                  View Details <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-transparent text-[#dc2626] border-2 border-[#dc2626] px-8 py-3 font-semibold rounded-lg transition-all duration-300 hover:bg-[#dc2626] hover:text-white flex items-center justify-center mx-auto">
              Explore More Projects <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Top Project Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Top Project</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-[#dc2626] font-medium mb-2">Solar Installation</div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Eko Atlantic Solar Installation</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo."
              </p>
              <button className="bg-transparent text-[#dc2626] border-2 border-[#dc2626] px-6 py-3 font-semibold rounded-lg transition-all duration-300 hover:bg-[#dc2626] hover:text-white flex items-center">
                Check Project <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>

            <div className="gap-4">
              <img
                src="projectimg3.png"
                alt="Solar installation aerial view"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-6xl mx-auto px-5 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Have a Project in Mind?</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Let's collaborate to bring your energy vision to life. Our team is ready to help you create sustainable
            solutions.
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
