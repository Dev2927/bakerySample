import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import instagram from './assets/instagram.jpg'
import twitter from './assets/twitter.png'
import facebook from './assets/facebook.png'

export const Footer = React.memo(() => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });

  return (
    <footer 
      ref={ref}
      className="relative bg-gray-900 text-white py-16 md:py-20 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12"
        >
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent">
              BakeHouse
            </h3>
            <p className="text-gray-400">
              Bringing warmth to your mornings since 2010
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-500">Quick Links</h4>
            <ul className="space-y-3">
              {['Menu', 'About Us', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-amber-500 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-500">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li>123 Bakery Street</li>
              <li>hello@bakehouse.com</li>
              <li>(555) 123-4567</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-500">Follow Us</h4>
            <div className="flex gap-4">
              {[instagram, twitter, facebook].map((icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="bg-white/10 p-2 rounded-lg hover:bg-amber-600 transition-all"
                >
                  <img 
                    src={icon} 
                    className="w-6 h-6"
                    alt={`Social media icon ${index + 1}`}
                    loading="lazy"
                  />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Divider and Copyright */}
        <div className="border-t border-white/10 mt-12 pt-6 text-center">
          <p className="text-gray-400 text-sm md:text-base">
            © 2024 BakeHouse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
})