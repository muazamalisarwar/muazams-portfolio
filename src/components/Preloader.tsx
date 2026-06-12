'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

interface PreloaderProps {
  isLoading: boolean;
}

export default function Preloader({ isLoading }: PreloaderProps) {
  const text = "Welcome to Muazam Ali's Portfolio";

  // Prevent scrolling while preloader is active
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black"
        >
          {/* Animated Loader Circle */}
          <motion.div
            className="relative flex items-center justify-center w-16 h-16 mb-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.div className="absolute inset-0 rounded-full border border-white/10" />
            <motion.div
              className="absolute inset-0 rounded-full border-t border-white/80"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
            />
            <motion.div
              className="absolute w-2 h-2 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            />
          </motion.div>

          {/* Text with stagger typing effect */}
          <motion.div
            className="flex flex-wrap justify-center overflow-hidden px-4 text-center"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.04 } },
              hidden: {},
            }}
          >
            {text.split('').map((char, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.4, ease: 'easeOut' },
                  },
                }}
                className={`text-white text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] font-medium ${
                  char === ' ' ? 'w-2 sm:w-3' : ''
                }`}
                style={{ textShadow: '0 0 15px rgba(255,255,255,0.2)' }}
              >
                {char}
              </motion.span>
            ))}
          </motion.div>

          {/* Indeterminate Progress Bar */}
          <motion.div
            className="w-48 sm:w-64 h-[1px] bg-white/10 mt-8 relative overflow-hidden rounded-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <motion.div
              className="absolute top-0 left-0 h-full bg-white/60"
              animate={{
                x: ['-100%', '200%'],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: 'easeInOut',
              }}
              style={{ width: '50%' }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
