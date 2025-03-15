import { motion, useInView } from 'framer-motion'
import { Button } from './components/ui/button'
import { Card, CardHeader, CardContent, CardFooter } from './components/ui/card'
import { Link } from 'react-router-dom'
import React, { useRef } from 'react'
import blog1 from './assets/blog1.jpeg'
import blog2 from './assets/blog2.jpeg'
import blog3 from './assets/blog3.jpeg'

const posts = [
  {
    title: 'The Art of Sourdough',
    excerpt: 'Discover the secrets behind our 100-year-old sourdough starter',
    date: 'March 15, 2024',
    image: blog1,
    readTime: '5 min read'
  },
  {
    title: 'Perfecting the Croissant',
    excerpt: 'A behind-the-scenes look at our laminating process',
    date: 'March 10, 2024',
    image: blog2,
    readTime: '4 min read'
  },
  {
    title: 'Organic Ingredients Matter',
    excerpt: 'Why we source locally grown organic wheat',
    date: 'March 5, 2024',
    image: blog3,
    readTime: '6 min read'
  },
]

export const BlogPosts = React.memo(() => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "0px" })

  return (
    <section 
      ref={ref}
      className="relative py-24 px-4 bg-gradient-to-b from-amber-50 to-white" 
      id="blog"
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-700 to-amber-500 bg-clip-text text-transparent text-center md:text-left"
          >
            Latest from Our Blog
          </motion.h2>
          
          <Button 
            variant="outline" 
            className="border-amber-600 text-amber-600 hover:bg-amber-50 text-base md:text-lg py-4 px-6 shadow-sm transition-transform hover:scale-[1.02]"
            asChild
          >
            <Link to="/blog">
              View All Posts
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="group relative overflow-hidden border border-amber-100 bg-white hover:shadow-lg transition-shadow h-full">
                <CardHeader className="relative overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      loading="lazy"
                      className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    <div className="absolute top-4 left-4 bg-white/90 px-3 py-1.5 rounded-full text-sm shadow-sm">
                      {post.date}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-6 space-y-4">
                  <div className="flex justify-between items-center text-sm text-amber-700">
                    <span>{post.readTime}</span>
                    <div className="w-8 h-px bg-amber-200" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900">
                    {post.title}
                  </h3>

                  <p className="text-gray-600">
                    {post.excerpt}
                  </p>
                </CardContent>

                <CardFooter className="p-6 pt-0">
                  <Button 
                    variant="link" 
                    className="text-amber-600 p-0 group hover:no-underline"
                  >
                    Read More
                    <span className="ml-2 transition-all group-hover:ml-3">
                      →
                    </span>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
})