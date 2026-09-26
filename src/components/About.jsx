import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { cyberAudio } from '../utils/cyberAudio';

export default function About({ onCopyText }) {
  return (
    <section className="about-duncan-section" id="about">
      <div className="about-duncan-container">

        {/* ── Main Editorial About Card (Full Screen Expansive) ── */}
        <motion.div
          className="about-duncan-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* ── Top Center: Available for work pill badge ── */}
          <div className="about-available-pill-center">
            <div className="about-available-pill">
              <img
                src="/assets/images/arvind-profile.jpg"
                alt={personalInfo.name}
                className="pill-avatar"
                onError={(e) => {
                  e.currentTarget.src = '/homeimage.png';
                }}
              />
              <span className="pill-text">Available for work</span>
              <span className="pill-status-dot" />
            </div>
          </div>

          <div className="about-duncan-grid">

            {/* ── LEFT COLUMN: Framed Portrait Photo ── */}
            <div className="about-duncan-photo-col">
              <motion.div
                className="about-duncan-photo-frame"
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <img
                  src="/assets/images/arvind-profile.jpg"
                  alt={personalInfo.name}
                  className="about-duncan-img"
                  onError={(e) => {
                    e.currentTarget.src = '/homeimage.png';
                  }}
                />
              </motion.div>
            </div>

            {/* ── RIGHT COLUMN: Content & Stats ── */}
            <div className="about-duncan-content-col">
              <h2 className="about-duncan-title">ABOUT ME</h2>

              <p className="about-duncan-intro">
                Hey, I'm{' '}<strong>Arvind</strong>{' '}— a Full Stack Developer and Next.js Architect passionate about crafting meaningful, high-performance, and impactful digital experiences.
              </p>

              {/* 3 Key Metric Stats */}
              <div className="about-duncan-stats-row">
                <div className="duncan-stat-block">
                  <div className="duncan-stat-val">4+</div>
                  <div className="duncan-stat-title">Completed Projects</div>
                </div>

                <div className="duncan-stat-block">
                  <div className="duncan-stat-val">2+</div>
                  <div className="duncan-stat-title">Live Production Sites</div>
                </div>

                <div className="duncan-stat-block">
                  <div className="duncan-stat-val">3+</div>
                  <div className="duncan-stat-title">Industry Internships</div>
                </div>
              </div>

              {/* Direct Contact Details */}
              <div className="about-duncan-contact-info">
                <div className="duncan-contact-item">
                  <span className="duncan-contact-label">Call Today :</span>
                  <a
                    href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                    className="duncan-contact-value"
                    onClick={() => cyberAudio.playClick()}
                    onMouseEnter={() => cyberAudio.playHover()}
                  >
                    {personalInfo.phone}
                  </a>
                </div>

                <div className="duncan-contact-item">
                  <span className="duncan-contact-label">Email :</span>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="duncan-contact-value"
                    onClick={() => cyberAudio.playClick()}
                    onMouseEnter={() => cyberAudio.playHover()}
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="about-duncan-socials">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="duncan-social-icon"
                  aria-label="X (Twitter)"
                  onMouseEnter={() => cyberAudio.playHover()}
                  onClick={() => cyberAudio.playClick()}
                >
                  <i className="fa-brands fa-x-twitter"></i>
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="duncan-social-icon"
                  aria-label="GitHub"
                  onMouseEnter={() => cyberAudio.playHover()}
                  onClick={() => cyberAudio.playClick()}
                >
                  <i className="fa-brands fa-github"></i>
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="duncan-social-icon"
                  aria-label="LinkedIn"
                  onMouseEnter={() => cyberAudio.playHover()}
                  onClick={() => cyberAudio.playClick()}
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>

                <a
                  href={personalInfo.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="duncan-social-icon"
                  aria-label="WhatsApp"
                  onMouseEnter={() => cyberAudio.playHover()}
                  onClick={() => cyberAudio.playClick()}
                >
                  <i className="fa-brands fa-whatsapp"></i>
                </a>
              </div>

              {/* Action Buttons */}
              <div className="about-duncan-actions">
                <motion.a
                  href="#experience"
                  className="duncan-pill-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={() => cyberAudio.playHover()}
                  onClick={() => cyberAudio.playClick()}
                >
                  MY STORY
                </motion.a>

                <motion.a
                  href="#projects"
                  className="duncan-pill-btn duncan-pill-btn-outline"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={() => cyberAudio.playHover()}
                  onClick={() => cyberAudio.playClick()}
                >
                  VIEW WORK →
                </motion.a>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
