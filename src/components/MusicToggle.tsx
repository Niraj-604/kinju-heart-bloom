import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { useLocalStorage } from 'react-use';

const MusicToggle: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useLocalStorage('music-muted', true);
  const [showTooltip, setShowTooltip] = useState(false);

  // For demo, we'll use a data URL for a simple tone
  // In production, replace with actual music file
  const createTone = () => {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(440, audioContext.currentTime); // A note
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.1, audioContext.currentTime + 0.1);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 2);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 2);
  };

  const togglePlay = () => {
    if (!audioRef.current) {
      // Fallback to tone generation
      createTone();
      setIsPlaying(true);
      setTimeout(() => setIsPlaying(false), 2000);
      return;
    }

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {
        // Fallback if audio fails
        createTone();
      });
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 2 }}
      className="fixed bottom-6 right-6 z-40"
    >
      <div
        className="relative"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {/* Tooltip */}
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-midnight/90 text-soft-white text-sm rounded-lg whitespace-nowrap"
          >
            {isPlaying ? 'Pause Music' : 'Play Music'}
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-midnight/90" />
          </motion.div>
        )}

        <div className="flex flex-col gap-2">
          {/* Play/Pause Button */}
          <Button
            onClick={togglePlay}
            className="w-14 h-14 rounded-full bg-gradient-romantic text-soft-white hover:scale-110 active:scale-95 transition-all duration-300 shadow-glow"
          >
            <motion.div
              animate={{ rotate: isPlaying ? 360 : 0 }}
              transition={{ duration: 2, repeat: isPlaying ? Infinity : 0, ease: "linear" }}
            >
              {isPlaying ? (
                <Pause className="h-6 w-6" />
              ) : (
                <Play className="h-6 w-6" />
              )}
            </motion.div>
          </Button>

          {/* Mute Button */}
          <Button
            onClick={toggleMute}
            variant="outline"
            className="w-10 h-10 rounded-full glass border-rose/30 text-rose hover:bg-rose/10 hover:scale-110 transition-all duration-300"
          >
            {isMuted ? (
              <VolumeX className="h-4 w-4" />
            ) : (
              <Volume2 className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>

      {/* Audio Element - Hidden */}
      <audio
        ref={audioRef}
        loop
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
        style={{ display: 'none' }}
      >
        {/* Add your music file here */}
        {/* <source src="/assets/kinju-theme.mp3" type="audio/mpeg" /> */}
        Your browser does not support the audio element.
      </audio>

      {/* Visual sound waves when playing */}
      {isPlaying && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 pointer-events-none"
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-0 rounded-full border-2 border-rose/30"
              animate={{
                scale: [1, 1.5, 2],
                opacity: [0.8, 0.4, 0],
              }}
              transition={{
                duration: 2,
                delay: i * 0.4,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
          ))}
        </motion.div>
      )}
    </motion.div>
  );
};

export default MusicToggle;