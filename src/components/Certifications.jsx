import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { achievementsData } from '../data/portfolioData';
import { cyberAudio } from '../utils/cyberAudio';

export default function Certifications() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Milestones (4)', icon: 'fa-solid fa-trophy' },
    { id: 'sports', label: 'Sports & Championships (2)', icon: 'fa-solid fa-medal' },
    { id: 'engineering', label: 'Production & Engineering (2)', icon: 'fa-solid fa-bolt' }
  ];

  const filteredItems =
    activeCategory === 'all'
      ? achievementsData
      : achievementsData.filter((item) => item.category === activeCategory);

  const handleCategoryClick = (catId) => {
    cyberAudio.playClick();
    setActiveCategory(catId);
  };

  const statHighlights = [
    { value: '1st Place', label: 'Chess Gold Medalist', icon: 'fa-solid fa-chess-king', color: '#f59e0b' },
    { value: '2+ Live Sites', label: 'Commercial Deployments', icon: 'fa-solid fa-rocket', color: '#ff8a4c' },
    { value: '100%', label: 'Technical SEO Indexation', icon: 'fa-solid fa-chart-line', color: '#38bdf8' },
    { value: 'Lead Rep', label: 'University Sports Council', icon: 'fa-solid fa-award', color: '#a855f7' }
  ];

  return (
    <section className="achievements-luxury-section" id="achievements">
      <div className="achievements-luxury-container">

        {/* ── Section Header ── */}
        <motion.div
          className="achievements-luxury-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="achievements-tag-pill">
            <i className="fa-solid fa-trophy"></i> Recognition &amp; Milestones
          </div>
          <h2 className="achievements-luxury-title">
            Achievements &amp; <span className="gradient-sunset-text">Activities</span>
          </h2>
          <p className="achievements-luxury-subtitle">
            Notable sports championships, production-grade engineering deployments, and institutional leadership honors.
          </p>

          {/* ── Interactive Category Filter Capsule ── */}
          <div className="achievements-tabs-track">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  className={`achieve-tab-btn ${isActive ? 'active' : ''}`}
                  onClick={() => handleCategoryClick(cat.id)}
                  onMouseEnter={() => cyberAudio.playHover()}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeAchievementGlaze"
                      className="achieve-tab-glaze"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="achieve-tab-inner">
                    <i className={cat.icon}></i>
                    <span>{cat.label}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* ── Accomplishment Telemetry Bar ── */}
        <motion.div
          className="achievements-telemetry-bar"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {statHighlights.map((stat, idx) => (
            <div key={idx} className="telemetry-item">
              <div className="telemetry-icon-box" style={{ color: stat.color, background: `${stat.color}15`, borderColor: `${stat.color}35` }}>
                <i className={stat.icon}></i>
              </div>
              <div className="telemetry-text-box">
                <span className="telemetry-val" style={{ color: stat.color }}>{stat.value}</span>
                <span className="telemetry-label">{stat.label}</span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* ── Bento Grid of Achievement Cards ── */}
        <motion.div className="achievements-luxury-grid" layout>
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                className="achievement-luxury-card"
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ y: -8, scale: 1.02 }}
                onMouseEnter={() => cyberAudio.playHover()}
              >
                {/* Glowing Ambient Radial Glow */}
                <div
                  className="achievement-card-glow"
                  style={{ background: `radial-gradient(circle, ${item.color}35 0%, transparent 70%)` }}
                />

                {/* Top Row: Icon & Badge */}
                <div className="achievement-card-top">
                  <div
                    className="achievement-icon-bubble"
                    style={{ color: item.color, background: `${item.color}18`, borderColor: `${item.color}45` }}
                  >
                    <i className={item.icon}></i>
                  </div>

                  <span
                    className="achievement-badge-pill"
                    style={{ color: item.color, background: `${item.color}14`, borderColor: `${item.color}40` }}
                  >
                    <i className="fa-solid fa-sparkles"></i> {item.badge}
                  </span>
                </div>

                {/* Card Title & Issuer */}
                <div className="achievement-card-body">
                  <h3 className="achievement-card-title">{item.title}</h3>
                  <div className="achievement-issuer-line">
                    <i className={item.issuerIcon} style={{ color: item.color }}></i>
                    <span>{item.issuer}</span>
                  </div>

                  <p className="achievement-card-desc">{item.description}</p>

                  {/* Highlights Bullet List */}
                  <ul className="achievement-bullets-list">
                    {item.highlights.map((hl, hIdx) => (
                      <li key={hIdx} className="achievement-bullet-item">
                        <i className="fa-solid fa-check-circle" style={{ color: item.color }}></i>
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Highlight Border */}
                <div
                  className="achievement-bottom-accent"
                  style={{ background: `linear-gradient(90deg, ${item.color}, transparent)` }}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}

