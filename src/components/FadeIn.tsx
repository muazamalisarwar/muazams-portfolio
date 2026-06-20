'use client';
import { motion } from 'framer-motion';
import React, { type ReactNode, type ElementType } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  scale?: number;
  as?: ElementType;
  className?: string;
  style?: React.CSSProperties;
}

const FadeIn = ({
  children,
  delay = 0,
  duration = 0.8,
  x = 0,
  y = 80,
  scale = 0.9,
  as = 'div',
  className,
  style,
}: FadeInProps) => {
  // motion.create() supports dynamic element types in framer-motion v12
  // Memoize it so it doesn't recreate the component type on every render (which causes remounting and focus loss)
  const MotionComponent = React.useMemo(() => motion.create(as), [as]);

  return (
    <MotionComponent
      initial={{ opacity: 0, x, y, scale }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '0px', amount: 0 }}
      transition={{
        delay,
        duration,
        ease: [0.16, 1, 0.3, 1], // Custom expoOut easing for premium feel
      }}
      className={className}
      style={style}
    >
      {children}
    </MotionComponent>
  );
};

export default FadeIn;
