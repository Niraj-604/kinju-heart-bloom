import { useCallback } from 'react';
import confetti from 'canvas-confetti';

export const useConfetti = () => {
  const fireConfetti = useCallback((options?: confetti.Options) => {
    const defaults: confetti.Options = {
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#E11D48', '#FCE7F3', '#F5E6C8'],
      ...options,
    };
    
    confetti(defaults);
  }, []);

  const fireHearts = useCallback(() => {
    const heart = confetti.shapeFromText({ text: '❤️', scalar: 2 });
    
    confetti({
      shapes: [heart],
      particleCount: 30,
      spread: 100,
      startVelocity: 45,
      gravity: 0.8,
      colors: ['#E11D48', '#FCE7F3'],
    });
  }, []);

  const fireworksBurst = useCallback(() => {
    const duration = 3000;
    const animationEnd = Date.now() + duration;

    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };

    const frame = () => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) return;

      const particleCount = 50 * (timeLeft / duration);

      confetti({
        particleCount,
        startVelocity: 30,
        spread: 360,
        ticks: 60,
        origin: {
          x: randomInRange(0.1, 0.9),
          y: randomInRange(0.2, 0.8),
        },
        colors: ['#E11D48', '#FCE7F3', '#F5E6C8', '#0F172A'],
      });

      requestAnimationFrame(frame);
    };

    frame();
  }, []);

  return {
    fireConfetti,
    fireHearts,
    fireworksBurst,
  };
};