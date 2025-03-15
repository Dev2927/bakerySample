import { motion, useInView } from "framer-motion";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "./components/ui/card";
import { Button } from "./components/ui/button";
import croissant from "./assets/croissant.jpeg";
import sourdough from "./assets/sourdough.jpeg";
import cinnamon from "./assets/cinnamon.jpeg";
import React, { useRef } from "react";

const products = [
  {
    name: "Croissant",
    price: "$3.99",
    description: "Buttery French classic",
    image: croissant,
    icon: "🥐"
  },
  {
    name: "Sourdough",
    price: "$5.99",
    description: "Traditional artisan bread",
    image: sourdough,
    icon: "🍞"
  },
  {
    name: "Cinnamon Roll",
    price: "$4.50",
    description: "Freshly baked with love",
    image: cinnamon,
    icon: "🎉"
  },
];

export const FeaturedProducts = React.memo(() => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });

  return (
    <section
      ref={ref}
      className="relative py-24 px-4 bg-gradient-to-b from-amber-50 to-white"
      id="menu"
    >
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 bg-gradient-to-r from-amber-700 to-amber-500 bg-clip-text text-transparent"
        >
          Our Fresh Bakes
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.5 }}
              className="transform-gpu"
            >
              <Card className="group relative overflow-hidden border border-amber-100 bg-white hover:shadow-lg transition-shadow">
                <CardHeader className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="w-full h-64 md:h-72 object-cover transform group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className="absolute top-4 right-4 bg-amber-100/90 backdrop-blur-sm px-3 py-2 rounded-full text-xl shadow-sm">
                    {product.icon}
                  </div>
                </CardHeader>

                <CardContent className="mt-5 space-y-2">
                  <h3 className="text-xl font-bold text-gray-900">
                    {product.name}
                  </h3>
                  <p className="text-gray-600">
                    {product.description}
                  </p>
                </CardContent>

                <CardFooter className="flex justify-between items-center pb-4">
                  <span className="text-xl font-bold text-amber-700">
                    {product.price}
                  </span>
                  <Button
                    variant="outline"
                    className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white py-4 px-6"
                  >
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
})