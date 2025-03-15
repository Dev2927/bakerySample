import { motion, useInView, stagger } from "framer-motion";
import React, { useEffect, useRef } from "react";
import instagram from './assets/instagram.jpg'
import twitter from './assets/twitter.png'
import facebook from './assets/facebook.png'

export const Footer = React.memo(() => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <footer 
      ref={ref} // Attach the ref to the parent container
      className="relative bg-gray-900 text-white py-20 overflow-hidden"
    >
      {/* Decorative background elements */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        className="absolute -bottom-32 -right-32 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl transform-gpu"
      />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="footer-item transform-gpu"
          >
            <motion.h3
              whileHover={{ scale: 1.05 }}
              className="text-3xl font-bold bg-gradient-to-r from-amber-500 to-amber-400 bg-clip-text text-transparent mb-6"
            >
              BakeHouse
            </motion.h3>
            <p className="text-gray-400 text-lg">
              Bringing warmth to your mornings since 2010
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="footer-item transform-gpu"
          >
            <h4 className="text-xl font-semibold mb-6 text-amber-500">Quick Links</h4>
            <ul className="space-y-4">
              {['Menu', 'About Us', 'Contact'].map((link, index) => (
                <motion.li
                  key={link}
                  whileHover={{ x: 5 }}
                  transition={{ type: "tween", stiffness: 300 }}
                  className="text-gray-400 hover:text-amber-500 text-lg"
                >
                  <a href="#">{link}</a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="footer-item transform-gpu"
          >
            <h4 className="text-xl font-semibold mb-6 text-amber-500">Contact</h4>
            <ul className="space-y-4 text-gray-400 text-lg">
              <li>123 Bakery Street</li>
              <li>hello@bakehouse.com</li>
              <li>(555) 123-4567</li>
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="footer-item transform-gpu"
          >
            <h4 className="text-xl font-semibold mb-6 text-amber-500">Follow Us</h4>
            <div className="flex gap-6">
                <motion.a
                  href="#"
                  className="social-icon bg-white/10 p-3 rounded-lg hover:bg-amber-500 transition-colors"
                  whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                  whileTap={{ scale: 0.9 }}
                >
                  <img 
                    src={instagram} 
                    className="w-6 h-6"
                  />
                </motion.a>
                <motion.a
                  href="#"
                  className="social-icon bg-white/10 p-3 rounded-lg hover:bg-amber-500 transition-colors"
                  whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                  whileTap={{ scale: 0.9 }}
                >
                  <img 
                    src={twitter} 
                    className="w-6 h-6"
                  />
                </motion.a>
                <motion.a
                  href="#"
                  className="social-icon bg-white/10 p-3 rounded-lg hover:bg-amber-500 transition-colors"
                  whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                  whileTap={{ scale: 0.9 }}
                >
                  <img 
                    src={facebook} 
                    className="w-6 h-6"
                  />
                </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Divider and Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="border-t border-white/10 mt-16 pt-8 text-center transform-gpu"
        >
          <p className="text-gray-400 text-lg">
            © 2024 BakeHouse. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
})