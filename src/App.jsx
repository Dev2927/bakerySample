import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { FeaturedProducts } from "./FeaturedProducts";
import { Footer } from "./Footer";
import { Testimonials } from "./Testimonials";
import { BlogPosts } from "./BlogPosts";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <FeaturedProducts />
        <Testimonials />
        <BlogPosts />
      </main>
      <Footer />
    </div>
  );
}

export default App;