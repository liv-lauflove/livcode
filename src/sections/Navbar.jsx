import { motion } from "framer-motion"
import { useState } from "react"

function Navigation() {
  return (
    <ul className="flex flex-col items-center gap-6 sm:flex-row md:gap-10 font-medium">
      {[
        { label: "About", href: "#about" },
        { label: "Products", href: "#product" },
        { label: "Pricing", href: "#pricing" },
        { label: "Contact", href: "#contact" },
      ].map((item, index) => (
        <li key={index} className="relative group">
          <a
            href={item.href}
            className="text-neutral-400 hover:text-white transition duration-300"
          >
            {item.label}
          </a>

          {/* 🔵 Animated underline */}
          <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>

          {/* ✨ Dot indicator */}
          <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition"></span>
        </li>
      ))}
    </ul>
  )
}

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      className="fixed inset-x-0 top-4 z-50 flex justify-center px-4"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full max-w-6xl rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 shadow-[0_0_30px_rgba(0,150,255,0.15)]">
        
        <div className="flex items-center justify-between px-6 py-3">
          
          {/* Logo */}
          <a href="/" className="opacity-70 hover:opacity-100 transition">
            <img src="logo.png" alt="Logo" className="h-8" />
          </a>

          {/* Desktop Menu */}
          <div className="hidden sm:flex">
            <Navigation />
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="sm:hidden text-white"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            className="sm:hidden px-6 pb-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Navigation />
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}