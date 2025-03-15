import { motion, useInView } from "framer-motion";
import { Button } from "./components/ui/button";
import heroImage from './assets/heroImage.jpeg';
import React, { useRef } from "react";

export const Hero = React.memo(() => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });

  return (
    <section 
      ref={ref}
      className="relative pt-28 pb-32 px-4 bg-gradient-to-b from-amber-50 to-white"
    >
      {/* Subtle background element */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2ZmY2E1MCI+PC9yZWN0Pjwvc3ZnPg==')]" />

      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2 text-center md:text-left relative z-10"
        >
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-amber-700 to-amber-500 bg-clip-text text-transparent">
              Fresh Baked
            </span><br />
            <span className="text-gray-800">Happiness Every Morning</span>
          </h1>
          
          <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto md:mx-0">
            Artisan breads and pastries crafted with passion using century-old recipes
          </p>

          <Button 
            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 px-8 py-6 text-lg shadow-md hover:shadow-lg transition-shadow"
            size="lg"
          >
            Explore Menu
          </Button>
        </motion.div>

        {/* Image Content */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="md:w-1/2 mt-10 md:mt-0 relative"
        >
          <div className="relative overflow-hidden rounded-2xl shadow-xl group">
            <img 
              src={heroImage}
              alt="Fresh bread"
              loading="eager"
              className="w-full h-[500px] object-cover transform group-hover:scale-103 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>

          {/* Decorative elements */}
          <div className="absolute -bottom-4 -left-4 bg-amber-100 p-3 rounded-full shadow-md text-amber-700 text-xl">
            🥐
          </div>
          <div className="absolute -top-4 -right-4 bg-amber-100 p-3 rounded-full shadow-md text-amber-700 text-xl">
            🍞
          </div>
        </motion.div>
      </div>
    </section>
  );
})