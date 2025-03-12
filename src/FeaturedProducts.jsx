import { motion, useInView, stagger, useAnimate } from "framer-motion";
import { Card, CardHeader, CardContent, CardFooter } from "./components/ui/card";
import { Button } from "./components/ui/button";
import croissant from './assets/croissant.jpeg'
import sourdough from './assets/sourdough.jpeg'
import cinnamon from './assets/cinnamon.jpeg'
import { useEffect, useRef } from "react";

const products = [
  {
    name: "Croissant",
    price: "$3.99",
    description: "Buttery French classic",
    image: croissant
  },
  {
    name: "Sourdough",
    price: "$5.99",
    description: "Traditional artisan bread",
    image: sourdough
  },
  {
    name: "Cinnamon Roll",
    price: "$4.50",
    description: "Freshly baked with love",
    image: cinnamon
  },
];

export function FeaturedProducts() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (isInView) {
      animate(
        ".product-card",
        { opacity: 1, y: 0 },
        { delay: stagger(0.2), duration: 0.8 }
      );
      animate(
        ".price-tag",
        { scale: [0.8, 1.2, 1], opacity: 1 },
        { delay: stagger(0.3), duration: 0.6 }
      );
    }
  }, [isInView]);

  return (
    <section 
      ref={ref}
      className="relative py-28 px-4 bg-amber-50/30 overflow-hidden"
      id="menu"
    >
      {/* Decorative background elements */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        className="absolute -top-48 -right-48 w-96 h-96 bg-amber-100/20 rounded-full blur-3xl"
      />

      <div className="container mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", bounce: 0.4 }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent"
        >
          Our Fresh Bakes
        </motion.h2>

        <div 
          ref={scope}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 80 }}
              className="product-card"
            >
              <Card className="group relative overflow-hidden border-0 bg-white/95 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
                {/* Hover overlay */}
                <motion.div
                  className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity"
                />
                
                <CardHeader className="relative overflow-hidden">
                  <motion.img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-72 object-cover transform group-hover:scale-105 transition-transform duration-500"
                    initial={{ scale: 1.1 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </CardHeader>

                <CardContent className="mt-6 space-y-3">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h3 className="text-2xl font-bold text-gray-900">
                      {product.name}
                    </h3>
                  </motion.div>
                  
                  <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-gray-600 text-lg"
                  >
                    {product.description}
                  </motion.p>
                </CardContent>

                <CardFooter className="flex justify-between items-center pb-6">
                  <motion.span
                    className="price-tag opacity-0 text-2xl font-bold bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent"
                  >
                    {product.price}
                  </motion.span>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      variant="outline"
                      className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white text-lg py-5 px-8"
                    >
                      Add to Cart
                    </Button>
                  </motion.div>
                </CardFooter>

                {/* Floating decoration */}
                <motion.div
                  className="absolute -top-4 -right-4 text-3xl"
                  initial={{ scale: 0, rotate: -45 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : {}}
                  transition={{ type: "spring", delay: index * 0.3 }}
                >
                  {index === 0 && '🥐'}
                  {index === 1 && '🍞'}
                  {index === 2 && '🎉'}
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}