import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useTypewriter } from '@/hooks/useTypewriter';
import { useConfetti } from '@/hooks/useConfetti';
import heroBackground from '@/assets/hero-bg.jpg';

const Hero: React.FC = () => {
  const [showTypewriter, setShowTypewriter] = useState(false);
  const { displayText } = useTypewriter(
    "You make ordinary moments feel like miracles.",
    70
  );
  const { fireHearts, fireConfetti } = useConfetti();

  useEffect(() => {
    const timer = setTimeout(() => setShowTypewriter(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handlePlaySurprise = () => {
    fireHearts();
    fireConfetti();
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-rose/20 via-transparent to-champagne/30" />
      <div className="absolute inset-0 grain" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-display text-6xl md:text-8xl font-bold text-gradient mb-8"
        >
          Happy Birthday, Kinju ✨
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showTypewriter ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-2xl md:text-3xl text-midnight/80 font-light leading-relaxed">
            {displayText}
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="inline-block ml-1"
            >
              |
            </motion.span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Button
            onClick={handlePlaySurprise}
            variant="hero"
            className="px-8 py-4 text-lg font-medium rounded-2xl"
          >
            Play Surprise 🎉
          </Button>
          <Button
            onClick={() => scrollToSection('poem')}
            variant="outline"
            className="glass border-rose/30 text-rose hover:bg-rose/10 hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-medium rounded-2xl"
          >
            Open Poem 💌
          </Button>
          <Button
            onClick={() => scrollToSection('memories')}
            variant="outline"
            className="glass border-champagne/50 text-midnight hover:bg-champagne/20 hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-medium rounded-2xl"
          >
            Memory Lane 🌸
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-rose/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-rose/50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;