import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence, stagger, useAnimate } from 'framer-motion'
import { Button } from './components/ui/button'
import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const [scope, animate] = useAnimate()

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '#menu' },
    { name: 'Blog', path: '#blog' },
    { name: 'About', path: '#about' },
    { name: 'Contact', path: '#contact' },
  ]

  const handleNavigation = () => setIsOpen(false)

  useEffect(() => {
    if(isOpen){
      animate(
        "li",
        isOpen 
          ? { opacity: 1, x: 0 }
          : { opacity: 0, x: -25 },
        { duration: 0.2, delay: isOpen ? stagger(0.1) : 0 }
      )
    }
  }, [isOpen])

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 120 }}
      className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-amber-50 shadow-lg"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" onClick={handleNavigation}>
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2"
          >
            <span className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent">
              BakeHouse
            </span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4">
          <ul className="flex items-center gap-4">
            {links.map((link) => (
              <li key={link.name} className="relative">
                <Button
                  asChild
                  variant="ghost"
                  className={`px-4 text-lg font-medium group ${
                    location.pathname === link.path 
                      ? 'text-amber-600' 
                      : 'text-gray-700 hover:text-amber-500'
                  }`}
                >
                  <Link to={link.path}>
                    {link.name}
                    {location.pathname === link.path && (
                      <motion.span 
                        layoutId="activeLink"
                        className="absolute left-0 bottom-0 w-full h-0.5 bg-amber-500"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </Link>
                </Button>
              </li>
            ))}
          </ul>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-600 hover:to-amber-500 text-white shadow-lg hover:shadow-amber-200 transition-shadow">
              Order Now
            </Button>
          </motion.div>
        </div>

        {/* Mobile Toggle */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="md:hidden"
        >
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="text-amber-600"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="md:hidden bg-white/95 backdrop-blur-lg border-b"
            ref={scope}
          >
            <ul className="px-4 py-4 space-y-3">
              {links.map((link) => (
                <li key={link.name}>
                  <Button
                    asChild
                    variant="ghost"
                    className={`w-full justify-start text-lg px-4 ${
                      location.pathname === link.path
                        ? 'bg-amber-50 text-amber-600'
                        : 'text-gray-700 hover:bg-amber-50'
                    }`}
                    onClick={handleNavigation}
                  >
                    <Link to={link.path}>
                      {link.name}
                    </Link>
                  </Button>
                </li>
              ))}
              <li>
                <Button
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-400 text-white mt-2"
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
}