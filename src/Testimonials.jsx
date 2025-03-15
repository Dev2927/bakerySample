import { motion, useInView } from 'framer-motion'
import { Card, CardContent } from './components/ui/card'
import React, { useRef } from 'react'
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

export const Testimonials = React.memo(() => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "0px" })

  return (
    <section 
      ref={ref}
      className="relative py-24 px-4 bg-gradient-to-b from-amber-50 to-white" 
      id="testimonials"
    >
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-amber-700 to-amber-500 bg-clip-text text-transparent"
        >
          What Our Customers Say
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="group relative overflow-hidden border border-amber-100 bg-white hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-6">
                  <div className="absolute top-4 right-4 text-4xl text-amber-200">
                    ”
                  </div>

                  <p className="text-gray-700 text-lg mb-6 relative z-10 min-h-[120px]">
                    "{testimonial.text}"
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        loading="lazy"
                        className="w-14 h-14 rounded-full object-cover border-2 border-amber-100 shadow-sm"
                      />
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-amber-700 font-medium">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
})