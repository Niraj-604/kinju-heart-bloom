import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

const NepaliLetter: React.FC = () => {
  const [showFireflies, setShowFireflies] = useState(false);

  const nepaliText = [
    "प्रिय किँजु,",
    "जन्मदिनको धेरै–धेरै शुभकामना! तिमी मेरो दिनको उज्यालो र रातको शान्त चन्द्रमा हौ।",
    "तिमी सँग बिताएका साना–साना क्षणहरूले मेरो संसार अझै सुन्दर बनाएका छन्।",
    "आजको दिन तिमीलाई हाँसो, शान्ति र प्रेमले भरिएको रहोस्।",
    "तिमी जस्तो अद्भुत मान्छेसँग जीवन हिँड्न पाउनु मेरो लागि सबैभन्दा ठूलो उपहार हो।",
    "म तिमीलाई हिजोभन्दा बढी, भोलिभन्दा कम माया गर्छु। ❤️"
  ];

  const fireflies = Array.from({ length: 15 }, (_, i) => i);

  return (
    <section className="py-20 bg-gradient-soft relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <motion.h2 
              className="font-display text-4xl md:text-6xl font-bold text-gradient mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              A Letter of Love
            </motion.h2>
            <motion.p 
              className="text-lg text-foreground/70 font-body"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Written from the heart, in the language of our memories
            </motion.p>
          </div>

          <motion.div
            className="glass rounded-2xl p-8 md:p-12 relative backdrop-blur-md"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="space-y-6">
              <motion.div
                className="text-center space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <motion.p
                  className="text-2xl md:text-3xl leading-relaxed text-foreground font-body"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  तिम्रो मुस्कानमा फुल्छ मेरो बिहान,<br />
                  तिम्रो नजरमै सजिन्छ जीवनको जहान।
                </motion.p>
                
                <motion.p
                  className="text-2xl md:text-3xl leading-relaxed text-foreground font-body"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  मौनतामा पनि तिम्रो स्वर सुन्छु म,<br />
                  सपना हरेकमा तिम्रो तस्वीर खोज्छु म।
                </motion.p>
                
                <motion.p
                  className="text-2xl md:text-3xl leading-relaxed text-foreground font-body"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  तिमी बिना अधुरो छु, श्वास जस्तै अड्किएको,<br />
                  तिमी संगै पूर्ण छु, आकाश जस्तै फैलिएको।
                </motion.p>
                
                <motion.p
                  className="text-2xl md:text-3xl leading-relaxed text-rose font-display font-semibold"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                >
                  माया तिमीलाई शब्दले बताउन सक्दिनँ,<br />
                  तर हृदयको धड्कनले तिमीलाई सम्झाइरहन्छ।
                </motion.p>
              </motion.div>
            </div>

            <motion.div
              className="mt-8 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.5 }}
            >
              <Button
                variant={showFireflies ? "outline" : "hero"}
                onClick={() => setShowFireflies(!showFireflies)}
                className="group"
              >
                <motion.span
                  animate={{ rotate: showFireflies ? 360 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  ✨
                </motion.span>
                {showFireflies ? 'Hide Magic' : 'Reveal Magic'}
              </Button>
            </motion.div>

            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
              animate={{ x: [-100, 400] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 5 }}
            />
          </motion.div>
        </motion.div>

        {/* Floating fireflies */}
        <AnimatePresence>
          {showFireflies && (
            <div className="fixed inset-0 pointer-events-none">
              {fireflies.map((i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-yellow-300 rounded-full shadow-lg"
                  initial={{ 
                    opacity: 0,
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight,
                    scale: 0
                  }}
                  animate={{
                    opacity: [0, 1, 0.3, 1, 0],
                    scale: [0, 1, 0.5, 1, 0],
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight,
                  }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{
                    duration: 4 + Math.random() * 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: Math.random() * 2
                  }}
                  style={{
                    boxShadow: "0 0 10px #fef08a, 0 0 20px #fef08a, 0 0 30px #fef08a",
                  }}
                />
              ))}
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default NepaliLetter;