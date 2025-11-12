"use client"
import { useState } from "react"
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
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import Navbar from "./Navbar"

export default function AboutPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      text: "Our team of digital product creators and Tech Bring Skilled will take your idea to the next level and help you with your product",
      name: "Smail yefssah",
      role: "CEO Innova",
      image: "testim1.png",
    },
    {
      text: "Our team of digital product creators and Tech Bring Skilled will take your idea to the next level and help you with your product",
      name: "Djamila Malak",
      role: "Co-Founder RobaKabyle",
      image: "testim2.png",
    },
    {
      text: "Our team of digital product creators and Tech Bring Skilled will take your idea to the next level and help you with your product",
      name: "Djamila Malak",
      role: "Co-Founder RobaKabyle",
      image: "testim3.png",
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="min-h-screen bg-white font-sans">
     <Navbar/>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1a1a2e] via-[#020a0a] to-[#051f2f] text-white min-h-[60vh] pt-24" style={{
        backgroundImage: "url('/hero-bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
        <div className="absolute inset-0 bg-[url('/hero-bg.png')] bg-center bg-cover opacity-10 z-[1]"></div>
        {/* Floating Decorations */}
        {/* <div className="absolute inset-0 z-[1]">
          <div className="absolute w-[200px] h-[200px] top-[10%] left-[10%] rounded-full bg-gradient-to-br from-[#dc2626]/10 to-[#ea580c]/10 animate-[float_6s_ease-in-out_infinite]"></div>
          <div className="absolute w-[150px] h-[150px] top-[20%] right-[15%] rounded-full bg-gradient-to-br from-[#dc2626]/10 to-[#ea580c]/10 animate-[float_8s_ease-in-out_infinite_reverse]"></div>
          <div className="absolute w-[100px] h-[100px] bottom-[30%] left-[20%] rounded-full bg-gradient-to-br from-[#dc2626]/10 to-[#ea580c]/10 animate-[float_7s_ease-in-out_infinite]"></div>
          <div className="absolute w-[120px] h-[120px] bottom-[20%] right-[25%] rounded-full bg-gradient-to-br from-[#dc2626]/10 to-[#ea580c]/10 animate-[float_9s_ease-in-out_infinite_reverse]"></div>
        </div> */}

        <div className="relative z-10 max-w-6xl mx-auto px-5 pt-20 pb-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">Our Story</h1>
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
             We are a dynamic organization at the forefront of the energy revolution, dedicated to creating sustainable solutions for tomorrow's energy challenges.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid lg:grid-cols-2 gap-12  items-center">
            <div>
              <div className="bg-teal-100 rounded-lg overflow-hidden">
                <img
                  src="aboutus.png"
                  alt="Professional working"
                  className="w-[700px] h-[430px] object-cover"
                />
              </div>
            </div>

            <div className="lg:ml-12 ml-0">
              <div className="text-[#dc2626] font-medium mb-2">
                <h1 className="text-3xl md:text-4xl font-bold text-[#A02E2E]  md:text-left text-center mb-6">Our Story</h1>
              </div>
              <p className="text-gray-900 text-lg text-center md:text-left leading-relaxed mb-8">
                Founded in 2019 by a team of energy innovators from Tesla, Google, and NREL, Veridyn Energy has rapidly grown into a global leader in sustainable energy solutions. Starting with a $50M Series A round led by Breakthrough Energy Ventures, we've now raised over $500M in funding and deployed projects across 15 countries.

              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision Goals Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#A02E2E] mb-2">Mission Vision And Goals</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              These principles guide everything we do and shape our approach to energy innovation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl p-8 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="w-16 h-16 bg-[#E6B8B8] rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-6 w-6 text-[#8B4513]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-500">
                Comprehensive solar, wind, and hybrid energy systems designed for maximum efficiency and sustainability.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="w-16 h-16 bg-[#E6B8B8] rounded-full flex items-center justify-center mx-auto mb-6">
                <Building className="h-6 w-6 text-[#8B4513]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-500">
                Expert guidance on energy transition strategies and sustainable development practices.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="w-16 h-16 bg-[#E6B8B8] rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-6 w-6 text-[#8B4513]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Goal</h3>
              <p className="text-gray-500">Advanced grid solutions for efficient energy distribution and management.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#A02E2E] mb-6">Testimonial</h2>
            <p className="text-gray-700 text-xl  max-w-4xl mx-auto">
              You still hesitate about working with Us ? Check what They say about Us
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Testimonial Cards Container */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="grid md:grid-cols-3 gap-4">
                      {/* Show current testimonial and next two */}
                      {[0, 1, 2].map((offset) => {
                        const testimonialIndex = (currentTestimonial + offset) % testimonials.length
                        const testimonialData = testimonials[testimonialIndex]
                        return (
                          <div key={offset} className="bg-transparent rounded p-8  border-r-2 border-gray-200">
                            <p className="text-gray-600 mb-6 leading-relaxed text-sm">{testimonialData.text}</p>
                            <div className="flex items-center">
                              <img
                                src={testimonialData.image || "/placeholder.svg"}
                                alt={testimonialData.name}
                                className="w-12 h-12 rounded-full object-cover mr-4"
                              />
                              <div>
                                <h4 className="font-semibold text-gray-900">{testimonialData.name}</h4>
                                <p className="text-gray-500 text-sm">{testimonialData.role}</p>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-center mt-8 space-x-4">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full border-2 border-[#8B4513] flex items-center justify-center text-[#8B4513] hover:bg-[#8B4513] hover:text-white transition-all duration-300"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full border-2 border-[#8B4513] flex items-center justify-center text-[#8B4513] hover:bg-[#8B4513] hover:text-white transition-all duration-300"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
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

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <button className="bg-[#dc2626] text-white px-6 py-3 font-semibold w-[220px] rounded-md flex items-center justify-center transition-all duration-300 hover:bg-[#b91c1c] hover:-translate-y-0.5">
              Join Us
            </button>
            <button className="bg-transparent text-white border-2 border-white/30 rounded-md px-6 py-3 font-semibold w-[220px] flex items-center justify-center transition-all duration-300 hover:border-[#dc2626] hover:text-[#dc2626]">
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
