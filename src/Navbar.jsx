import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from './components/ui/button'
import { Menu, X } from 'lucide-react'
import React, { useState } from 'react'

export const Navbar = React.memo(() => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const links = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '#menu' },
    { name: 'Blog', path: '#blog' },
    { name: 'About', path: '#about' },
    { name: 'Contact', path: '#contact' },
  ]

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4 }}
      className="fixed w-full bg-white/95 backdrop-blur-md z-50 border-b border-amber-100 shadow-sm"
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/">
          <div className="flex items-center gap-2 transition-transform hover:scale-[1.02] active:scale-95">
            <span className="text-2xl font-bold bg-gradient-to-r from-amber-700 to-amber-500 bg-clip-text text-transparent">
              BakeHouse
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4">
          <ul className="flex items-center gap-2">
            {links.map((link) => (
              <li key={link.name} className="relative">
                <Button
                  asChild
                  variant="ghost"
                  className={`px-3 text-base font-medium group transition-colors ${
                    location.pathname === link.path 
                      ? 'text-amber-600 bg-amber-50' 
                      : 'text-gray-600 hover:bg-amber-50/50'
                  }`}
                >
                  <Link to={link.path}>
                    {link.name}
                    {location.pathname === link.path && (
                      <span className="absolute left-1/2 -bottom-2 w-4/5 h-0.5 bg-amber-500 -translate-x-1/2" />
                    )}
                  </Link>
                </Button>
              </li>
            ))}
          </ul>

          <Button 
            className="bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-600 hover:to-amber-500 text-white shadow-md hover:shadow transition-all"
            size="lg"
          >
            Order Now
          </Button>
        </div>

        {/* Mobile Toggle */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-amber-600 hover:bg-amber-50/50"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white/95 backdrop-blur-lg border-b"
          >
            <ul className="px-4 py-3 space-y-2">
              {links.map((link) => (
                <li key={link.name}>
                  <Button
                    asChild
                    variant="ghost"
                    className={`w-full justify-start text-base px-4 ${
                      location.pathname === link.path
                        ? 'bg-amber-50 text-amber-600'
                        : 'text-gray-600 hover:bg-amber-50/50'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <Link to={link.path}>
                      {link.name}
                    </Link>
                  </Button>
                </li>
              ))}
              <li>
                <Button
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-400 text-white"
                  size="lg"
                >
                  Order Now
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
})