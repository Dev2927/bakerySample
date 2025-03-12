import { motion, useInView, stagger, useAnimate } from 'framer-motion'
import { Card, CardContent, CardHeader } from './components/ui/card'
import { useEffect, useRef } from 'react'
import customer1 from './assets/customer1.jpeg'
import customer3 from './assets/customer3.jpeg'
import customer2 from './assets/customer2.jpeg'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Food Blogger',
    text: 'The best croissants in town! Perfect flakiness and buttery flavor that keeps me coming back.',
    image: customer1
  },
  {
    name: 'Mike Chen',
    role: 'Regular Customer',
    text: 'Fresh bread every morning. Their sourdough has become our family staple!',
    image: customer2
  },
  {
    name: 'Emma Wilson',
    role: 'Pastry Chef',
    text: 'Artisan quality that rivals Parisian bakeries. A true gem in our community!',
    image: customer3
  },
]

export function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [scope, animate] = useAnimate()

  useEffect(() => {
    if (isInView) {
      animate(".testimonial-card", 
        { opacity: 1, y: 0 },
        { delay: stagger(0.2), duration: 0.8 }
      )
      animate(".customer-image",
        { rotate: [20, -10, 0], scale: [0.8, 1.2, 1] },
        { delay: stagger(0.3), duration: 0.6 }
      )
    }
  }, [isInView])

  return (
    <section 
      ref={ref}
      className="relative py-28 px-4 bg-gradient-to-b from-amber-50/80 to-white overflow-hidden" 
      id="testimonials"
    >
      {/* Decorative background elements */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        className="absolute -top-48 left-1/3 w-96 h-96 bg-amber-100/20 rounded-full blur-3xl"
      />

      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", bounce: 0.4 }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent"
        >
          What Our Customers Say
        </motion.h2>

        <div 
          ref={scope}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="testimonial-card opacity-0"
              initial={{ y: 80 }}
            >
              <Card className="group relative overflow-hidden border-0 bg-white/95 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 h-full">
                {/* Hover effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-amber-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                />

                <CardContent className="p-8 relative">
                  {/* Quote icon */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    className="absolute -top-6 -right-6 text-6xl text-amber-100/80 z-0"
                  >
                    ”
                  </motion.div>

                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.4 }}
                    className="text-lg text-gray-700 italic mb-6 relative z-10"
                  >
                    "{testimonial.text}"
                  </motion.p>

                  <motion.div 
                    className="flex items-center gap-6"
                    initial={{ x: -20 }}
                    animate={isInView ? { x: 0 } : {}}
                    transition={{ delay: 0.6 }}
                  >
                    <motion.div
                      className="relative customer-image"
                      whileHover={{ scale: 1.1 }}
                    >
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover border-4 border-amber-100 shadow-lg"
                      />
                      <div className="absolute inset-0 rounded-full border-2 border-amber-200/50 animate-ping-once" />
                    </motion.div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-amber-600 font-medium">
                        {testimonial.role}
                      </p>
                    </div>
                  </motion.div>
                </CardContent>

                {/* Decorative corner */}
                <motion.div
                  className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-amber-100"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.8 }}
                />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}