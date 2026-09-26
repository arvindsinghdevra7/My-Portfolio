import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

export default function AnimatedCounter({ value, duration = 1.6, suffix = '', prefix = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [displayValue, setDisplayValue] = useState(0);

  // Extract number and decimal places if any (e.g. 88.8 or 4)
  const numericValue = parseFloat(value.toString().replace(/[^0-9.]/g, '')) || 0;
  const isFloat = value.toString().includes('.');
  const decimals = isFloat ? value.toString().split('.')[1]?.length || 1 : 0;

  useEffect(() => {
    if (!isInView) return;

    let startTime = null;
    let animationFrameId;

    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

      // Ease-out expo curve for ultra-smooth landing
      const easeOutExpo = 1 - Math.pow(2, -10 * progress);
      const current = numericValue * easeOutExpo;

      setDisplayValue(isFloat ? current.toFixed(decimals) : Math.floor(current));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animateCount);
      } else {
        setDisplayValue(isFloat ? numericValue.toFixed(decimals) : numericValue);
      }
    };

    animationFrameId = requestAnimationFrame(animateCount);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, numericValue, duration, isFloat, decimals]);

  return (
    <span ref={ref} className="animated-counter-value">
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}
