
import {
  ArrowRight,
  Users,
  Building,
  Zap,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Globe,
  ChevronDown,
} from "lucide-react"
import Navbar from "./Navbar"
import { useState } from "react"

export default function Home() {
  const [openIndex, setOpenIndex] = useState(null)
  const faqs = [
    {
      question: "What solutions does Veridyn Energy provide?",
      answer: "We provide clean energy solutions including solar, wind, and smart grid technologies."
    },
    {
      question: "How does Veridyn Energy promote sustainability?",
      answer: "We prioritize renewable energy sources and design systems that minimize carbon emissions."
    },
    {
      question: "What technologies do you use?",
      answer: "We use AI-driven monitoring, IoT-enabled smart grids, and the latest renewable energy innovations."
    },
    {
      question: "Where are your partnerships located?",
      answer: "We have partnerships with energy providers and NGOs across North America, Europe, and Africa."
    }
  ]


  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1a1a2e] via-[#020a0a] to-[#051f2f] text-white min-h-[80vh] pt-24" style={{
        backgroundImage: "url('/hero-bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
        <div className="absolute inset-0 bg-[url('/hero-bg.png')] bg-center bg-cover opacity-10 z-[1]"></div>

        {/* Floating Decorations */}
        <div className="absolute inset-0 z-[1]">
          {/* <div className="absolute w-[200px] h-[200px] top-[10%] left-[10%] rounded-full bg-gradient-to-br from-[#dc2626]/10 to-[#ea580c]/10 animate-[float_6s_ease-in-out_infinite]"></div>
          <div className="absolute w-[150px] h-[150px] top-[20%] right-[15%] rounded-full bg-gradient-to-br from-[#dc2626]/10 to-[#ea580c]/10 animate-[float_8s_ease-in-out_infinite_reverse]"></div>
          <div className="absolute w-[100px] h-[100px] bottom-[30%] left-[20%] rounded-full bg-gradient-to-br from-[#dc2626]/10 to-[#ea580c]/10 animate-[float_7s_ease-in-out_infinite]"></div>
          <div className="absolute w-[120px] h-[120px] bottom-[20%] right-[25%] rounded-full bg-gradient-to-br from-[#dc2626]/10 to-[#ea580c]/10 animate-[float_9s_ease-in-out_infinite_reverse]"></div> */}
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-5 pt-20 pb-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Building Smart Solutions for Energy's Next Era
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              At the heart of innovation, we are developing smart, sustainable solutions to meet the growing demands of
              tomorrow's energy landscape
            </p>

            <div className="flex flex-col items-center md:flex-row gap-4 justify-center">
              <button className="bg-[#dc2626] rounded-xl text-white px-6 py-3 font-semibold w-[220px] transition-all duration-300 hover:bg-[#b91c1c] hover:-translate-y-0.5">
                Join Us
              </button>
              <button className="bg-transparent rounded-xl text-white border-2 border-white/30 px-6 py-3 font-semibold w-[220px] flex items-center justify-center transition-all duration-300 hover:border-[#dc2626] hover:text-[#dc2626]">
                Learn More <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">N500M+</div>
              <div className="text-gray-300">Revenue Generated</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">5</div>
              <div className="text-gray-300">Communities Powered</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">10 +</div>
              <div className="text-gray-300">Countries</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">50 +</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="xl:py-20 pb-10 bg-gray-50">
        <div className="max-w-6xl mx-auto px-0">
          <div className="grid lg:grid-cols-2 lg:gap-12 items-center">

            <div className="bg-transparent w-full  h-full  overflow-hidden">
              <img
                src="/homeimg1.png"
                alt="Professional working"
                className="w-full h-[400px] object-contain"
              />
            </div>

            <div className="text-center ">
              <div className="text-[#000000] font-medium mb-2">Who We Are</div>
              <h2 className="text-3xl md:text-3xl font-bold text-[#A02E2E] mb-6">Leading the Energy Revolution</h2>
              <p className="text-gray-600 text-md leading-relaxed mb-8">
                Veridyn Energy is pioneering the next generation of sustainable energy infrastructure through breakthrough AI technology and strategic global partnerships. Our proprietary EnergyFlow™ platform has revolutionized energy distribution, reducing carbon emissions by 2.5 million tons annually across 200+ deployed networks.
              </p>
             <div className="flex justify-center">
               <button className="bg-[#A02E2E] rounded-md text-white px-6 py-3 font-semibold flex items-center transition-all duration-300 hover:bg-[#b91c1c] hover:-translate-y-0.5">
                Learn More <ArrowRight className="ml-2 h-5 w-5" />
              </button>
             </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-16">
            <div className="text-[#A02E2E] font-medium text-2xl mb-2">Our Services</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Comprehensive Energy Solutions</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              We provide end-to-end energy solutions designed to meet the evolving needs of our clients and the planet.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl p-8 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="w-20 h-20 bg-[#dc2626]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-[#dc2626]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Renewable Energy Solutions</h3>
              <p className="text-gray-500">
                Comprehensive solar, wind, and hybrid energy systems designed for maximum efficiency and sustainability.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="w-20 h-20 bg-[#dc2626]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building className="h-8 w-8 text-[#dc2626]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Sustainability Consulting</h3>
              <p className="text-gray-500">
                Expert guidance on energy transition strategies and sustainable development practices.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="w-20 h-20 bg-[#dc2626]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-[#dc2626]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Smart Grid Technology</h3>
              <p className="text-gray-500">Advanced grid solutions for efficient energy distribution and management.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-lg">Find quick answers to common questions about our community</p>
          </div>

          <div className="xl:max-w-5xl max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx
              return (
                <div
                  key={idx}
                  className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm transition-all duration-300"
                >
                  <button
                    className="w-full  p-5 flex justify-between items-center font-semibold text-gray-800"
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                  >
                    {faq.question}
                    <ChevronDown
                      className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"
                        }`}
                    />
                  </button>

                  {/* Answer section with smooth height animation */}
                  <div
                    className={`grid transition-all duration-500 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                  >
                    <div className="overflow-hidden px-5 p-2 text-gray-600 border-t border-gray-100">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-6xl mx-auto px-5 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Energy Future?</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Join us in creating a sustainable energy ecosystem that powers innovation and drives positive change.
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

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  )
}
