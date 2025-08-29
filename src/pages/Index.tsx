
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Lenis from 'lenis';
import Hero from '@/components/Hero';
import NepaliLetter from '@/components/NepaliLetter';
import TypingAnimation from '@/components/TypingAnimation';
import Poem from '@/components/Poem';
import MemoryLane from '@/components/MemoryLane';
import Gallery from '@/components/Gallery';
import MusicToggle from '@/components/MusicToggle';
import FloatingElements from '@/components/FloatingElements';
import FloatingILoveYou from '@/components/FloatingILoveYou';
import EndingSurprise from '@/components/EndingSurprise';

const Index = () => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element && lenisRef.current) {
      lenisRef.current.scrollTo(element, { offset: -80 });
    }
  };

  return (
    <motion.div 
      className="relative bg-background text-foreground overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Global floating elements */}
      <FloatingElements />
      <FloatingILoveYou />
      
      {/* Music Toggle - Fixed position */}
      <MusicToggle />

      {/* Hero Section */}
      <Hero onNavigate={scrollToSection} />

      {/* Typing Animation Section */}
      <section id="typing" className="py-20">
        <TypingAnimation />
      </section>

      {/* Nepali Letter Section */}
      <section id="letter" className="py-20">
        <NepaliLetter />
      </section>

      {/* Memory Lane Section */}
      <section id="memories" className="py-20">
        <MemoryLane />
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20">
        <Gallery />
      </section>

      {/* Ending Surprise Section */}
      <EndingSurprise />
    </motion.div>
  );
};

export default Index;
