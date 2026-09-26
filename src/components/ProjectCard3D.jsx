import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { cyberAudio } from '../utils/cyberAudio';

export default function ProjectCard3D({ project, onOpenModal }) {
  const cardRef = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for 3D tilt
  const springConfig = { damping: 20, stiffness: 260, mass: 0.2 };
  const mouseXSpring = useSpring(x, springConfig);
  const mouseYSpring = useSpring(y, springConfig);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7deg', '-7deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7deg', '7deg']);
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ['0%', '100%']);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ['0%', '100%']);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      className="glass-card project-card"
      layout
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.94 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d'
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
    >
      {/* Specular Glare Reflection Layer */}
      <motion.div
        className="project-card-glare"
        style={{
          background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(0, 245, 255, 0.15) 0%, transparent 60%)`
        }}
      />

      <div className="project-image-wrap">
        <img
          src={project.image}
          alt={project.title}
          className="project-img"
          loading="lazy"
        />
        {project.isLive && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-badge-live"
            onClick={(e) => {
              e.stopPropagation();
              cyberAudio.playClick();
            }}
          >
            <span className="status-dot"></span> Live Demo
          </a>
        )}
      </div>

      <div className="project-content">
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.8rem',
            color: 'var(--accent-cyan)',
            marginBottom: '0.4rem',
            fontWeight: 600
          }}
        >
          {project.categoryLabel}
        </div>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.shortDesc}</p>

        <div className="project-tags">
          {project.technologies.slice(0, 4).map((tech, idx) => (
            <span key={idx} className="tech-tag">
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="tech-tag">+{project.technologies.length - 4} more</span>
          )}
        </div>

        <div className="project-actions">
          <motion.button
            className="btn btn-outline btn-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={() => cyberAudio.playHover()}
            onClick={() => {
              cyberAudio.playClick();
              onOpenModal(project);
            }}
          >
            View Details <i className="fa-solid fa-arrow-right"></i>
          </motion.button>

          {project.isLive ? (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={() => cyberAudio.playHover()}
              onClick={() => cyberAudio.playClick()}
            >
              Visit Site <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </motion.a>
          ) : (
            <motion.button
              className="btn btn-secondary btn-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={() => cyberAudio.playHover()}
              onClick={() => {
                cyberAudio.playClick();
                onOpenModal(project);
              }}
            >
              Architecture
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
