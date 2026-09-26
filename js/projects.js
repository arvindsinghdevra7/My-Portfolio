/**
 * Anand Giri Goswami Portfolio
 * Projects Data & Modal Controller
 */

const projectsData = [
  {
    id: 'car-rental',
    title: 'Car Rental Website',
    category: 'mern live',
    categoryLabel: 'MERN Stack • Live Production',
    isLive: true,
    liveUrl: 'https://parthcarrental.com/',
    githubUrl: '#',
    image: 'assets/images/project-car-rental.svg',
    shortDesc: 'A full-fledged, scalable car booking web platform with responsive mobile/tablet UI, customer registration, and booking history.',
    fullDesc: 'Developed a high-performance, web-based system for car rental bookings. Features customer authentication, fleet selection, rental calendar scheduling, and automated booking history tracking. Built with RESTful APIs, optimized database queries, and a fully responsive layout.',
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'REST API', 'Responsive UI'],
    features: [
      'Live in Production at parthcarrental.com',
      'Customer Authentication & Profile Management',
      'Real-time Vehicle Availability & Booking Engine',
      'Booking History & Invoice Generation',
      'Fully Mobile & Tablet Optimized Responsive Design',
      'Scalable & Performance-Optimized MERN Backend'
    ]
  },
  {
    id: 'food-app',
    title: 'Food Ordering App',
    category: 'mern',
    categoryLabel: 'MERN Stack',
    isLive: false,
    liveUrl: '',
    githubUrl: '#',
    image: 'assets/images/project-food-app.svg',
    shortDesc: 'End-to-end full-stack food delivery application with RESTful APIs and seamless online payment gateway integration.',
    fullDesc: 'A complete food delivery solution built from scratch using the MERN stack. Includes restaurant menus, dynamic cart management, order tracking, address verification, and integrated payment gateway for secure transactions.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Payment Gateway', 'JWT Auth'],
    features: [
      'Interactive Restaurant Menus & Category Filtering',
      'Cart State Management & Checkout Flow',
      'Payment Gateway Integration for Fast Orders',
      'Real-time Order Status & Tracking',
      'Admin Panel for Food Item & Menu Management'
    ]
  },
  {
    id: 'dress-rental',
    title: 'Dress Rental Platform',
    category: 'mern',
    categoryLabel: 'MERN Stack',
    isLive: false,
    liveUrl: '',
    githubUrl: '#',
    image: 'assets/images/project-dress-rental.svg',
    shortDesc: 'End-to-end dress rental platform featuring rental scheduling, real-time availability tracking, and admin workflows.',
    fullDesc: 'An innovative fashion rental web application where users can browse designer dresses, check date-specific availability, schedule rental durations, and book securely. Provides separate dedicated workflows for customers and administrators.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'CSS3'],
    features: [
      'Interactive Product Catalog with Rich Filters',
      'Date-Picker Rental Scheduling & Conflict Detection',
      'Secure User Authentication & Profile History',
      'Dual Workflow: Customer Storefront & Admin Dashboard',
      'Availability Status Tracking & Inventory Alerts'
    ]
  },
  {
    id: 'electronics-ecommerce',
    title: 'Electronics E-Commerce Platform',
    category: 'mern',
    categoryLabel: 'MERN Stack',
    isLive: false,
    liveUrl: '',
    githubUrl: '#',
    image: 'assets/images/project-ecommerce.svg',
    shortDesc: 'Full-stack gadget store with secure JWT auth, product catalog management, dynamic shopping cart, and order processing.',
    fullDesc: 'Scalable electronics e-commerce web platform engineered with MongoDB, Express, React, and Node.js. Features comprehensive product management, user reviews, shopping cart synchronization, and order fulfillment pipelines.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Redux', 'RESTful API'],
    features: [
      'Secure Authentication with JWT & bcrypt',
      'Dynamic Product Management & Search Filtering',
      'Persistent Shopping Cart & Wishlist',
      'Order Placement & Customer History Dashboard',
      'Scalable Backend Architecture with Express & MongoDB'
    ]
  },
  {
    id: 'hotel-management',
    title: 'Hotel Management System',
    category: 'php',
    categoryLabel: 'PHP & MySQL',
    isLive: false,
    liveUrl: '',
    githubUrl: '#',
    image: 'assets/images/project-hotel.svg',
    shortDesc: 'Web-based hotel reservation system with room allocation, customer registration, booking history, and responsive UI.',
    fullDesc: 'Traditional web-based database management system created for hospitality operations. Handles room inventory, check-in/check-out dates, customer records, and invoice tracking with PHP backend and MySQL relational database.',
    technologies: ['PHP', 'MySQL', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap'],
    features: [
      'Room Booking & Real-time Allocation System',
      'Customer Registration & Record Database',
      'Reservation History & Billing Summary',
      'Responsive UI for Receptionist and Guest Access',
      'Relational Database Design with Structured MySQL Tables'
    ]
  }
];

// Function to render projects
function renderProjects(filter = 'all') {
  const container = document.getElementById('projects-container');
  if (!container) return;

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.category.includes(filter));

  container.innerHTML = filteredProjects.map(project => `
    <div class="glass-card project-card reveal">
      <div class="project-image-wrap">
        <img src="${project.image}" alt="${project.title}" class="project-img" loading="lazy" />
        ${project.isLive ? `
          <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="project-badge-live">
            <span class="status-dot"></span> Live Demo
          </a>
        ` : ''}
      </div>
      
      <div class="project-content">
        <div style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--accent-cyan); margin-bottom: 0.4rem;">
          ${project.categoryLabel}
        </div>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-desc">${project.shortDesc}</p>
        
        <div class="project-tags">
          ${project.technologies.slice(0, 4).map(t => `<span class="tech-tag">${t}</span>`).join('')}
          ${project.technologies.length > 4 ? `<span class="tech-tag">+${project.technologies.length - 4} more</span>` : ''}
        </div>
        
        <div class="project-actions">
          <button class="btn btn-outline btn-sm" onclick="openProjectModal('${project.id}')">
            View Details <i class="fa-solid fa-arrow-right"></i>
          </button>
          
          ${project.isLive ? `
            <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
              Visit Site <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          ` : `
            <button class="btn btn-secondary btn-sm" onclick="openProjectModal('${project.id}')">
              Learn More
            </button>
          `}
        </div>
      </div>
    </div>
  `).join('');
}

// Filter button handlers
function initProjectFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      renderProjects(filter);
    });
  });
}

// Modal functions
function openProjectModal(projectId) {
  const project = projectsData.find(p => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById('project-modal');
  const modalContent = document.getElementById('modal-content');

  modalContent.innerHTML = `
    <div class="modal-header-meta">
      <div class="section-tag" style="margin-bottom: 0.5rem;">${project.categoryLabel}</div>
      <h2 style="font-size: 1.8rem; margin-bottom: 0.5rem; color: var(--text-main);">${project.title}</h2>
      ${project.isLive ? `
        <p style="color: #34d399; font-weight: 600; font-size: 0.9rem; margin-bottom: 1rem;">
          <i class="fa-solid fa-circle-check"></i> Live Production URL: 
          <a href="${project.liveUrl}" target="_blank" rel="noopener" style="color: var(--accent-cyan); text-decoration: underline;">
            ${project.liveUrl}
          </a>
        </p>
      ` : ''}
    </div>
    
    <p style="color: var(--text-sub); line-height: 1.7; margin-bottom: 1.5rem;">${project.fullDesc}</p>
    
    <h4 style="font-size: 1.1rem; color: var(--accent-cyan); margin-bottom: 0.75rem;">Key Architecture & Features:</h4>
    <ul class="modal-features-list">
      ${project.features.map(f => `<li>${f}</li>`).join('')}
    </ul>
    
    <h4 style="font-size: 1.1rem; color: var(--accent-cyan); margin-top: 1.5rem; margin-bottom: 0.75rem;">Technologies Used:</h4>
    <div class="project-tags" style="margin-bottom: 2rem;">
      ${project.technologies.map(t => `<span class="tech-tag" style="font-size: 0.85rem; padding: 0.35rem 0.8rem;">${t}</span>`).join('')}
    </div>
    
    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      ${project.isLive ? `
        <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
          <i class="fa-solid fa-globe"></i> Open Live Project
        </a>
      ` : ''}
      <button class="btn btn-secondary" onclick="closeProjectModal()">
        Close
      </button>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  const modal = document.getElementById('project-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}

// Close on backdrop click & escape key
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('project-modal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeProjectModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeProjectModal();
  });

  renderProjects('all');
  initProjectFilters();
});
