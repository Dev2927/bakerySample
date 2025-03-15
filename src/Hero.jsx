import { motion, useInView } from "framer-motion";
import { Button } from "./components/ui/button";
import heroImage from './assets/heroImage.jpeg';
import React, { useRef } from "react";

export const Hero = React.memo(() => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const floatingVariants = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section 
      ref={ref}
      className="relative pt-32 pb-40 px-4 bg-gradient-to-b from-amber-50/95 to-white overflow-hidden"
    >
      {/* Decorative background elements */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        className="absolute -top-32 -left-32 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl"
      />
      
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, type: "spring" }}
          className="md:w-1/2 text-center md:text-left relative z-10"
        >
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : {}}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.3
                }
              }
            }}
          >
            <motion.h1 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent">
                Fresh Baked
              </span><br />
              Happiness Every Morning
            </motion.h1>
            
            <motion.p 
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 }
              }}
              className="text-xl text-gray-600 mb-10 max-w-xl mx-auto md:mx-0"
            >
              Artisan breads and pastries crafted with passion using century-old recipes
            </motion.p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 px-10 py-7 text-xl shadow-lg hover:shadow-amber-200/50 transition-all"
              size="lg"
            >
              Explore Menu
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50, rotate: -3 }}
          animate={isInView ? { opacity: 1, x: 0, rotate: 0 } : {}}
          transition={{ duration: 0.8, type: "spring" }}
          className="md:w-1/2 mt-12 md:mt-0 relative"
        >
          <motion.div
            variants={floatingVariants}
            animate="float"
            className="relative overflow-hidden rounded-2xl shadow-2xl"
          >
            <img 
              src={heroImage}
              alt="Fresh bread"
              className="w-full h-[500px] object-cover transform hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </motion.div>

          {/* Decorative floating elements */}
          <motion.div
            initial={{ y: 0 }}
            animate={{
              y: [-20, 20, -20],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -bottom-8 -left-8 bg-white p-4 rounded-full shadow-lg"
          >
            🥐
          </motion.div>

          <motion.div
            initial={{ y: 0 }}
            animate={{
              y: [20, -20, 20],
              rotate: [0, -5, 5, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute -top-8 -right-8 bg-white p-4 rounded-full shadow-lg"
          >
            🍞
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
})