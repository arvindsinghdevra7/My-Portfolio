import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { cyberAudio } from '../utils/cyberAudio';

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home',         href: '#hero',         id: 'hero' },
    { label: 'About',        href: '#about',        id: 'about' },
    { label: 'Skills',       href: '#skills',       id: 'skills' },
    { label: 'Projects',     href: '#projects',     id: 'projects' },
    { label: 'Contact',      href: '#contact',      id: 'contact' },
  ];

  const handleLinkClick = () => {
    cyberAudio.playClick();
    setMobileMenuOpen(false);
  };

  return (
    <motion.nav
      className={`navbar-riwa ${scrolled ? 'nav-scrolled' : ''}`}
      id="navbar"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* LEFT: Name logo */}
      <a href="#hero" className="nav-riwa-logo" onClick={handleLinkClick}>
        <span className="nav-riwa-name">{personalInfo.name}</span>
        <span className="nav-riwa-mark">®</span>
      </a>

      {/* CENTER: Nav links */}
      <div className={`nav-riwa-links ${mobileMenuOpen ? 'open' : ''}`}>
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={item.href}
              className={`nav-riwa-link ${isActive ? 'active' : ''}`}
              onClick={handleLinkClick}
              onMouseEnter={() => cyberAudio.playHover()}
            >
              {item.label}
            </a>
          );
        })}
        <a
          href="#contact"
          className="nav-riwa-cta nav-riwa-cta-mobile"
          onClick={handleLinkClick}
        >
          Hire Me
        </a>
      </div>

      {/* RIGHT: Hamburger / Hire Me */}
      <div className="nav-riwa-right">
        <a
          href="#contact"
          className="nav-riwa-cta"
          onClick={handleLinkClick}
          onMouseEnter={() => cyberAudio.playHover()}
        >
          Hire Me
        </a>
        <button
          className="nav-riwa-toggle"
          onClick={() => { cyberAudio.playClick(); setMobileMenuOpen(p => !p); }}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
        </button>
      </div>
    </motion.nav>
  );
}
