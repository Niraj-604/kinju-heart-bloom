import confetti from 'canvas-confetti';
import { useCallback } from 'react';

export const useConfetti = () => {
  const celebrate = useCallback((options?: confetti.Options) => {
    const defaults = {
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    };
    
    confetti({
      ...defaults,
      ...options
    });
  }, []);

  const heartBurst = useCallback(() => {
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
    };

    function fire(particleRatio: number, opts: confetti.Options) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
      colors: ['#E11D48', '#FCE7F3', '#F5E6C8']
    });

    fire(0.2, {
      spread: 60,
      colors: ['#E11D48', '#FCE7F3']
    });

    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
      colors: ['#FCE7F3', '#F5E6C8']
    });

    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
      colors: ['#E11D48']
    });

    fire(0.1, {
      spread: 120,
      startVelocity: 45,
      colors: ['#FCE7F3']
    });
  }, []);

  return { celebrate, heartBurst };
};