import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Lenis from 'lenis';
import Hero from '@/components/Hero';
import Countdown from '@/components/Countdown';
import NepaliLetter from '@/components/NepaliLetter';
import Poem from '@/components/Poem';
import MemoryLane from '@/components/MemoryLane';
import WishWall from '@/components/WishWall';
import MusicToggle from '@/components/MusicToggle';
import Footer from '@/components/Footer';
import FloatingElements from '@/components/FloatingElements';

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
      
      {/* Music Toggle - Fixed position */}
      <MusicToggle />

      {/* Hero Section */}
      <Hero onNavigate={scrollToSection} />

      {/* Countdown Section */}
      <section id="countdown" className="py-20">
        <Countdown />
      </section>

      {/* Nepali Letter Section */}
      <section id="letter" className="py-20">
        <NepaliLetter />
      </section>

      {/* Poem Section */}
      <section id="poem" className="py-20">
        <Poem />
      </section>

      {/* Memory Lane Section */}
      <section id="memories" className="py-20">
        <MemoryLane />
      </section>

      {/* Wish Wall Section */}
      <section id="wishes" className="py-20">
        <WishWall />
      </section>

      {/* Footer */}
      <Footer />
    </motion.div>
  );
};

export default Index;
