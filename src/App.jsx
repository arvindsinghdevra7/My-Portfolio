import React, { useState, useEffect } from 'react';
import ParticlesBackground from './components/ParticlesBackground';
import ScrollProgressBar from './components/ScrollProgressBar';
import CyberCursor from './components/CyberCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import ProjectModal from './components/ProjectModal';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Toast from './components/Toast';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedProject, setSelectedProject] = useState(null);
  const [toasts, setToasts] = useState([]);

  // Toast notification helper
  const showToast = (message, icon = 'fa-circle-check') => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message, icon }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3500);
  };

  // Copy to clipboard helper
  const handleCopyText = (text, label) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        showToast(`${label} copied to clipboard!`, 'fa-circle-check');
      })
      .catch(() => {
        showToast(`Failed to copy ${label}`, 'fa-triangle-exclamation');
      });
  };

  // Scrollspy & Intersection Observer for sections
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');

    const handleScroll = () => {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollY < 150) {
        setActiveSection('hero');
        return;
      }

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 120;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Dynamic Cyber Cursor Halo & Dot */}
      <CyberCursor />

      {/* Top Neon Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Background Particles & Ambient Orbs */}
      <ParticlesBackground />

      {/* Main Navbar with Framer Motion LayoutId */}
      <Navbar activeSection={activeSection} />

      {/* Hero Section */}
      <Hero onCopyText={handleCopyText} onShowToast={showToast} />

      {/* About Section */}
      <About onCopyText={handleCopyText} />

      {/* Technical Skills Section */}
      <Skills />

      {/* Experience & Education */}
      <Experience />

      {/* Featured Projects with 3D Parallax Tilt */}
      <Projects onOpenProjectModal={(project) => setSelectedProject(project)} />

      {/* Certifications Showcase */}
      <Certifications />

      {/* Contact Section */}
      <Contact onCopyText={handleCopyText} onShowToast={showToast} />

      {/* Footer */}
      <Footer />

      {/* Project Details Modal with Framer AnimatePresence & Confetti */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Scroll to Top Button */}
      <ScrollToTop />

      {/* Floating Toast Notifications */}
      <Toast toasts={toasts} />
    </>
  );
}
