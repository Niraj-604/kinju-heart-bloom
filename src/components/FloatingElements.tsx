import React from 'react';
import { motion } from 'framer-motion';

const FloatingElements: React.FC = () => {
  const hearts = Array.from({ length: 8 }, (_, i) => i);
  const sparkles = Array.from({ length: 12 }, (_, i) => i);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Floating Hearts */}
      {hearts.map((i) => (
        <motion.div
          key={`heart-${i}`}
          className="absolute text-rose text-2xl opacity-30"
          initial={{ 
            x: Math.random() * window.innerWidth, 
            y: window.innerHeight + 50,
            rotate: 0 
          }}
          animate={{ 
            y: -50, 
            rotate: 360,
            x: Math.random() * window.innerWidth
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 8
          }}
        >
          ❤️
        </motion.div>
      ))}

      {/* Sparkles */}
      {sparkles.map((i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute w-2 h-2 bg-rose rounded-full opacity-60"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

export default FloatingElements;