import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Courses from "./components/Courses";
import About from "./components/About";
import Contact from "./components/Contact";
import HeroSection from './sections/Herosection';
import FeaturesSection from './sections/FeaturedSection'; 
import CoursesSection from "./sections/CoursesSection";
import CTASection from "./sections/CTASection";
import Footer from "./sections/Footer";
import ScrollProgress from "./components/ScrollProgress";
import TestimonialsSection from './sections/TestimonialSection';


function App() {
  return (
    <div className="bg-gray-900 min-h-screen scroll-smooth">
      <ScrollProgress />
      <Navbar />
       <main className="pt-20">
        <Hero />
        <About />
        <Contact />
        <HeroSection />
        <Courses />
        <FeaturesSection />
        <CoursesSection />
        <TestimonialsSection />
        <CTASection />
        <Footer />
      </main> 
    </div>
  
  );
}


export default App
