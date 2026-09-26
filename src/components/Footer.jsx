import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="logo">
          <span className="logo-tag">&lt;ASD /&gt;</span> {personalInfo.name}
        </div>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
          Designed & Engineered with ❤️ using Next.js, React.js & Modern Web Technologies.
        </p>
        <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>
          © 2026 {personalInfo.name}. All rights reserved. • Rajasthan, India
        </p>
      </div>
    </footer>
  );
}
