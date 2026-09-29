import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('INITIALIZING PORTFOLIO...');

  useEffect(() => {
    const startTime = Date.now();
    const duration = 1900; // Fast, smooth ~1.9s load

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const currentProgress = Math.min(Math.round((elapsed / duration) * 100), 100);

      setProgress(currentProgress);

      if (currentProgress < 30) {
        setStatusText('INITIALIZING PORTFOLIO...');
      } else if (currentProgress < 65) {
        setStatusText('LOADING PRODUCTION PROJECTS...');
      } else if (currentProgress < 95) {
        setStatusText('PREPARING DIGITAL EXPERIENCE...');
      } else {
        setStatusText('WELCOME TO ARVIND SINGH DEVRA');
        clearInterval(interval);
        setTimeout(() => {
          if (onComplete) onComplete();
        }, 320);
      }
    }, 20);

    const failsafe = setTimeout(() => {
      setProgress(100);
      if (onComplete) onComplete();
    }, 2600);

    return () => {
      clearInterval(interval);
      clearTimeout(failsafe);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="riwa-preloader-overlay"
      initial={{ opacity: 1 }}
      exit={{
        y: '-100%',
        transition: {
          duration: 0.85,
          ease: [0.76, 0, 0.24, 1]
        }
      }}
    >
      {/* ── Warm ambient orbs matching Hero ── */}
      <div className="riwa-preloader-orb warm" />
      <div className="riwa-preloader-orb cool" />

      {/* ── Twinkling star particles ── */}
      <div className="riwa-preloader-stars" aria-hidden="true">
        {[...Array(14)].map((_, i) => (
          <span
            key={i}
            className="riwa-star"
            style={{
              left: `${(i * 41 + 17) % 100}%`,
              top: `${(i * 59 + 11) % 100}%`,
              animationDelay: `${(i * 0.35) % 2.5}s`,
              width: `${(i % 3) + 2}px`,
              height: `${(i % 3) + 2}px`,
            }}
          />
        ))}
      </div>

      {/* ── Signature Riwa horizontal grid rules ── */}
      <div className="riwa-preloader-rule top" />
      <div className="riwa-preloader-rule bottom" />

      {/* ── Top Bar ── */}
      <div className="riwa-preloader-top">
        <div className="riwa-preloader-brand">
          <span className="brand-name">{personalInfo.name}</span>
          <span className="brand-mark">®</span>
        </div>
        <div className="riwa-preloader-location">
          <span className="live-dot" />
          <span>RAJASTHAN, INDIA</span>
        </div>
      </div>

      {/* ── Center Content ── */}
      <div className="riwa-preloader-center">
        {/* Editorial Subtitle */}
        <motion.div
          className="riwa-preloader-tagline"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span>FULL STACK DEVELOPER</span>
        </motion.div>

        {/* Main Name Reveal with Luxury Staggered Words */}
        <h1 className="riwa-preloader-title">
          {["ARVIND", "SINGH", "DEVRA"].map((word, idx) => (
            <motion.span
              key={idx}
              className="riwa-preloader-word"
              initial={{ opacity: 0, y: 35, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{
                duration: 0.6,
                delay: 0.1 + idx * 0.12,
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              {word}
            </motion.span>
          ))}
          <motion.span
            className="riwa-preloader-mark"
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            ®
          </motion.span>
        </h1>

        {/* Tagline */}
        <motion.p
          className="riwa-preloader-desc"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.6 }}
        >
          Building high-performance web apps &amp; modern digital systems.
        </motion.p>

        {/* Luxury Progress Bar & Counter */}
        <div className="riwa-preloader-progress-wrap">
          <div className="riwa-preloader-track">
            <motion.div
              className="riwa-preloader-fill"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="riwa-preloader-meta">
            <span className="status-text">{statusText}</span>
            <span className="counter-text">{progress.toString().padStart(2, '0')}%</span>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="riwa-preloader-bottom">
        <span>© 2025 ARVIND SINGH DEVRA</span>
        <span className="bottom-edition">PORTFOLIO EDITION • CRAFTED WITH PASSION</span>
      </div>
    </motion.div>
  );
}
