import React from 'react';
import { motion } from 'framer-motion';

const FloatingElements: React.FC = () => {
  const hearts = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 4 + Math.random() * 2,
  }));

  const sparkles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 3,
    duration: 3 + Math.random() * 2,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Floating Hearts */}
      {hearts.map((heart) => (
        <motion.div
          key={`heart-${heart.id}`}
          className="absolute text-rose text-2xl opacity-20"
          style={{ left: `${heart.x}%`, top: `${heart.y}%` }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            rotate: [0, 360],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          ❤️
        </motion.div>
      ))}

      {/* Sparkles */}
      {sparkles.map((sparkle) => (
        <motion.div
          key={`sparkle-${sparkle.id}`}
          className="absolute w-1 h-1 bg-champagne rounded-full"
          style={{ left: `${sparkle.x}%`, top: `${sparkle.y}%` }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: sparkle.duration,
            delay: sparkle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingElements;