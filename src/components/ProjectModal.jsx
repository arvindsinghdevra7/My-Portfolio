import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { cyberAudio } from '../utils/cyberAudio';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        cyberAudio.playClick();
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  const fireProjectConfetti = () => {
    cyberAudio.playSuccess();
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#00f5ff', '#38bdf8', '#8b5cf6', '#ec4899', '#10b981']
      });
    } catch {
      // Ignore if canvas confetti not supported
    }
  };

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="modal-backdrop active"
          id="project-modal"
          aria-modal="true"
          role="dialog"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => {
            if (e.target.id === 'project-modal') {
              cyberAudio.playClick();
              onClose();
            }
          }}
        >
          <motion.div
            className="modal-dialog"
            initial={{ opacity: 0, scale: 0.88, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 30 }}
            transition={{ type: 'spring', stiffness: 350, damping: 26 }}
          >
            <button
              className="modal-close"
              onClick={() => {
                cyberAudio.playClick();
                onClose();
              }}
              aria-label="Close modal"
              onMouseEnter={() => cyberAudio.playHover()}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>

            <div className="modal-body" id="modal-content">
              <div className="modal-header-meta">
                <div className="section-tag" style={{ marginBottom: '0.5rem' }}>
                  {project.categoryLabel}
                </div>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>
                  {project.title}
                </h2>
                {project.isLive && (
                  <p
                    style={{
                      color: '#34d399',
                      fontWeight: 600,
                      fontSize: '0.9rem',
                      marginBottom: '1rem'
                    }}
                  >
                    <i className="fa-solid fa-circle-check"></i> Live Production URL:{' '}
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: 'var(--accent-cyan)', textDecoration: 'underline' }}
                      onClick={fireProjectConfetti}
                    >
                      {project.liveUrl}
                    </a>
                  </p>
                )}
              </div>

              <p style={{ color: 'var(--text-sub)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                {project.fullDesc}
              </p>

              <h4 style={{ fontSize: '1.1rem', color: 'var(--accent-cyan)', marginBottom: '0.75rem' }}>
                Key Architecture & Features:
              </h4>
              <ul className="modal-features-list">
                {project.features.map((feature, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    {feature}
                  </motion.li>
                ))}
              </ul>

              <h4
                style={{
                  fontSize: '1.1rem',
                  color: 'var(--accent-cyan)',
                  marginTop: '1.5rem',
                  marginBottom: '0.75rem'
                }}
              >
                Technologies Used:
              </h4>
              <div className="project-tags" style={{ marginBottom: '2rem' }}>
                {project.technologies.map((t, idx) => (
                  <span
                    key={idx}
                    className="tech-tag"
                    style={{ fontSize: '0.85rem', padding: '0.35rem 0.8rem' }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                {project.isLive && (
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={fireProjectConfetti}
                  >
                    <i className="fa-solid fa-globe"></i> Open Live Project
                  </motion.a>
                )}
                <motion.button
                  className="btn btn-secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    cyberAudio.playClick();
                    onClose();
                  }}
                >
                  Close
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
