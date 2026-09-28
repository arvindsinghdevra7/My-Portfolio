import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { cyberAudio } from '../utils/cyberAudio';

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen && window.innerWidth <= 768) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { num: '01', label: 'Home',         href: '#hero',         id: 'hero' },
    { num: '02', label: 'About',        href: '#about',        id: 'about' },
    { num: '03', label: 'Skills',       href: '#skills',       id: 'skills' },
    { num: '04', label: 'Projects',     href: '#projects',     id: 'projects' },
    { num: '05', label: 'Contact',      href: '#contact',      id: 'contact' },
  ];

  const handleLinkClick = () => {
    cyberAudio.playClick();
    setMobileMenuOpen(false);
  };

  return (
    <motion.nav
      className={`navbar-riwa ${scrolled ? 'nav-scrolled' : ''} ${mobileMenuOpen ? 'drawer-open' : ''}`}
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

      {/* DESKTOP CENTER: Nav links (100% exact original) */}
      <div className="nav-riwa-links">
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
      </div>

      {/* MOBILE FULLSCREEN LUXURY DRAWER (Mobile only) */}
      <div className={`nav-mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-items-wrap">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                className={`mobile-drawer-link ${isActive ? 'active' : ''}`}
                onClick={handleLinkClick}
                onMouseEnter={() => cyberAudio.playHover()}
              >
                <span className="nav-item-num">{item.num}</span>
                <span className="nav-item-text">{item.label}</span>
                <i className="fa-solid fa-arrow-right nav-item-arrow"></i>
              </a>
            );
          })}
        </div>

        <div className="mobile-nav-bottom-actions">
          <a
            href="#contact"
            className="mobile-drawer-cta"
            onClick={handleLinkClick}
          >
            <span>Let's Build Something</span>
            <i className="fa-solid fa-arrow-right"></i>
          </a>

          <div className="mobile-nav-socials">
            <a
              href={`mailto:${personalInfo.email}`}
              className="mobile-social-btn"
              title="Email"
              onClick={() => cyberAudio.playClick()}
            >
              <i className="fa-solid fa-envelope"></i>
            </a>
            <a
              href={personalInfo.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-social-btn whatsapp"
              title="WhatsApp"
              onClick={() => cyberAudio.playClick()}
            >
              <i className="fa-brands fa-whatsapp"></i>
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-social-btn linkedin"
              title="LinkedIn"
              onClick={() => cyberAudio.playClick()}
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      {/* RIGHT: Hamburger Toggle & Desktop Hire Me Button */}
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
          className={`nav-riwa-toggle ${mobileMenuOpen ? 'active' : ''}`}
          onClick={() => { cyberAudio.playClick(); setMobileMenuOpen(p => !p); }}
          aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          aria-expanded={mobileMenuOpen}
        >
          <span></span>
          <span></span>
        </button>
      </div>
    </motion.nav>
  );
}
