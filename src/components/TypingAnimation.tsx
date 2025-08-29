import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TypingAnimation = () => {
  const nepaliPoem = [
    "तिमी मेरो जिन्दगीको सब भन्दा सुन्दर उपहार हौ…",
    "तिम्रो हाँसोमा मेरो खुशी लुकेको छ,",
    "तिम्रो आँखामा मेरो सपना बसेको छ।",
    "जन्मदिनमा यो सानो सन्देश:",
    "तिमी सधैं खुश रहो, म सधैं तिम्रो साथमा छु। 💕"
  ];

  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentLineIndex >= nepaliPoem.length) {
      setIsTyping(false);
      return;
    }

    const currentLine = nepaliPoem[currentLineIndex];
    let charIndex = 0;

    const typingInterval = setInterval(() => {
      if (charIndex <= currentLine.length) {
        setCurrentText(currentLine.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        
        // Pause before moving to next line
        setTimeout(() => {
          setCurrentLineIndex(prev => prev + 1);
          setCurrentText('');
        }, 1000);
      }
    }, 80);

    return () => clearInterval(typingInterval);
  }, [currentLineIndex]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blush via-background to-champagne relative overflow-hidden">
      {/* Floating hearts background */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-rose/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${0.8 + Math.random() * 1.2}rem`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.6, 0.1],
              rotate: [0, 360],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          >
            💖
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="glass rounded-3xl p-8 md:p-12 shadow-romantic"
        >
          <motion.h2 
            className="font-display text-3xl md:text-4xl lg:text-5xl text-rose mb-8"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            मेरो माया तिमीलाई...
          </motion.h2>

          <div className="text-left space-y-4">
            {nepaliPoem.map((line, index) => (
              <motion.div
                key={index}
                className="min-h-[2.5rem] flex items-center"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: index < currentLineIndex ? 1 : (index === currentLineIndex ? 1 : 0.3) 
                }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-lg md:text-xl lg:text-2xl text-midnight leading-relaxed font-medium">
                  {index < currentLineIndex ? line : (index === currentLineIndex ? currentText : '')}
                  {index === currentLineIndex && isTyping && (
                    <span 
                      className={`inline-block w-0.5 h-6 bg-rose ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`}
                    />
                  )}
                </p>
              </motion.div>
            ))}
          </div>

          {!isTyping && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-8 text-center"
            >
              <div className="text-4xl mb-4">
                {['💕', '🌹', '✨', '💖', '🎂'].map((emoji, i) => (
                  <motion.span
                    key={i}
                    className="inline-block mx-2"
                    animate={{
                      scale: [1, 1.3, 1],
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  >
                    {emoji}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default TypingAnimation;