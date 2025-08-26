import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Lenis from 'lenis';

// Components
import Hero from '@/components/Hero';
import Countdown from '@/components/Countdown';
import NepaliLetter from '@/components/NepaliLetter';
import Poem from '@/components/Poem';
import MemoryLane from '@/components/MemoryLane';
import WishWall from '@/components/WishWall';
import MusicToggle from '@/components/MusicToggle';
import Footer from '@/components/Footer';
import FloatingElements from '@/components/FloatingElements';

const Index: React.FC = () => {
  useEffect(() => {
    // Initialize Lenis smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Easter egg: Heart key press
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === '❤' || e.key === 'h') {
        // Trigger heart confetti
        const confetti = require('canvas-confetti');
        const heart = confetti.shapeFromText({ text: '❤️', scalar: 2 });
        
        confetti({
          shapes: [heart],
          particleCount: 30,
          spread: 100,
          startVelocity: 45,
          gravity: 0.8,
          colors: ['#E11D48', '#FCE7F3'],
        });
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    // Cleanup
    return () => {
      lenis.destroy();
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden"
    >
      {/* Floating decorative elements */}
      <FloatingElements />

      {/* Music toggle */}
      <MusicToggle />

      {/* Page sections */}
      <Hero />
      <Countdown />
      <NepaliLetter />
      <Poem />
      <MemoryLane />
      <WishWall />
      <Footer />

      {/* Background grain texture */}
      <div className="fixed inset-0 pointer-events-none grain opacity-30 z-0" />
    </motion.main>
  );
};

export default Index;
