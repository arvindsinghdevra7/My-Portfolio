export const personalInfo = {
  name: 'Arvind Singh Devra',
  shortName: 'Arvind Singh Devra',
  tagline: 'Full Stack Developer',
  email: 'arvindsinghdevra85@gmail.com',
  phone: '+91 8619221676',
  location: 'Rajasthan, India',
  github: 'https://github.com',
  linkedin: 'https://www.linkedin.com/in/arvind-singh-devra-673652249/',
  whatsapp: 'https://wa.me/918619221676?text=Hi%20Arvind,%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect!',
  web3FormsAccessKey: '', // Stored securely in .env (VITE_WEB3FORMS_KEY)
  summary:
    'Full Stack Developer with hands-on experience building production-ready web applications using Next.js, Node.js, and MongoDB. Skilled in developing custom admin dashboards, RESTful APIs, JWT authentication, and technical SEO, with a focus on writing clean, maintainable code.'
};

export const heroRoles = [
  'Full Stack Developer (Next.js & MERN)',
  'Next.js & React.js Specialist',
  'Node.js & REST API Engineer',
  'Admin Dashboard & SEO Architect'
];

export const projectsData = [
  {
    id: 'parth-car-rental',
    title: 'Parth Car Rental Platform',
    category: 'nextjs live fullstack',
    categoryLabel: 'Next.js • Node.js • MongoDB • Live in Production',
    isLive: true,
    liveUrl: 'https://parthcarrental.com/',
    githubUrl: '#',
    image: '/assets/images/project-parth-car-rental.png',
    accentColor: '#ff8a4c',
    tagline: 'Production Car Rental & Fleet Management Platform',
    shortDesc:
      'Production-ready full-stack car rental platform with online booking flows, fleet management, tours, customer reviews, and custom admin dashboard.',
    fullDesc:
      'Engineered and deployed a production-grade car rental platform for a live business client using Next.js, Node.js, Express.js, and MongoDB. Features an end-to-end booking flow, custom admin dashboard with role-based JWT authentication, Cloudinary media management with server-side Sharp compression, and automated email confirmations via Nodemailer. Designed with Tailwind CSS and boosted with comprehensive technical SEO (dynamic sitemap, robots.js, and JSON-LD schema).',
    technologies: [
      'Next.js',
      'Node.js',
      'MongoDB',
      'JWT Auth',
      'Cloudinary',
      'Tailwind CSS',
      'Sharp',
      'Nodemailer',
      'Technical SEO'
    ],
    features: [
      'Live in Production at parthcarrental.com for active business customers',
      'Custom Admin Dashboard with Role-Based JWT Authentication to manage fleet, bookings, tours, reviews, and blogs',
      'Online Booking & Dynamic Fleet Management Engine with live status tracking',
      'Server-side Image Compression with Sharp and Cloudinary CDN storage',
      'Automated Booking Confirmation & Notification Emails via Nodemailer',
      'Advanced On-Page & Technical SEO: Dynamic sitemap, robots.js, per-page JSON-LD structured schema (LocalBusiness, FAQPage, BreadcrumbList)',
      '100% Mobile & Desktop Responsive Design with Tailwind CSS'
    ]
  },
  {
    id: 'go-finance',
    title: 'Go Finance Platform',
    category: 'nextjs live fullstack',
    categoryLabel: 'Next.js • TypeScript • Node.js • Live in Production',
    isLive: true,
    liveUrl: 'https://go-infofinance.com/',
    githubUrl: '#',
    image: '/assets/images/project-go-finance.png',
    accentColor: '#f43f5e',
    tagline: 'Enterprise Financial Analytics & Admin Suite',
    shortDesc:
      'Full-stack enterprise financial platform with real-time financial telemetry, dynamic administrative panel, transaction tracking, and secure RESTful APIs.',
    fullDesc:
      'Engineered a scalable full-stack financial management web platform (Go Finance) powered by Next.js, TypeScript, Node.js, and MongoDB. Features dynamic administrative panels that allow administrators to oversee business data, fiscal metrics, customer inquiries, access privileges, and analytical reports with secure RESTful APIs.',
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'REST APIs', 'Tailwind CSS'],
    features: [
      'Live in Production at go-infofinance.com for financial operations',
      'Interactive Financial Analytics Dashboard for business data and user administration',
      'Secure & Scalable RESTful APIs built using Node.js, Express, and JWT Auth',
      'Strongly Typed Architecture using TypeScript for enterprise reliability',
      'Modern, Responsive Glass UI with Tailwind CSS and Next.js server/client components',
      'Integrated SEO optimization techniques with sitemap generation and structured XML data'
    ]
  },
  {
    id: 'weather-widget',
    title: 'Real-Time Meteorological Weather Widget',
    category: 'frontend',
    categoryLabel: 'JavaScript • OpenWeatherMap API • Geolocation',
    isLive: false,
    liveUrl: '',
    githubUrl: '#',
    image: '/assets/images/project-weather-widget.jpg',
    accentColor: '#22c55e',
    tagline: 'Fast Debounce Meteorological Forecasting Engine',
    shortDesc:
      'Dynamic weather forecasting application fetching real-time meteorological metrics with location search, debounce querying, and responsive glass UI.',
    fullDesc:
      'Engineered a dynamic, lightweight weather application integrated with the OpenWeatherMap API. Implements fast debounce search, real-time weather metrics (temperature, humidity, wind speed, weather conditions), responsive mobile-first layouts, and optimized API caching for fluid user experience.',
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'OpenWeatherMap API', 'REST API', 'Responsive UI'],
    features: [
      'Real-time Meteorological Data fetching via OpenWeatherMap API',
      'City Search with Fast Response & Error Handling for invalid locations',
      'Optimized API calls and caching routines for instantaneous UI updates',
      'Responsive Glassmorphism Design crafted for desktop and mobile viewports',
      'Clean modular JavaScript architecture without external library bloat'
    ]
  }
];

export const skillsData = [
  {
    title: 'Frontend Libraries & Frameworks',
    subtitle: 'Modern UI & Component Architecture',
    icon: 'fa-solid fa-layer-group',
    skills: [
      { name: 'React.js', icon: 'fa-brands fa-react' },
      { name: 'Next.js', icon: 'fa-solid fa-bolt' },
      { name: 'Redux', icon: 'fa-solid fa-cubes' },
      { name: 'Tailwind CSS', icon: 'fa-brands fa-css3' },
      { name: 'HTML5', icon: 'fa-brands fa-html5' },
      { name: 'CSS3', icon: 'fa-brands fa-css3-alt' }
    ]
  },
  {
    title: 'Backend & Authentication',
    subtitle: 'Server-side Logic & Secure APIs',
    icon: 'fa-solid fa-server',
    skills: [
      { name: 'Node.js', icon: 'fa-brands fa-node-js' },
      { name: 'Express.js', icon: 'fa-solid fa-network-wired' },
      { name: 'REST APIs', icon: 'fa-solid fa-arrows-split-up-and-left' },
      { name: 'JWT Auth', icon: 'fa-solid fa-shield-halved' },
      { name: 'Nodemailer', icon: 'fa-solid fa-envelope-open-text' },
      { name: 'Cloudinary / Sharp', icon: 'fa-solid fa-cloud-arrow-up' }
    ]
  },
  {
    title: 'Database & Technical SEO',
    subtitle: 'Data Architecture & Search Optimization',
    icon: 'fa-solid fa-database',
    skills: [
      { name: 'MongoDB', icon: 'fa-solid fa-leaf' },
      { name: 'Mongoose', icon: 'fa-solid fa-database' },
      { name: 'MongoDB Atlas', icon: 'fa-solid fa-cloud' },
      { name: 'On-Page SEO', icon: 'fa-solid fa-magnifying-glass' },
      { name: 'Technical SEO', icon: 'fa-solid fa-chart-line' },
      { name: 'JSON-LD Schema', icon: 'fa-solid fa-code' }
    ]
  },
  {
    title: 'Languages & Developer Tools',
    subtitle: 'Syntax, IDEs & Version Control',
    icon: 'fa-solid fa-terminal',
    skills: [
      { name: 'JavaScript', icon: 'fa-brands fa-js' },
      { name: 'TypeScript', icon: 'fa-solid fa-code' },
      { name: 'Python', icon: 'fa-brands fa-python' },
      { name: 'Git', icon: 'fa-brands fa-git-alt' },
      { name: 'GitHub', icon: 'fa-brands fa-github' },
      { name: 'Postman', icon: 'fa-solid fa-paper-plane' },
      { name: 'VS Code', icon: 'fa-solid fa-laptop-code' }
    ]
  }
];

export const experienceData = [
  {
    role: 'Full Stack Developer Intern — Trainee',
    period: 'July 2026 – Present',
    company: 'GenzTeck • Jaipur, Rajasthan',
    companyIcon: 'fa-solid fa-briefcase',
    iconColor: 'var(--accent-cyan)',
    points: [
      'Developed a production-ready full-stack car rental platform using Next.js, JavaScript, Node.js, Express.js, and MongoDB for a real business client.',
      'Built a custom admin dashboard with JWT-based role authentication to manage fleet, bookings, tours, blog posts, reviews, and global site settings.',
      'Integrated Cloudinary for media management with server-side image compression (Sharp) and Nodemailer for automated booking confirmation emails.',
      'Implemented advanced on-page and technical SEO — dynamic sitemap, robots.js, and per-page JSON-LD structured schema.'
    ]
  },
  {
    role: 'Full Stack Developer Intern — Trainee',
    period: 'March 2026 – July 2026',
    company: 'GO TECH SOLUTION • Udaipur, Rajasthan',
    companyIcon: 'fa-solid fa-laptop-code',
    iconColor: 'var(--accent-purple)',
    points: [
      'Developed and maintained full-stack web applications using Next.js, TypeScript, and Node.js.',
      'Designed and built admin panel dashboards for managing website content, users, and business data, ensuring a user-friendly frontend.',
      'Used Git and GitHub for version control and collaborative development. Identified and fixed bugs, improving application performance and stability.'
    ]
  },
  {
    role: 'Frontend Developer Intern — Summer Trainee',
    period: 'June 2024 – Aug 2024',
    company: 'State Remote Sensing Application Centre • Jodhpur, Rajasthan',
    companyIcon: 'fa-solid fa-satellite',
    iconColor: 'var(--accent-emerald)',
    points: [
      'Developed the official website using HTML, CSS, and JavaScript, ensuring a user-friendly frontend.',
      'Collaborated with team members to integrate frontend components, contributing to overall design and user experience.'
    ]
  },
  {
    role: 'Bachelor of Technology in Computer Science (B.Tech CSE)',
    period: 'June 2021 – June 2025',
    company: 'University College of Engineering and Technology, Bikaner, Rajasthan',
    companyIcon: 'fa-solid fa-graduation-cap',
    iconColor: 'var(--accent-cyan)',
    points: [
      'Completed B.Tech in Computer Science with a strong academic standing of CGPA: 7.19 / 10.',
      'Comprehensive study of Data Structures, Algorithms, Database Management Systems, Computer Networks, and Full-Stack Engineering.'
    ]
  },
  {
    role: 'Senior Secondary Education (12th Standard)',
    period: 'July 2020 – July 2021',
    company: 'NavBharat Sr. Sec. School • Udaipur, Rajasthan',
    companyIcon: 'fa-solid fa-school',
    iconColor: '#f59e0b',
    points: [
      'Secured 88.80% in Senior Secondary Examination with Mathematics and Science stream.'
    ]
  }
];

export const achievementsData = [
  {
    id: 'chess-champ',
    title: '1st Position – Inter-College Chess Championship',
    category: 'sports',
    categoryLabel: 'University Sports Championship',
    badge: 'Gold Medalist • 1st Place',
    issuer: 'UCET Bikaner Annual Sports Meet',
    issuerIcon: 'fa-solid fa-trophy',
    date: 'Champion / Gold Medal',
    icon: 'fa-solid fa-chess-king',
    color: '#f59e0b',
    glowColor: 'rgba(245, 158, 11, 0.25)',
    description:
      'Secured 1st position in the university-wide Inter-College Chess Tournament, demonstrating strategic foresight, rapid tactical calculation, and competitive resilience under strict time controls.',
    highlights: [
      'Undefeated tournament run across 6 knockout rounds',
      'Awarded Gold Medal and University Sports Merit Certificate'
    ]
  },
  {
    id: 'live-deployment',
    title: 'Commercial Production Web Platform Launch',
    category: 'engineering',
    categoryLabel: 'Live Client Deployment',
    badge: 'Live in Production',
    issuer: 'Parth Car Rental (parthcarrental.com)',
    issuerIcon: 'fa-solid fa-globe',
    date: 'Active Production Platform',
    icon: 'fa-solid fa-rocket',
    color: '#ff8a4c',
    glowColor: 'rgba(255, 138, 76, 0.25)',
    description:
      'Architected and deployed full-stack platform for a live commercial business client with custom booking flow, JWT admin control panel, and automated Nodemailer confirmation pipelines.',
    highlights: [
      'Serving active daily customers across Udaipur & Rajasthan',
      'Zero-downtime MongoDB cloud cluster with automated Cloudinary media'
    ]
  },
  {
    id: 'seo-mastery',
    title: 'Technical SEO & Structured Schema Architecture',
    category: 'engineering',
    categoryLabel: 'Next.js SEO Framework',
    badge: '100% Google Indexation',
    issuer: 'Dynamic XML Sitemaps, Robots.js & JSON-LD',
    issuerIcon: 'fa-solid fa-chart-line',
    date: 'Full Indexation Ready',
    icon: 'fa-solid fa-code',
    color: '#38bdf8',
    glowColor: 'rgba(56, 189, 248, 0.25)',
    description:
      'Engineered search engine architecture incorporating dynamic XML sitemaps, per-page OpenGraph metadata, and structured JSON-LD schemas (LocalBusiness, FAQPage, Breadcrumbs).',
    highlights: [
      '100% SEO Lighthouse performance and automated crawler indexing',
      'Rich Google search snippets with verified schema validation'
    ]
  },
  {
    id: 'cultural-sports',
    title: 'University Sports & Cultural Representation',
    category: 'sports',
    categoryLabel: 'College Representative',
    badge: 'Leadership & Sports',
    issuer: 'UCET Bikaner Inter-College Events',
    issuerIcon: 'fa-solid fa-award',
    date: 'Active Leader & Participant',
    icon: 'fa-solid fa-medal',
    color: '#a855f7',
    glowColor: 'rgba(168, 85, 247, 0.25)',
    description:
      'Represented University College of Engineering and Technology (UCET) across inter-college athletic and cultural summits, fostering team collaboration, event coordination, and student engagement.',
    highlights: [
      'Active leadership in university sports councils & event planning',
      'Recognized for exceptional team spirit and competitive discipline'
    ]
  }
];
