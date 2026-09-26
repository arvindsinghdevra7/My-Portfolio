import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { cyberAudio } from '../utils/cyberAudio';

export default function Hero() {
  return (
    <section className="hero-riwa" id="hero">

      {/* ── Giant watermark background name ── */}
      <div className="hero-riwa-watermark" aria-hidden="true">
        <span className="watermark-line1">ARVIND</span>
        <span className="watermark-line2">SINGH</span>
        <span className="watermark-line3">DEVRA</span>
      </div>

      {/* ── Warm tonal background gradient ── */}
      <div className="hero-riwa-bg-overlay" />

      {/* ── Ambient colour orbs ── */}
      <div className="riwa-orb riwa-orb-warm" />
      <div className="riwa-orb riwa-orb-cool" />

      {/* ── Star particles ── */}
      <div className="riwa-stars" aria-hidden="true">
        {[...Array(18)].map((_, i) => (
          <span
            key={i}
            className="riwa-star"
            style={{
              left:  `${(i * 37 + 13) % 100}%`,
              top:   `${(i * 53 + 7)  % 100}%`,
              animationDelay: `${(i * 0.4) % 3}s`,
              width:  `${(i % 3) + 2}px`,
              height: `${(i % 3) + 2}px`,
            }}
          />
        ))}
      </div>

      {/* ── Center portrait photo (Riwa style) ── */}
      <div className="hero-riwa-center">
        <motion.div
          className="hero-riwa-photo-wrap"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Warm glow platform under photo */}
          <div className="riwa-photo-glow" />

          {/* Portrait image — User's photo */}
          <img
            src="/homeimage.png?v=2"
            alt={personalInfo.name}
            className="hero-riwa-portrait"
            onError={(e) => {
              e.currentTarget.src = '/assets/images/homeimage.png';
            }}
          />

          {/* Subtle vignette at bottom of photo */}
          <div className="riwa-photo-vignette" />
        </motion.div>
      </div>

      {/* ── Bottom content bar (Riwa style) ── */}
      <motion.div
        className="hero-riwa-bottom"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.5 }}
      >
        {/* Bottom left — tagline */}
        <div className="riwa-bottom-left">
          <div className="riwa-tagline">FULL STACK DEVELOPER</div>
          <p className="riwa-desc">
            Building high-performance web apps,<br />
            scalable systems &amp; beautiful interfaces.
          </p>
        </div>

        {/* Bottom right — CTA */}
        <div className="riwa-bottom-right">
          <motion.a
            href="#projects"
            className="riwa-cta-btn"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onMouseEnter={() => cyberAudio.playHover()}
            onClick={() => cyberAudio.playClick()}
          >
            VIEW MY WORK
            <span className="riwa-cta-arrow">→</span>
          </motion.a>
          <a
            href="https://parthcarrental.com"
            target="_blank"
            rel="noopener noreferrer"
            className="riwa-live-link"
            onMouseEnter={() => cyberAudio.playHover()}
            onClick={() => cyberAudio.playClick()}
          >
            <span className="riwa-live-dot" />
            LIVE CLIENT SITE
          </a>
        </div>
      </motion.div>

      {/* ── Horizontal rule decorators (Riwa signature) ── */}
      <div className="riwa-rule riwa-rule-top"    aria-hidden="true" />
      <div className="riwa-rule riwa-rule-bottom" aria-hidden="true" />

    </section>
  );
}
