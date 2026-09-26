import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../data/portfolioData';
import { cyberAudio } from '../utils/cyberAudio';

export default function Projects({ onOpenProjectModal }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filterButtons = [
    { label: 'All Featured (3)', filter: 'all', icon: 'fa-solid fa-layer-group' },
    { label: 'Next.js & Full-Stack (2)', filter: 'nextjs', icon: 'fa-solid fa-bolt' },
    { label: 'Live in Production (2)', filter: 'live', icon: 'fa-solid fa-circle-check' }
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? projectsData
      : projectsData.filter((p) => p.category.includes(activeFilter));

  const handleFilterClick = (filter) => {
    cyberAudio.playClick();
    setActiveFilter(filter);
  };

  return (
    <section className="projects-luxury-section" id="projects">
      <div className="projects-luxury-container">
        {/* ── Section Header ── */}
        <motion.div
          className="projects-luxury-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="projects-tag-pill">
            <i className="fa-solid fa-code-branch"></i> Flagship Engineering Works
          </div>
          <h2 className="projects-luxury-title">
            Featured <span className="gradient-sunset-text">Projects</span>
          </h2>
          <p className="projects-luxury-subtitle">
            Curated production deployments, full-stack enterprise systems, and real-time interactive web applications.
          </p>

          {/* ── Framer Interactive Filter Capsule ── */}
          <div className="projects-tabs-track">
            {filterButtons.map((btn) => {
              const isActive = activeFilter === btn.filter;
              return (
                <button
                  key={btn.filter}
                  className={`projects-tab-btn ${isActive ? 'active' : ''}`}
                  onClick={() => handleFilterClick(btn.filter)}
                  onMouseEnter={() => cyberAudio.playHover()}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeProjectFramerPill"
                      className="projects-tab-glaze"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="projects-tab-inner">
                    <i className={btn.icon}></i>
                    <span>{btn.label}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* ── Framer Bento Grid of Curated Projects ── */}
        <motion.div className="projects-luxury-grid" layout>
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const isFlagship = project.id === 'parth-car-rental';

              return (
                <motion.div
                  key={project.id}
                  layout
                  className={`project-luxury-card ${isFlagship ? 'flagship-card' : ''}`}
                  initial={{ opacity: 0, y: 30, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  whileHover={{ y: -7 }}
                  onMouseEnter={() => cyberAudio.playHover()}
                >
                  {/* Glowing Ambient Spotlight */}
                  <div
                    className="project-ambient-spot"
                    style={{
                      background: `radial-gradient(circle, ${project.accentColor}30 0%, transparent 70%)`
                    }}
                  />

                  {/* Top Header Row with Live Pulse */}
                  {project.isLive && (
                    <div className="project-card-top-row" style={{ justifyContent: 'flex-end' }}>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-live-indicator-pill"
                        onClick={(e) => {
                          e.stopPropagation();
                          cyberAudio.playClick();
                        }}
                      >
                        <span className="live-pulsing-dot"></span>
                        <span>LIVE IN PRODUCTION</span>
                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                      </a>
                    </div>
                  )}

                  {/* Visual Preview / Mockup Stage - Direct click to Live Site if Live */}
                  {project.isLive ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-visual-stage"
                      onClick={() => cyberAudio.playClick()}
                      title={`Visit ${project.title} Live`}
                    >
                      <div className="project-preview-mockup">
                        <div className="mockup-browser-bar">
                          <div className="browser-dots">
                            <span className="b-dot b-red"></span>
                            <span className="b-dot b-yellow"></span>
                            <span className="b-dot b-green"></span>
                          </div>
                          <div className="browser-url-bar">
                            <i className="fa-solid fa-lock"></i>
                            <span>{project.liveUrl}</span>
                          </div>
                        </div>
                        <div className="mockup-image-box">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="project-mockup-img"
                            loading="lazy"
                          />
                          <div className="mockup-hover-overlay">
                            <span className="overlay-inspect-btn">
                              <i className="fa-solid fa-arrow-up-right-from-square"></i> Visit Live Website
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
                  ) : (
                    <div
                      className="project-visual-stage"
                      onClick={() => {
                        cyberAudio.playClick();
                        onOpenProjectModal(project);
                      }}
                    >
                      <div className="project-preview-mockup">
                        <div className="mockup-browser-bar">
                          <div className="browser-dots">
                            <span className="b-dot b-red"></span>
                            <span className="b-dot b-yellow"></span>
                            <span className="b-dot b-green"></span>
                          </div>
                          <div className="browser-url-bar">
                            <i className="fa-solid fa-lock"></i>
                            <span>{`https://${project.id}.dev`}</span>
                          </div>
                        </div>
                        <div className="mockup-image-box">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="project-mockup-img"
                            loading="lazy"
                          />
                          <div className="mockup-hover-overlay">
                            <span className="overlay-inspect-btn">
                              <i className="fa-solid fa-eye"></i> Quick Architecture Specs
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Project Details Content */}
                  <div className="project-body-content">
                    <h3 className="project-headline">{project.title}</h3>
                    <p className="project-tagline-text">{project.tagline}</p>
                    <p className="project-description-text">{project.shortDesc}</p>

                    {/* Key Highlights Bullet Preview for Flagship */}
                    {isFlagship && (
                      <div className="project-key-bullets">
                        <div className="bullet-chip">
                          <i className="fa-solid fa-shield-halved" style={{ color: project.accentColor }}></i>
                          <span>Role-Based JWT Auth Dashboard</span>
                        </div>
                        <div className="bullet-chip">
                          <i className="fa-solid fa-cloud-arrow-up" style={{ color: project.accentColor }}></i>
                          <span>Cloudinary &amp; Sharp Compression</span>
                        </div>
                        <div className="bullet-chip">
                          <i className="fa-solid fa-magnifying-glass-chart" style={{ color: project.accentColor }}></i>
                          <span>Dynamic JSON-LD &amp; XML SEO</span>
                        </div>
                      </div>
                    )}

                    {/* Tech Badges List */}
                    <div className="project-tech-ribbon">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="proj-tech-chip">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Actions Button Row */}
                    <div className="project-actions-row">
                      <button
                        className="proj-btn proj-btn-specs"
                        onClick={() => {
                          cyberAudio.playClick();
                          onOpenProjectModal(project);
                        }}
                      >
                        <i className="fa-solid fa-circle-info"></i> Full Case Study
                      </button>

                      {project.isLive ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="proj-btn proj-btn-live"
                          onClick={() => cyberAudio.playClick()}
                        >
                          <span>Visit Live Website</span>
                          <i className="fa-solid fa-arrow-up-right-from-square"></i>
                        </a>
                      ) : (
                        <button
                          className="proj-btn proj-btn-arch"
                          onClick={() => {
                            cyberAudio.playClick();
                            onOpenProjectModal(project);
                          }}
                        >
                          <i className="fa-solid fa-network-wired"></i> Architecture Flow
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

