import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TechSphere3D from './TechSphere3D';
import { cyberAudio } from '../utils/cyberAudio';

// Primary Infinite Marquee Badges (Framer Ribbon)
const marqueeSkills = [
  { name: 'Next.js 14', icon: 'fa-solid fa-bolt', color: '#ff8a4c' },
  { name: 'React.js', icon: 'fa-brands fa-react', color: '#00f5ff' },
  { name: 'Node.js', icon: 'fa-brands fa-node-js', color: '#22c55e' },
  { name: 'MongoDB', icon: 'fa-solid fa-leaf', color: '#10b981' },
  { name: 'TypeScript', icon: 'fa-solid fa-code', color: '#3b82f6' },
  { name: 'Tailwind CSS', icon: 'fa-brands fa-css3', color: '#38bdf8' },
  { name: 'Express.js', icon: 'fa-solid fa-network-wired', color: '#cbd5e1' },
  { name: 'Redux Toolkit', icon: 'fa-solid fa-cubes', color: '#a855f7' },
  { name: 'JWT Auth', icon: 'fa-solid fa-shield-halved', color: '#f59e0b' },
  { name: 'Technical SEO', icon: 'fa-solid fa-chart-line', color: '#f97316' },
  { name: 'Cloudinary', icon: 'fa-solid fa-cloud-arrow-up', color: '#06b6d4' },
  { name: 'Git & GitHub', icon: 'fa-brands fa-github', color: '#f43f5e' },
];

const enhancedSkills = [
  // Frontend
  { name: 'Next.js 14', category: 'frontend', icon: 'fa-solid fa-bolt', level: 'Production Core', color: '#ff8a4c', desc: 'App Router, Server Actions, Dynamic SEO, SSR/SSG', featured: true },
  { name: 'React.js', category: 'frontend', icon: 'fa-brands fa-react', level: 'Advanced', color: '#00f5ff', desc: 'Custom Hooks, Context, Concurrent UI, Suspense', featured: true },
  { name: 'TypeScript', category: 'languages', icon: 'fa-solid fa-code', level: 'Strongly Typed', color: '#3b82f6', desc: 'Type Safety, Interfaces & Scalable Architecture' },
  { name: 'Tailwind CSS', category: 'frontend', icon: 'fa-brands fa-css3', level: 'Design System', color: '#38bdf8', desc: 'Responsive Design, Glassmorphism & Custom Tokens' },
  { name: 'Redux Toolkit', category: 'frontend', icon: 'fa-solid fa-cubes', level: 'State Engine', color: '#a855f7', desc: 'Global Slices, Async Thunks & Store Architecture' },
  { name: 'HTML5 & CSS3', category: 'frontend', icon: 'fa-brands fa-html5', level: 'Semantic Master', color: '#f97316', desc: 'Accessibility, CSS Grid, Flexbox & Micro-animations' },

  // Backend
  { name: 'Node.js', category: 'backend', icon: 'fa-brands fa-node-js', level: 'Backend Core', color: '#22c55e', desc: 'Event-driven Architecture & Asynchronous I/O', featured: true },
  { name: 'Express.js', category: 'backend', icon: 'fa-solid fa-network-wired', level: 'REST Routing', color: '#cbd5e1', desc: 'Middleware, Custom Error Handling & API Security' },
  { name: 'RESTful APIs', category: 'backend', icon: 'fa-solid fa-arrows-split-up-and-left', level: 'Production Live', color: '#ec4899', desc: 'CRUD Operations, JSON Endpoints & Response Structuring' },
  { name: 'JWT Auth', category: 'backend', icon: 'fa-solid fa-shield-halved', level: 'Role-Based RBAC', color: '#f59e0b', desc: 'Token Cookies, Protected Routes & Bcrypt Hashing' },
  { name: 'Nodemailer', category: 'backend', icon: 'fa-solid fa-envelope-open-text', level: 'Automated Mail', color: '#ef4444', desc: 'Booking Confirmations & Transactional Emails' },
  { name: 'Cloudinary & Sharp', category: 'backend', icon: 'fa-solid fa-cloud-arrow-up', level: 'CDN Optimization', color: '#06b6d4', desc: 'Server-side Image Compression & Cloud Storage' },

  // Database & SEO
  { name: 'MongoDB', category: 'database', icon: 'fa-solid fa-leaf', level: 'NoSQL Master', color: '#10b981', desc: 'Document Modeling, Indexing & Cloud Atlas Deployments', featured: true },
  { name: 'Mongoose ORM', category: 'database', icon: 'fa-solid fa-database', level: 'Schema Modeling', color: '#14b8a6', desc: 'Data Validation, Middleware Hooks & Virtuals' },
  { name: 'Technical SEO', category: 'database', icon: 'fa-solid fa-chart-line', level: 'Rank Optimization', color: '#f97316', desc: 'Dynamic XML Sitemaps, Robots.js, Performance Audits' },
  { name: 'JSON-LD Schema', category: 'database', icon: 'fa-solid fa-code', level: 'Rich Snippets', color: '#eab308', desc: 'LocalBusiness, FAQPage & Breadcrumb Structured Data' },

  // Languages & Tools
  { name: 'JavaScript (ES6+)', category: 'languages', icon: 'fa-brands fa-js', level: 'Core Language', color: '#fbbf24', desc: 'Async/Await, Promises, Closures & Modern Syntax' },
  { name: 'Python', category: 'languages', icon: 'fa-brands fa-python', level: 'Scripting & DSA', color: '#60a5fa', desc: 'Problem Solving, Algorithms & Backend Utilities' },
  { name: 'Git & GitHub', category: 'languages', icon: 'fa-brands fa-git-alt', level: 'Version Control', color: '#f43f5e', desc: 'Collaborative Branches, PRs & CI/CD Pipelines' },
  { name: 'Postman', category: 'languages', icon: 'fa-solid fa-paper-plane', level: 'API Testing', color: '#fb923c', desc: 'Endpoint Verification & Mock Environment Testing' },
  { name: 'VS Code', category: 'languages', icon: 'fa-solid fa-laptop-code', level: 'Primary IDE', color: '#38bdf8', desc: 'Full-stack Productivity & Debugging Workflows' },
];

const categoryTabs = [
  { id: 'all', label: 'All Technologies', icon: 'fa-solid fa-shapes' },
  { id: 'frontend', label: 'Frontend & Next.js', icon: 'fa-solid fa-layer-group' },
  { id: 'backend', label: 'Backend & APIs', icon: 'fa-solid fa-server' },
  { id: 'database', label: 'Database & SEO', icon: 'fa-solid fa-database' },
  { id: 'languages', label: 'Languages & Tools', icon: 'fa-solid fa-terminal' },
  { id: 'sphere', label: '3D Sphere Mode', icon: 'fa-solid fa-globe' }
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredSkills =
    activeTab === 'all'
      ? enhancedSkills
      : enhancedSkills.filter((s) => s.category === activeTab);

  const halfIndex = Math.ceil(enhancedSkills.length / 2);
  const row1Skills = enhancedSkills.slice(0, halfIndex);
  const row2Skills = enhancedSkills.slice(halfIndex);

  return (
    <section className="skills-luxury-section" id="skills">
      <div className="skills-luxury-container">

        {/* ── Section Header ── */}
        <motion.div
          className="skills-luxury-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="skills-tag-pill">
            <i className="fa-solid fa-code"></i> Technical Arsenal
          </div>
          <h2 className="skills-luxury-title">
            Skills &amp; <span className="gradient-sunset-text">Technologies</span>
          </h2>
          <p className="skills-luxury-subtitle">
            A battle-tested technology stack powering scalable full-stack web platforms, real-time databases, and responsive digital products.
          </p>

          {/* ── Framer Infinite Marquee Ribbon (Top Fast Pills) ── */}
          <div className="framer-marquee-wrapper">
            <div className="framer-marquee-track">
              {[...marqueeSkills, ...marqueeSkills].map((item, idx) => (
                <div key={idx} className="framer-marquee-pill">
                  <i className={item.icon} style={{ color: item.color }}></i>
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Interactive Category Tabs ── */}
          <div className="skills-tabs-container">
            <div className="skills-tabs-track">
              {categoryTabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    className={`skills-tab-btn ${isActive ? 'active' : ''}`}
                    onClick={() => {
                      cyberAudio.playClick();
                      setActiveTab(tab.id);
                    }}
                    onMouseEnter={() => cyberAudio.playHover()}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeSkillTabGlaze"
                        className="skills-tab-glaze"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="skills-tab-inner">
                      <i className={tab.icon}></i> {tab.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* ── Main Interactive Showcase ── */}
        <AnimatePresence mode="wait">
          {activeTab === 'all' ? (
            <motion.div
              key="all-marquee"
              className="skills-dual-marquee-container"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {/* Row 1 - Right to Left Infinite Marquee */}
              <div className="skills-marquee-row-wrapper">
                <div className="skills-marquee-row-track track-speed-1">
                  {[...row1Skills, ...row1Skills, ...row1Skills].map((skill, index) => (
                    <div
                      key={`r1-${skill.name}-${index}`}
                      className="skill-luxury-card skill-marquee-card"
                      onMouseEnter={() => cyberAudio.playHover()}
                    >
                      <div
                        className="skill-card-glow"
                        style={{ background: `radial-gradient(circle, ${skill.color}35 0%, transparent 70%)` }}
                      />
                      <div className="skill-card-top">
                        <div
                          className="skill-icon-bubble"
                          style={{ color: skill.color, borderColor: `${skill.color}45` }}
                        >
                          <i className={skill.icon}></i>
                        </div>
                        <span
                          className="skill-level-badge"
                          style={{ color: skill.color, borderColor: `${skill.color}40`, background: `${skill.color}15` }}
                        >
                          {skill.level}
                        </span>
                      </div>
                      <div className="skill-card-body">
                        <h3 className="skill-title">{skill.name}</h3>
                        <p className="skill-desc">{skill.desc}</p>
                      </div>
                      <div
                        className="skill-card-line"
                        style={{ background: `linear-gradient(90deg, ${skill.color}, transparent)` }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Row 2 - Right to Left Infinite Marquee */}
              <div className="skills-marquee-row-wrapper">
                <div className="skills-marquee-row-track track-speed-2">
                  {[...row2Skills, ...row2Skills, ...row2Skills].map((skill, index) => (
                    <div
                      key={`r2-${skill.name}-${index}`}
                      className="skill-luxury-card skill-marquee-card"
                      onMouseEnter={() => cyberAudio.playHover()}
                    >
                      <div
                        className="skill-card-glow"
                        style={{ background: `radial-gradient(circle, ${skill.color}35 0%, transparent 70%)` }}
                      />
                      <div className="skill-card-top">
                        <div
                          className="skill-icon-bubble"
                          style={{ color: skill.color, borderColor: `${skill.color}45` }}
                        >
                          <i className={skill.icon}></i>
                        </div>
                        <span
                          className="skill-level-badge"
                          style={{ color: skill.color, borderColor: `${skill.color}40`, background: `${skill.color}15` }}
                        >
                          {skill.level}
                        </span>
                      </div>
                      <div className="skill-card-body">
                        <h3 className="skill-title">{skill.name}</h3>
                        <p className="skill-desc">{skill.desc}</p>
                      </div>
                      <div
                        className="skill-card-line"
                        style={{ background: `linear-gradient(90deg, ${skill.color}, transparent)` }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ) : activeTab === 'sphere' ? (
            <motion.div
              key="sphere-mode"
              className="skills-3d-sphere-wrap"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92, transition: { duration: 0.25 } }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="sphere-interactive-hint">
                <i className="fa-solid fa-hand-pointer"></i> Drag &amp; Rotate Tech Cloud in Real-time 3D
              </div>
              <TechSphere3D />
            </motion.div>
          ) : (
            <motion.div
              key={activeTab}
              className="skills-bento-grid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {filteredSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="skill-luxury-card"
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.035 }}
                  whileHover={{ y: -7, scale: 1.025 }}
                  onMouseEnter={() => cyberAudio.playHover()}
                >
                  {/* Ambient Glow Aura for this specific brand color */}
                  <div
                    className="skill-card-glow"
                    style={{ background: `radial-gradient(circle, ${skill.color}35 0%, transparent 70%)` }}
                  />

                  {/* Top Bar: Icon + Level Badge */}
                  <div className="skill-card-top">
                    <div
                      className="skill-icon-bubble"
                      style={{ color: skill.color, borderColor: `${skill.color}45` }}
                    >
                      <i className={skill.icon}></i>
                    </div>
                    <span
                      className="skill-level-badge"
                      style={{ color: skill.color, borderColor: `${skill.color}40`, background: `${skill.color}15` }}
                    >
                      {skill.level}
                    </span>
                  </div>

                  {/* Bottom Content: Name + Description */}
                  <div className="skill-card-body">
                    <h3 className="skill-title">{skill.name}</h3>
                    <p className="skill-desc">{skill.desc}</p>
                  </div>

                  {/* Bottom Accent Line */}
                  <div
                    className="skill-card-line"
                    style={{ background: `linear-gradient(90deg, ${skill.color}, transparent)` }}
                  />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Key Highlights Strip at Bottom ── */}
        <motion.div
          className="skills-highlights-bar"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="highlight-item">
            <i className="fa-solid fa-shield-halved highlight-icon"></i>
            <div>
              <div className="highlight-title">Full Stack Architecture</div>
              <div className="highlight-sub">Next.js 14, Express &amp; MongoDB</div>
            </div>
          </div>

          <div className="highlight-divider" />

          <div className="highlight-item">
            <i className="fa-solid fa-bolt highlight-icon"></i>
            <div>
              <div className="highlight-title">High-Performance APIs</div>
              <div className="highlight-sub">JWT Auth, Nodemailer &amp; Cloudinary</div>
            </div>
          </div>

          <div className="highlight-divider" />

          <div className="highlight-item">
            <i className="fa-solid fa-magnifying-glass-chart highlight-icon"></i>
            <div>
              <div className="highlight-title">Technical SEO &amp; Rich Schema</div>
              <div className="highlight-sub">Dynamic Sitemaps &amp; JSON-LD</div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
