import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Talent from "./components/Talent";
import About from "./components/About";
import Contact from "./components/Contact";
import HeroSection from './sections/Herosection';
import FeaturesSection from './sections/FeaturedSection'; 
import CoursesSection from "./sections/CoursesSection";
import CTASection from "./sections/CTASection";
import Footer from "./sections/Footer";
import ScrollProgress from "./components/ScrollProgress";
import TestimonialsSection from './sections/TestimonialSection';
import NewsLetter from "./sections/NewsLetter";


function App() {
  return (
    <div className="bg-gray-900 min-h-screen scroll-smooth">
      <ScrollProgress />
      <Navbar />
       <main className="pt-20">
        <Hero />
        <Talent />
        <CoursesSection />
        <FeaturesSection />
        <About />
        <Contact />
        <HeroSection />
        <TestimonialsSection />
        <CTASection />
        <NewsLetter />
        <Footer />
      </main> 
    </div>
  
  );
}


export default App
