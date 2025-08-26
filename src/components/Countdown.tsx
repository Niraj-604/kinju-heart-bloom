import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useConfetti } from '@/hooks/useConfetti';

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isBirthdayToday, setIsBirthdayToday] = useState(false);
  const { celebrate, heartBurst } = useConfetti();

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const currentYear = now.getFullYear();
      
      // Set birthday - you can adjust the month and day here
      let birthday = new Date(currentYear, 11, 25); // December 25th (month is 0-indexed)
      
      // If birthday has passed this year, set it for next year
      if (now > birthday) {
        birthday = new Date(currentYear + 1, 11, 25);
      }

      const difference = birthday.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
        setIsBirthdayToday(false);
      } else {
        // Check if it's the birthday today
        const today = new Date();
        const birthdayToday = new Date(today.getFullYear(), 11, 25);
        
        if (
          today.getDate() === birthdayToday.getDate() &&
          today.getMonth() === birthdayToday.getMonth()
        ) {
          setIsBirthdayToday(true);
        }
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  if (isBirthdayToday) {
    return (
      <section className="py-20 bg-gradient-to-b from-blush to-background">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 260, 
              damping: 20,
              duration: 1.5 
            }}
          >
            <h2 className="font-display text-6xl md:text-8xl font-bold text-gradient mb-8">
              It's Your Day! 🎉
            </h2>
            
            <motion.p 
              className="text-xl md:text-2xl text-foreground/80 mb-12 font-body"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Today is the perfect day to celebrate the amazing person you are!
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => {
                  celebrate({
                    particleCount: 200,
                    spread: 100,
                    origin: { y: 0.5 },
                    colors: ['#E11D48', '#FCE7F3', '#F5E6C8']
                  });
                }}
              >
                🎆 Celebrate!
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={heartBurst}
                className="border-rose text-rose hover:bg-rose hover:text-white"
              >
                💖 Shower Love
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-b from-blush to-background">
      <div className="container mx-auto px-6 text-center">
        <motion.h2 
          className="font-display text-4xl md:text-6xl font-bold text-gradient mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Counting Down to Your Special Day
        </motion.h2>
        
        <motion.p 
          className="text-lg text-foreground/70 mb-16 font-body"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Every second brings us closer to celebrating you
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
          {timeUnits.map((unit, index) => (
            <motion.div
              key={unit.label}
              className="glass rounded-2xl p-6 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={unit.value}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-4xl md:text-5xl font-bold text-rose font-display"
                >
                  {unit.value.toString().padStart(2, '0')}
                </motion.div>
              </AnimatePresence>
              <div className="text-sm text-foreground/70 mt-2 font-body uppercase tracking-wider">
                {unit.label}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <Button 
            variant="outline" 
            size="lg"
            onClick={heartBurst}
            className="border-rose text-rose hover:bg-rose hover:text-white"
          >
            💝 Send Early Wishes
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Countdown;