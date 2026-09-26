import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { experienceData, achievementsData } from '../data/portfolioData';
import { cyberAudio } from '../utils/cyberAudio';

const experiences = [
  {
    role: 'Full Stack Developer Intern — Trainee',
    company: 'GenzTeck',
    location: 'Jaipur, Rajasthan',
    period: 'July 2026 – Present',
    isCurrent: true,
    type: 'Full-Stack Engineering',
    color: '#ff8a4c',
    icon: 'fa-solid fa-briefcase',
    skills: ['Next.js', 'Node.js', 'MongoDB', 'JWT Auth', 'Cloudinary', 'Technical SEO'],
    points: [
      'Engineered and deployed a production-ready full-stack platform (Parth Car Rental) with custom booking flows and fleet management.',
      'Constructed a secure administrative dashboard with role-based JWT authentication and protected RESTful API endpoints.',
      'Integrated Cloudinary media management with server-side Sharp compression and Nodemailer for automated email notifications.',
      'Architected technical SEO framework including dynamic XML sitemaps, robots.js, and per-page JSON-LD structured schemas.'
    ]
  },
  {
    role: 'Full Stack Developer Intern — Trainee',
    company: 'GO TECH SOLUTION',
    location: 'Udaipur, Rajasthan',
    period: 'March 2026 – July 2026',
    isCurrent: false,
    type: 'Next.js & TypeScript Systems',
    color: '#38bdf8',
    icon: 'fa-solid fa-laptop-code',
    skills: ['Next.js', 'TypeScript', 'Node.js', 'REST APIs', 'Git', 'Admin Dashboards'],
    points: [
      'Developed and maintained full-stack web applications using Next.js, TypeScript, and Node.js with scalable component architectures.',
      'Designed responsive admin panel interfaces for content administration, user privileges, and business data analytics.',
      'Utilized collaborative Git/GitHub feature branches, identified and resolved critical frontend and API performance bottlenecks.'
    ]
  },
  {
    role: 'Frontend Developer Intern — Summer Trainee',
    company: 'State Remote Sensing Application Centre (SRSAC)',
    location: 'Jodhpur, Rajasthan',
    period: 'June 2024 – Aug 2024',
    isCurrent: false,
    type: 'Government Spatial Web Portal',
    color: '#22c55e',
    icon: 'fa-solid fa-satellite',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'UI/UX Design', 'Cross-Browser QA'],
    points: [
      'Developed responsive UI components for the official government remote sensing portal using HTML, CSS, and modern JavaScript.',
      'Collaborated closely with department engineers to ensure accessible typography, clean layouts, and mobile viewport compatibility.'
    ]
  }
];

const educations = [
  {
    degree: 'Bachelor of Technology in Computer Science (B.Tech CSE)',
    institution: 'University College of Engineering and Technology (UCET)',
    location: 'Bikaner, Rajasthan',
    period: '2021 – 2025',
    grade: 'CGPA: 7.19 / 10',
    color: '#a855f7',
    icon: 'fa-solid fa-graduation-cap',
    highlights: [
      'Core focus on Data Structures & Algorithms, Database Management Systems (DBMS), Operating Systems, and Full-Stack Engineering.',
      'Graduated with strong technical foundation in software design, web architectures, and collaborative engineering practices.'
    ]
  },
  {
    degree: 'Senior Secondary Education (Class 12th — Science & Mathematics)',
    institution: 'NavBharat Sr. Sec. School',
    location: 'Udaipur, Rajasthan',
    period: '2020 – 2021',
    grade: '88.80% Score',
    color: '#f59e0b',
    icon: 'fa-solid fa-school',
    highlights: [
      'Achieved distinction of 88.80% in Senior Secondary Board Examinations with Mathematics and Physics majors.',
      'Strong logical foundation in analytical problem solving and numerical reasoning.'
    ]
  }
];

export default function Experience() {
  const [activeTab, setActiveTab] = useState('work'); // 'work' | 'education' | 'honors'

  const tabs = [
    { id: 'work', label: 'Work Experience', count: experiences.length, icon: 'fa-solid fa-briefcase' },
    { id: 'education', label: 'Education & Degrees', count: educations.length, icon: 'fa-solid fa-graduation-cap' },
    { id: 'honors', label: 'Honors & Milestones', count: achievementsData.length, icon: 'fa-solid fa-trophy' }
  ];

  return (
    <section className="experience-framer-section" id="experience">
      <div className="experience-framer-container">

        {/* ── Section Header ── */}
        <motion.div
          className="experience-framer-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="experience-tag-pill">
            <i className="fa-solid fa-timeline"></i> Career &amp; Academic Trajectory
          </div>
          <h2 className="experience-framer-title">
            Experience &amp; <span className="gradient-sunset-text">Education</span>
          </h2>
          <p className="experience-framer-subtitle">
            A comprehensive track record of production-level internships, technical achievements, and rigorous engineering academics.
          </p>

          {/* ── Interactive Tab Switcher ── */}
          <div className="experience-tabs-track">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  className={`experience-tab-btn ${isActive ? 'active' : ''}`}
                  onClick={() => {
                    cyberAudio.playClick();
                    setActiveTab(tab.id);
                  }}
                  onMouseEnter={() => cyberAudio.playHover()}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeExpTabGlaze"
                      className="experience-tab-glaze"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="experience-tab-inner">
                    <i className={tab.icon}></i>
                    <span>{tab.label}</span>
                    <span className="exp-tab-count">{tab.count}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* ── Animated Tab Content ── */}
        <AnimatePresence mode="wait">
          {activeTab === 'work' && (
            <motion.div
              key="work-tab"
              className="experience-cards-stack"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  className="exp-luxury-card"
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  whileHover={{ y: -5 }}
                  onMouseEnter={() => cyberAudio.playHover()}
                >
                  {/* Left Accent Bar */}
                  <div className="exp-card-left-bar" style={{ background: exp.color }} />

                  <div className="exp-card-main">
                    {/* Top row: Role, Period, Live Badge */}
                    <div className="exp-card-header-row">
                      <div>
                        <div className="exp-type-pill" style={{ color: exp.color, borderColor: `${exp.color}40`, background: `${exp.color}15` }}>
                          {exp.type}
                        </div>
                        <h3 className="exp-role-title">{exp.role}</h3>
                        <div className="exp-company-info">
                          <i className={exp.icon} style={{ color: exp.color }}></i>
                          <strong>{exp.company}</strong>
                          <span className="exp-loc-dot">•</span>
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      <div className="exp-period-wrap">
                        {exp.isCurrent && (
                          <span className="exp-live-pulse">
                            <span className="pulse-circle"></span>
                            ACTIVE
                          </span>
                        )}
                        <span className="exp-period-badge">{exp.period}</span>
                      </div>
                    </div>

                    {/* Bullet Points */}
                    <ul className="exp-points-list">
                      {exp.points.map((pt, pIdx) => (
                        <li key={pIdx} className="exp-point-item">
                          <i className="fa-solid fa-check-circle exp-check-icon" style={{ color: exp.color }}></i>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Skill Chips */}
                    <div className="exp-tech-chips">
                      {exp.skills.map((skill) => (
                        <span key={skill} className="exp-skill-chip">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === 'education' && (
            <motion.div
              key="education-tab"
              className="experience-cards-stack"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {educations.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  className="exp-luxury-card edu-card"
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  whileHover={{ y: -5 }}
                  onMouseEnter={() => cyberAudio.playHover()}
                >
                  <div className="exp-card-left-bar" style={{ background: edu.color }} />

                  <div className="exp-card-main">
                    <div className="exp-card-header-row">
                      <div>
                        <div className="exp-type-pill" style={{ color: edu.color, borderColor: `${edu.color}40`, background: `${edu.color}15` }}>
                          <i className={edu.icon}></i> Academic Qualification
                        </div>
                        <h3 className="exp-role-title">{edu.degree}</h3>
                        <div className="exp-company-info">
                          <strong>{edu.institution}</strong>
                          <span className="exp-loc-dot">•</span>
                          <span>{edu.location}</span>
                        </div>
                      </div>

                      <div className="exp-period-wrap">
                        <span className="edu-grade-badge" style={{ color: edu.color, borderColor: `${edu.color}45`, background: `${edu.color}12` }}>
                          {edu.grade}
                        </span>
                        <span className="exp-period-badge">{edu.period}</span>
                      </div>
                    </div>

                    <ul className="exp-points-list">
                      {edu.highlights.map((hl, hIdx) => (
                        <li key={hIdx} className="exp-point-item">
                          <i className="fa-solid fa-graduation-cap exp-check-icon" style={{ color: edu.color }}></i>
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === 'honors' && (
            <motion.div
              key="honors-tab"
              className="honors-luxury-grid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {achievementsData.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="honor-luxury-card"
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  onMouseEnter={() => cyberAudio.playHover()}
                >
                  <div className="honor-icon-box">
                    <i className={item.icon}></i>
                  </div>
                  <div className="honor-card-body">
                    <span className="honor-date-badge">{item.date}</span>
                    <h3 className="honor-title">{item.title}</h3>
                    <div className="honor-issuer">
                      <i className={item.issuerIcon}></i>
                      <span>{item.issuer}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
