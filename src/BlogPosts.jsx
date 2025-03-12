import { motion, useInView, stagger, useAnimate } from 'framer-motion'
import { Button } from './components/ui/button'
import { Card, CardHeader, CardContent, CardFooter } from './components/ui/card'
import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
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

export function BlogPosts() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [scope, animate] = useAnimate()

  useEffect(() => {
    if (isInView) {
      const blogCards = scope.current.querySelectorAll('.blog-card');
      const blogImages = scope.current.querySelectorAll('.blog-image');
  
      if (blogCards.length > 0) {
        animate(blogCards, 
          { opacity: 1, y: 0 },
          { delay: stagger(0.2), duration: 0.8 }
        );
      }
  
      if (blogImages.length > 0) {
        animate(blogImages,
          { scale: [0.9, 1.05, 1] },
          { delay: stagger(0.3), duration: 0.6 }
        );
      }
    }
  }, [isInView]);

  return (
    <section 
      ref={ref}
      className="relative py-28 px-4 bg-gradient-to-b from-amber-50/80 to-white overflow-hidden" 
      id="blog"
    >
      {/* Decorative background elements */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        className="absolute -top-48 right-1/3 w-96 h-96 bg-amber-100/20 rounded-full blur-3xl"
      />

      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent"
          >
            Latest from Our Blog
          </motion.h2>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              variant="outline" 
              className="border-amber-600 text-amber-600 hover:bg-amber-50 text-lg py-5 px-8 shadow-sm hover:shadow-amber-200/50"
              asChild
            >
              <Link to="/blog">
                View All Posts
              </Link>
            </Button>
          </motion.div>
        </div>

        <div 
          ref={scope}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {posts.map((post, index) => (
            <motion.div
              key={post.title}
              className="blog-card opacity-0"
              initial={{ y: 80 }}
            >
              <Card className="group relative overflow-hidden border-0 bg-white/95 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 h-full">
                {/* Hover overlay */}
                <motion.div
                  className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity"
                />

                <CardHeader className="relative overflow-hidden">
                  <motion.div
                    initial={{ scale: 1.1 }}
                    whileInView={{ scale: 1 }}
                    className="relative overflow-hidden"
                  >
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  </motion.div>
                  
                  {/* Date floating badge */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : {}}
                    transition={{ delay: 0.4 }}
                    className="absolute top-4 left-4 bg-white/90 px-4 py-2 rounded-full text-sm shadow-sm"
                  >
                    {post.date}
                  </motion.div>
                </CardHeader>

                <CardContent className="p-8 space-y-4">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 }}
                    className="flex justify-between items-center text-sm text-gray-500"
                  >
                    <span>{post.readTime}</span>
                    <div className="w-8 h-px bg-amber-200" />
                  </motion.div>

                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 }}
                    className="text-2xl font-bold text-gray-900"
                  >
                    {post.title}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.6 }}
                    className="text-gray-600 text-lg"
                  >
                    {post.excerpt}
                  </motion.p>
                </CardContent>

                <CardFooter className="p-8 pt-0">
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="inline-block"
                  >
                    <Button 
                      variant="link" 
                      className="text-amber-600 p-0 text-lg group"
                    >
                      Read More
                      <span className="ml-2 group-hover:ml-3 transition-all">
                        →
                      </span>
                    </Button>
                  </motion.div>
                </CardFooter>

                {/* Decorative corner */}
                <motion.div
                  className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-amber-100"
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