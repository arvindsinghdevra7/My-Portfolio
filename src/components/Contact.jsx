import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';
import { cyberAudio } from '../utils/cyberAudio';

export default function Contact({ onCopyText, onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Full-Stack Next.js Project',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const subjectPills = [
    'Full-Stack Next.js Project',
    'Contract / Freelance Role',
    'Technical Consultation',
    'General Inquiry'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePillSelect = (topic) => {
    cyberAudio.playClick();
    setFormData((prev) => ({ ...prev, subject: topic }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;

    if (!name.trim() || !email.trim() || !message.trim()) {
      cyberAudio.playClick();
      onShowToast('Please fill out all required fields!', 'fa-circle-exclamation');
      return;
    }

    setIsSubmitting(true);
    cyberAudio.playClick();

    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY || personalInfo.web3FormsAccessKey;

    if (accessKey && accessKey.trim() !== '') {
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({
            access_key: accessKey.trim(),
            name: name.trim(),
            email: email.trim(),
            subject: subject || `Portfolio Inquiry from ${name.trim()}`,
            message: message.trim(),
            from_name: `${name.trim()} (Portfolio Contact)`
          })
        });

        const data = await response.json();
        console.log('Web3Forms submission response:', data);

        if (data.success) {
          cyberAudio.playSuccess();
          setSubmitSuccess(true);
          try {
            confetti({
              particleCount: 140,
              spread: 100,
              origin: { y: 0.65 },
              colors: ['#ff8a4c', '#f97316', '#c084fc', '#38bdf8', '#22c55e']
            });
          } catch {}
          onShowToast('Message transmitted successfully directly to Arvind!', 'fa-circle-check');
          setFormData({ name: '', email: '', subject: 'Full-Stack Next.js Project', message: '' });
          setTimeout(() => setSubmitSuccess(false), 9000);
          setIsSubmitting(false);
          return;
        } else {
          console.error('Web3Forms returned unsuccessful status:', data);
          throw new Error(data.message || 'Submission failed');
        }
      } catch (err) {
        console.error('Web3Forms submission error:', err);
        // Fallback to mailto on error
      }
    }

    // Fallback if accessKey is empty or network error occurred
    cyberAudio.playSuccess();
    try {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.7 },
        colors: ['#ff8a4c', '#f97316', '#c084fc', '#38bdf8', '#22c55e']
      });
    } catch {}

    const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      subject || `Portfolio Inquiry from ${name}`
    )}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nTopic: ${subject}\n\nMessage:\n${message}`)}`;

    window.location.href = mailtoLink;
    onShowToast('Redirecting to mail client to transmit message...', 'fa-paper-plane');
    setFormData({ name: '', email: '', subject: 'Full-Stack Next.js Project', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section className="contact-luxury-section" id="contact">
      <div className="contact-luxury-container">

        {/* ── Section Header ── */}
        <motion.div
          className="contact-luxury-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="contact-status-badge">
            <span className="contact-pulse-circle"></span>
            <span>AVAILABLE FOR NEW PROJECTS &amp; FULL-STACK ROLES</span>
          </div>
          <h2 className="contact-luxury-title">
            Let's Build Something <span className="gradient-sunset-text">Extraordinary</span>
          </h2>
          <p className="contact-luxury-subtitle">
            Have a project in mind, contract opportunity, or want to discuss scalable modern architectures? Reach out directly.
          </p>
        </motion.div>

        {/* ── Main Two-Column Layout ── */}
        <div className="contact-luxury-grid">

          {/* ── Left Column: Direct Luxury Channels ── */}
          <motion.div
            className="contact-channels-column"
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
          >
            {/* Email Card */}
            <motion.div
              className="channel-luxury-card"
              whileHover={{ y: -5, borderColor: 'rgba(240, 110, 45, 0.45)' }}
              onMouseEnter={() => cyberAudio.playHover()}
            >
              <div className="channel-icon-box email-box">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className="channel-info">
                <span className="channel-label">Direct Email</span>
                <a href={`mailto:${personalInfo.email}`} className="channel-value">
                  {personalInfo.email}
                </a>
              </div>
              <button
                className="channel-action-btn"
                title="Copy Email"
                onClick={() => {
                  cyberAudio.playClick();
                  onCopyText(personalInfo.email, 'Email');
                }}
              >
                <i className="fa-regular fa-copy"></i>
              </button>
            </motion.div>

            {/* Phone Card */}
            <motion.div
              className="channel-luxury-card"
              whileHover={{ y: -5, borderColor: 'rgba(240, 110, 45, 0.45)' }}
              onMouseEnter={() => cyberAudio.playHover()}
            >
              <div className="channel-icon-box phone-box">
                <i className="fa-solid fa-phone"></i>
              </div>
              <div className="channel-info">
                <span className="channel-label">Phone / Mobile</span>
                <a href={`tel:${personalInfo.phone}`} className="channel-value">
                  {personalInfo.phone}
                </a>
              </div>
              <button
                className="channel-action-btn"
                title="Copy Phone"
                onClick={() => {
                  cyberAudio.playClick();
                  onCopyText(personalInfo.phone, 'Phone');
                }}
              >
                <i className="fa-regular fa-copy"></i>
              </button>
            </motion.div>

            {/* LinkedIn & GitHub Card */}
            <motion.div
              className="channel-luxury-card"
              whileHover={{ y: -5, borderColor: 'rgba(56, 189, 248, 0.45)' }}
              onMouseEnter={() => cyberAudio.playHover()}
            >
              <div className="channel-icon-box linkedin-box">
                <i className="fa-brands fa-linkedin-in"></i>
              </div>
              <div className="channel-info">
                <span className="channel-label">Professional Network</span>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="channel-value"
                >
                  linkedin.com/in/arvind-singh-devra
                </a>
              </div>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="channel-action-btn"
                title="Visit LinkedIn"
                onClick={() => cyberAudio.playClick()}
              >
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </motion.div>

            {/* Location & Response Banner */}
            <div className="channel-location-banner">
              <div className="location-icon-pin">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div>
                <span className="location-title">Base Location &amp; Timezone</span>
                <p className="location-text">
                  Rajasthan, India • <strong>IST (UTC+5:30)</strong> | Open to Remote Worldwide
                </p>
              </div>
            </div>

            {/* Instant WhatsApp Action Button */}
            <motion.a
              href={personalInfo.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-luxury-cta"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onMouseEnter={() => cyberAudio.playHover()}
              onClick={() => cyberAudio.playClick()}
            >
              <i className="fa-brands fa-whatsapp"></i>
              <span>Direct WhatsApp Instant Message</span>
              <i className="fa-solid fa-arrow-right"></i>
            </motion.a>
          </motion.div>

          {/* ── Right Column: Luxury Contact Form ── */}
          <motion.div
            className="contact-form-luxury-card"
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
          >
            {/* Ambient Background Glow */}
            <div className="form-ambient-glow"></div>

            <div className="form-card-header">
              <h3 className="form-heading">Send a Direct Message</h3>
              <span className="form-subheading">I typically respond within a few hours.</span>
            </div>

            {submitSuccess && (
              <motion.div
                className="form-success-banner"
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.35 }}
              >
                <div className="success-icon-wrap">
                  <i className="fa-solid fa-circle-check"></i>
                </div>
                <div className="success-banner-content">
                  <span className="success-banner-title">Message Delivered Successfully!</span>
                  <p className="success-banner-desc">Thank you for getting in touch. Arvind will respond to your email shortly.</p>
                </div>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="contact-luxury-form">

              {/* Topic Pills Selection */}
              <div className="topic-selector-group">
                <label className="field-label">I'm interested in discussing:</label>
                <div className="topic-pills-row">
                  {subjectPills.map((topic) => {
                    const isSelected = formData.subject === topic;
                    return (
                      <button
                        key={topic}
                        type="button"
                        className={`topic-pill ${isSelected ? 'active' : ''}`}
                        onClick={() => handlePillSelect(topic)}
                      >
                        {isSelected && <i className="fa-solid fa-check"></i>}
                        <span>{topic}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Two Column Name & Email */}
              <div className="form-double-row">
                <div className="field-group">
                  <label htmlFor="user_name" className="field-label">
                    Your Name *
                  </label>
                  <div className="field-input-wrap">
                    <i className="fa-solid fa-user field-icon"></i>
                    <input
                      type="text"
                      id="user_name"
                      name="name"
                      className="luxury-input"
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="field-group">
                  <label htmlFor="user_email" className="field-label">
                    Email Address *
                  </label>
                  <div className="field-input-wrap">
                    <i className="fa-solid fa-envelope field-icon"></i>
                    <input
                      type="email"
                      id="user_email"
                      name="email"
                      className="luxury-input"
                      placeholder="e.g. rahul@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Message Box */}
              <div className="field-group">
                <label htmlFor="user_message" className="field-label">
                  Your Message *
                </label>
                <div className="field-input-wrap">
                  <textarea
                    id="user_message"
                    name="message"
                    className="luxury-textarea"
                    placeholder="Tell me about your project, timeline, or engineering opportunity..."
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    required
                  ></textarea>
                </div>
              </div>

              {/* Submit CTA */}
              <motion.button
                type="submit"
                className={`submit-luxury-btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
                whileHover={!isSubmitting ? { scale: 1.02, y: -2 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                onMouseEnter={() => !isSubmitting && cyberAudio.playHover()}
              >
                {isSubmitting ? (
                  <>
                    <i className="fa-solid fa-spinner fa-spin"></i>
                    <span>Transmitting Message...</span>
                  </>
                ) : (
                  <>
                    <i className="fa-solid fa-paper-plane"></i>
                    <span>Send Message Directly</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

