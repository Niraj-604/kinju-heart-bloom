import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useLocalStorage } from 'react-use';

const MusicToggle: React.FC = () => {
  const [isPlaying, setIsPlaying] = useLocalStorage('music-playing', false);
  const [showTooltip, setShowTooltip] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // You can add a music file to public/assets/kinju-theme.mp3
    // For now, we'll create a simple audio context for demonstration
    
    if (typeof window !== 'undefined' && !audioRef.current) {
      // Create a simple audio element for demonstration
      // In production, you'd load an actual music file
      audioRef.current = new Audio();
      audioRef.current.loop = true;
      audioRef.current.volume = 0.3;
      
      // Note: You would set audioRef.current.src to your music file
      // audioRef.current.src = '/assets/kinju-theme.mp3';
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        // Note: In a real implementation, you'd have an actual audio file
        // audioRef.current.play().catch(console.error);
        console.log('Music would play here with actual audio file');
      }
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.div
      className="fixed bottom-8 right-8 z-50"
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ 
        type: "spring", 
        stiffness: 260, 
        damping: 20,
        delay: 2 
      }}
    >
      <div className="relative">
        <motion.div
          onHoverStart={() => setShowTooltip(true)}
          onHoverEnd={() => setShowTooltip(false)}
        >
          <Button
            variant="hero"
            size="icon"
            onClick={toggleMusic}
            className="w-14 h-14 rounded-full shadow-2xl border-2 border-white/20"
          >
            <motion.div
              animate={{ 
                rotate: isPlaying ? 360 : 0,
                scale: isPlaying ? [1, 1.1, 1] : 1
              }}
              transition={{ 
                rotate: { duration: 2, repeat: isPlaying ? Infinity : 0, ease: "linear" },
                scale: { duration: 0.5, repeat: isPlaying ? Infinity : 0, ease: "easeInOut" }
              }}
            >
              {isPlaying ? '🎵' : '🎶'}
            </motion.div>
          </Button>
        </motion.div>

        {/* Tooltip */}
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              className="absolute bottom-full mb-2 right-0 bg-midnight text-white px-3 py-2 rounded-lg text-sm font-body whitespace-nowrap"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
            >
              {isPlaying ? 'Pause music' : 'Play music'}
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-midnight" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Sound waves animation */}
        <AnimatePresence>
          {isPlaying && (
            <div className="absolute -inset-4 pointer-events-none">
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 border-2 border-rose/30 rounded-full"
                  initial={{ scale: 1, opacity: 0.6 }}
                  animate={{ scale: 2, opacity: 0 }}
                  exit={{ scale: 1, opacity: 0 }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeOut"
                  }}
                />
              ))}
            </div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default MusicToggle;