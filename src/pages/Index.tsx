import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative bg-background text-foreground overflow-x-hidden">
      <Hero onNavigate={scrollToSection} />
      
      <div className="min-h-screen flex items-center justify-center p-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">More sections coming...</h2>
          <p className="text-xl text-muted-foreground">Beautiful birthday site for Kinju!</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
