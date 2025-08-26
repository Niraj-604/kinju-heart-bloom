import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useConfetti } from '@/hooks/useConfetti';

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null);
  const [isBirthdayToday, setIsBirthdayToday] = useState(false);
  const { fireworksBurst, fireHearts } = useConfetti();

  useEffect(() => {
    const targetDate = new Date();
    // For demo purposes, let's assume birthday is today
    // In real implementation, you'd set the actual birthday date
    const now = new Date();
    const birthday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    
    // Check if today is birthday
    if (now.toDateString() === birthday.toDateString()) {
      setIsBirthdayToday(true);
      return;
    }

    const calculateTimeLeft = () => {
      const difference = birthday.getTime() - now.getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, []);

  const handleCelebrate = () => {
    fireworksBurst();
    setTimeout(() => fireHearts(), 500);
  };

  if (isBirthdayToday) {
    return (
      <section id="countdown" className="py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-12 shadow-romantic"
          >
            <motion.h2
              className="font-display text-5xl md:text-7xl font-bold text-gradient mb-8"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              It's Your Day! 🎉
            </motion.h2>
            
            <motion.p
              className="text-xl text-midnight/80 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Today is the perfect day to celebrate you and all the joy you bring into this world!
            </motion.p>

            <Button
              onClick={handleCelebrate}
              className="bg-gradient-romantic text-soft-white hover:scale-110 transition-all duration-300 px-12 py-6 text-xl font-medium rounded-2xl shadow-glow animate-pulse"
            >
              Shower Love! 💖
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  if (!timeLeft) return null;

  return (
    <section id="countdown" className="py-20 px-6 text-center">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-6xl font-bold text-gradient mb-12"
        >
          Countdown to Your Special Day
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {Object.entries(timeLeft).map(([unit, value], index) => (
            <motion.div
              key={unit}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-6 shadow-dreamy"
            >
              <motion.div
                className="text-4xl md:text-6xl font-bold text-rose font-display"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
              >
                {value.toString().padStart(2, '0')}
              </motion.div>
              <div className="text-lg text-midnight/60 capitalize font-medium mt-2">
                {unit}
              </div>
            </motion.div>
          ))}
        </div>

        <Button
          onClick={handleCelebrate}
          className="bg-gradient-sunset text-soft-white hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-medium rounded-2xl shadow-romantic"
        >
          Can't Wait to Celebrate! 🎊
        </Button>
      </div>
    </section>
  );
};

export default Countdown;