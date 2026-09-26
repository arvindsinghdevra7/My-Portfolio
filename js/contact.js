/**
 * Anand Giri Goswami Portfolio
 * Contact Form & Copy to Clipboard Controller
 */

// Toast Notification Helper
function showToast(message, icon = 'fa-circle-check') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i class="fa-solid ${icon}" style="color: var(--accent-cyan);"></i> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.4s ease';
    setTimeout(() => toast.remove(), 400);
  }, 3500);
}

// Copy to Clipboard Helper
function copyText(text, label) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(`${label} copied to clipboard!`);
  }).catch(() => {
    showToast(`Failed to copy ${label}`, 'fa-triangle-exclamation');
  });
}

// Contact Form Handler
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('user_name').value.trim();
      const email = document.getElementById('user_email').value.trim();
      const subject = document.getElementById('user_subject').value.trim();
      const message = document.getElementById('user_message').value.trim();

      if (!name || !email || !message) {
        showToast('Please fill out all required fields!', 'fa-circle-exclamation');
        return;
      }

      // Format mailto link for direct submission
      const mailtoLink = `mailto:Goswamianand054@gmail.com?subject=${encodeURIComponent(subject || 'Portfolio Inquiry from ' + name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
      
      window.location.href = mailtoLink;
      showToast('Opening your email client to send message...', 'fa-paper-plane');
      contactForm.reset();
    });
  }
});
