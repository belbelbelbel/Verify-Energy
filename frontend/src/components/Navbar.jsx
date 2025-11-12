import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setIsVisible(true)
        } else {
          setIsVisible(true)
        }
        setLastScrollY(window.scrollY)
      }
    }

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar)
      return () => {
        window.removeEventListener("scroll", controlNavbar)
      }
    }
  }, [lastScrollY])

  // Get current path for active bar
  const currentPath = typeof window !== "undefined" ? window.location.pathname : ""

  // Navigation items
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/team" },
    { name: "Projects", href: "/projects" },
    { name: "Contact Us", href: "/contact" },
  ]

  return (
    <>
      <header
        className={`fixed top-6 left-0 right-0 z-50 transition-transform duration-500 ease-in-out ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } bg-black/40  w-[75%] mx-auto rounded-xl backdrop-blur-md`}
      >
        <div className="absolute inset-0 bg-[url('/hero-bg.png')] bg-center bg-cover opacity-10 z-[1]"></div>
        <div className="relative z-[2] max-w-6xl mx-auto px-5 flex items-center justify-between py-2">
          <div className="flex items-center gap-3">
            <img src="logo.svg" alt="Veridyn Energy Logo" className="w-[140px] h-[50px] border-none" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`relative text-gray-200 no-underline font-medium transition-colors duration-300 hover:text-[#dc2626] px-2 py-1 flex flex-col items-center ${
                  currentPath === item.href ? "text-[#dc2626]" : "text-white"
                }`}
              >
                {item.name}
                {/* Active Bar */}
                {currentPath === item.href && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-1 bg-[#dc2626] rounded-full"></span>
                )}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 z-50 relative"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop CTA Button */}
          <button className="hidden md:block bg-white text-[#A02E2E] font-medium border-2 border-white/30 px-4 py-2 text-sm transition-all duration-300 hover:bg-transparent hover:text-white rounded-lg">
            Place Holder
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsMobileMenuMenuOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-gradient-to-br from-[#1a1a2e] via-[#020a0a] to-[#051f2f] shadow-2xl transform transition-transform duration-700 ease-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="absolute inset-0 bg-[url('/hero-bg.png')] bg-center bg-cover opacity-5" />

          <div className="relative z-10 h-full flex flex-col">
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <img src="logo.png" alt="Veridyn Energy" className="w-32 h-12" />
            </div>
            <nav className="flex-1 px-6 py-8">
              <div className="space-y-2">
                {navItems.map((item, index) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`relative block py-4 px-4 font-medium text-lg rounded-xl transition-all duration-300 hover:bg-white/10 hover:text-[#dc2626] hover:translate-x-2 transform ${
                      currentPath === item.href ? "text-[#dc2626]" : "text-white"
                    } ${
                      isMobileMenuOpen
                        ? `animate-[slideInStagger_0.6s_ease-out_${index * 0.1}s_both]`
                        : "opacity-0 translate-x-8"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                    {currentPath === item.href && (
                      <span className="absolute left-4 bottom-2 w-8 h-1 bg-[#dc2626] rounded-full"></span>
                    )}
                  </a>
                ))}
              </div>
            </nav>

            {/* CTA Button */}
            <div className="p-6 border-t border-white/10">
              <button
                className={`w-full bg-[#dc2626] text-white py-4 px-6 rounded-md font-semibold text-lg transition-all duration-300 hover:bg-[#b91c1c] hover:shadow-lg transform ${
                  isMobileMenuOpen ? "animate-[slideInStagger_0.6s_ease-out_0.5s_both]" : "opacity-0 translate-x-8"
                }`}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInStagger {
          from {
            opacity: 0;
            transform: translateX(2rem);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  )
}
