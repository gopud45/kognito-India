// App.js
// React and ReactDOM are expected to be available globally via CDN links in index.html
// as this setup is for direct browser execution without a local build tool.
import { Home, Briefcase, Users, Mail, Menu, X, Rocket, Code, Instagram, Linkedin, Twitter } from 'lucide-react'; // Importing icons

// Header Component
const Header = ({ currentPage, setCurrentPage, logoSrc }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false); // Using React.useState explicitly

  const navItems = [
    { name: 'Home', icon: Home, page: 'home' },
    { name: 'Services', icon: Rocket, page: 'services' },
    { name: 'Portfolio', icon: Briefcase, page: 'portfolio' },
    { name: 'Contact Us', icon: Mail, page: 'contact' },
  ];

  return (
    <header className="main-header">
      <div className="header-inner-container">
        {/* Logo */}
        <div className="agency-logo">
          <img src={logoSrc} alt="Kognito India Logo" className="agency-logo-image" />
        </div>

        <nav className="nav-desktop">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => setCurrentPage(item.page)}
              className={`nav-desktop-item ${currentPage === item.page ? 'active' : ''}`}
            >
              <item.icon size={20} />
              <span className="nav-text">{item.name}</span>
            </button>
          ))}
        </nav>
        <div className="mobile-menu-toggle">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="mobile-menu-button">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="nav-mobile-dropdown">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => { setCurrentPage(item.page); setIsMenuOpen(false); }}
              className={`nav-mobile-item ${currentPage === item.page ? 'active' : ''}`}
            >
              <item.icon size={20} />
              <span className="nav-text">{item.name}</span>
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

// Footer Component
const Footer = () => (
  <footer className="main-footer">
    <div className="footer-inner-container">
      <div className="footer-social-links">
        <a href="#" className="footer-social-icon">
          <Instagram size={28} />
        </a>
        <a href="#" className="footer-social-icon">
          <Linkedin size={28} />
        </a>
        <a href="#" className="footer-social-icon">
          <Twitter size={28} />
        </a>
      </div>
      <p className="footer-copyright-text">
        &copy; {new Date().getFullYear()} Kognito India. All rights reserved. <br/> Based in India, Serving Global Clients.
      </p>
    </div>
  </footer>
);

// Home Page Component
const HomePage = () => (
  <section className="home-section">
    <div className="container">
      <h1 className="home-title animate-fade-in-down">
        Your Vision, Our <span className="highlight-text">Digital Expertise</span>.
      </h1>
      <p className="home-description animate-fade-in-up">
        Empowering foreign businesses with cutting-edge SEO, robust web development, and engaging social media strategies,
        all delivered from the heart of India.
      </p>
      <div className="home-action-buttons animate-fade-in-up">
        <button className="cta-button cta-button-primary">
          <Rocket size={20} />
          <span>Our Services</span>
        </button>
        <button className="cta-button cta-button-secondary">
          <Briefcase size={20} />
          <span>View Portfolio</span>
        </button>
      </div>

      <div className="home-feature-cards-grid">
        <div className="feature-card">
          <div className="feature-icon-wrapper">
            <Home size={40} strokeWidth={1.5} />
          </div>
          <h3 className="feature-card-title">Global Reach</h3>
          <p className="feature-card-description">Connecting your brand with international audiences.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon-wrapper">
            <Users size={40} strokeWidth={1.5} />
          </div>
          <h3 className="feature-card-title">Expert Team</h3>
          <p className="feature-card-description">Skilled professionals dedicated to your success.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon-wrapper">
            <Mail size={40} strokeWidth={1.5} />
          </div>
          <h3 className="feature-card-title">Cost-Effective Solutions</h3>
          <p className="feature-card-description">High-quality services at competitive rates.</p>
        </div>
      </div>
    </div>
  </section>
);

// Services Page Component
const ServicesPage = () => (
  <section className="services-section">
    <div className="container">
      <h2 className="page-section-title">Our Core Services</h2>

      <div className="services-cards-grid">
        {/* Service Card: SEO */}
        <div className="service-item-card">
          <div className="service-icon-background primary-theme-bg">
            <Rocket size={32} />
          </div>
          <h3 className="service-card-title">Search Engine Optimization (SEO)</h3>
          <ul className="service-features-list">
            <li>Keyword Research & Strategy</li>
            <li>On-Page & Off-Page SEO</li>
            <li>Technical SEO Audits</li>
            <li>Content Optimization</li>
            <li>Local SEO for global targeting</li>
            <li>Performance Tracking & Reporting</li>
          </ul>
          <p className="service-card-description">
            Boost your online visibility and drive organic traffic with our comprehensive SEO strategies tailored for international markets. We help you rank higher and reach your target audience effectively.
          </p>
        </div>

        {/* Service Card: Web Development */}
        <div className="service-item-card">
          <div className="service-icon-background accent-theme-bg">
            <Code size={32} />
          </div>
          <h3 className="service-card-title">Web Development</h3>
          <ul className="service-features-list">
            <li>Custom Website Design & Development</li>
            <li>E-commerce Solutions (Shopify, WooCommerce)</li>
            <li>Responsive & Mobile-First Design</li>
            <li>CMS Development (WordPress, headless CMS)</li>
            <li>Web Application Development</li>
            <li>Website Maintenance & Support</li>
          </ul>
          <p className="service-card-description">
            From captivating designs to robust functionality, we build high-performing websites that are secure, scalable, and optimized for user experience across all devices.
          </p>
        </div>

        {/* Service Card: Social Media Handling */}
        <div className="service-item-card">
          <div className="service-icon-background primary-theme-bg">
            <Instagram size={32} />
          </div>
          <h3 className="service-card-title">Social Media Handling</h3>
          <ul className="service-features-list">
            <li>Social Media Strategy Development</li>
            <li>Content Creation & Curation</li>
            <li>Community Management & Engagement</li>
            <li>Paid Social Media Advertising</li>
            <li>Influencer Marketing Campaigns</li>
            <li>Performance Analytics & Reporting</li>
          </ul>
          <p className="service-card-description">
            Build a strong online presence and connect with your audience on platforms like Facebook, Instagram, LinkedIn, and Twitter. We craft engaging content and run effective campaigns.
          </p>
        </div>
      </div>
    </div>
  </section>
);

// Portfolio Page Component
const PortfolioPage = () => (
  <section className="portfolio-section">
    <div className="container">
      <h2 className="page-section-title">Our Latest Work</h2>
      <p className="page-section-description">
        Discover how we've helped our international clients achieve their digital goals through innovative web solutions, strategic SEO, and impactful social media campaigns.
      </p>

      {/* Web Development Projects */}
      <div className="portfolio-category-section">
        <h3 className="category-section-title border-theme-primary">Web Development Projects</h3>
        <div className="portfolio-project-grid">
          {/* Project Card 1 */}
          <div className="project-display-card">
            <img src="https://placehold.co/600x400/E0F2F7/283593?text=E-commerce+Platform" alt="E-commerce Platform" className="project-image" />
            <div className="project-details-content">
              <h4 className="project-title">Global Retailer E-commerce Platform</h4>
              <p className="project-short-description">
                Designed and developed a scalable e-commerce solution for a leading European fashion retailer, integrating secure payment gateways and multi-language support.
              </p>
              <span className="project-tech-tag primary-theme-bg">React, Node.js, Stripe</span>
            </div>
          </div>
          {/* Project Card 2 */}
          <div className="project-display-card">
            <img src="https://placehold.co/600x400/E0F7FA/006064?text=SaaS+Dashboard" alt="SaaS Dashboard" className="project-image" />
            <div className="project-details-content">
              <h4 className="project-title">FinTech SaaS Dashboard</h4>
              <p className="project-short-description">
                Developed an intuitive and robust financial dashboard for a US-based SaaS company, focusing on data visualization and real-time analytics.
              </p>
              <span className="project-tech-tag accent-theme-bg">Vue.js, AWS, D3.js</span>
            </div>
          </div>
          {/* Project Card 3 */}
          <div className="project-display-card">
            <img src="https://placehold.co/600x400/F3E5F5/4A148C?text=Healthcare+Portal" alt="Healthcare Portal" className="project-image" />
            <div className="project-details-content">
              <h4 className="project-title">Telemedicine Patient Portal</h4>
              <p className="project-short-description">
                Built a secure and user-friendly patient portal for a UK healthcare provider, enabling virtual consultations and appointment management.
              </p>
              <span className="project-tech-tag primary-theme-bg">Angular, Firebase, HIPAA Compliant</span>
            </div>
          </div>
        </div>
      </div>

      {/* SEO Case Studies */}
      <div className="portfolio-category-section">
        <h3 className="category-section-title border-theme-accent">SEO Case Studies</h3>
        <div className="case-study-grid">
          {/* Case Study 1 */}
          <div className="case-study-card">
            <h4 className="case-study-title">Organic Traffic Growth for a Travel Blog</h4>
            <p className="case-study-description">
              Achieved a 150% increase in organic traffic and a 50% improvement in keyword rankings for a travel blog based in Australia within 6 months.
            </p>
            <ul className="case-study-key-points">
              <li>Comprehensive Keyword Strategy</li>
              <li>Content Optimization & Link Building</li>
              <li>Technical SEO Fixes</li>
            </ul>
          </div>
          {/* Case Study 2 */}
          <div className="case-study-card">
            <h4 className="case-study-title">E-commerce Revenue Boost via Local SEO</h4>
            <p className="case-study-description">
              Helped a Canadian e-commerce store increase its local search visibility, leading to a 30% rise in sales from organic search.
            </p>
            <ul className="case-study-key-points">
              <li>Google My Business Optimization</li>
              <li>Local Citation Building</li>
              <li>Schema Markup Implementation</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Social Media Campaigns */}
      <div className="portfolio-category-section">
        <h3 className="category-section-title border-theme-primary">Social Media Campaigns</h3>
        <div className="case-study-grid">
          {/* Campaign 1 */}
          <div className="case-study-card">
            <h4 className="case-study-title">Brand Awareness Campaign for a US Startup</h4>
            <p className="case-study-description">
              Generated over 2 million impressions and 10,000 new followers for a tech startup on Instagram and LinkedIn through targeted content and ad campaigns.
            </p>
            <ul className="case-study-key-points">
              <li>Engaging Content Series</li>
              <li>Audience Segmentation & Targeting</li>
              <li>Influencer Collaborations</li>
            </ul>
          </div>
          {/* Campaign 2 */}
          <div className="case-study-card">
            <h4 className="case-study-title">Lead Generation for a European B2B Service</h4>
            <p className="case-study-description">
              Successfully delivered 500+ qualified leads to a consulting firm using LinkedIn Ads and tailored content marketing.
            </p>
            <ul className="case-study-key-points">
              <li>LinkedIn Lead Generation Ads</li>
              <li>Webinar Promotion</li>
              <li>Custom Audience Creation</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Contact Us Page Component
const ContactUsPage = () => (
  <section className="contact-section">
    <div className="container contact-section-wrapper">
      <h2 className="page-section-title">Get in Touch</h2>
      <p className="page-section-description">
        We'd love to hear from you! Whether you have a project in mind, a question, or just want to say hello, feel free to reach out.
      </p>

      <div className="contact-content-layout">
        {/* Contact Form */}
        <div className="contact-form-container">
          <h3 className="card-heading-subtitle">Send Us a Message</h3>
          <form className="contact-form">
            <div className="form-field-group">
              <label htmlFor="name" className="form-label">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input-field"
                placeholder="John Doe"
              />
            </div>
            <div className="form-field-group">
              <label htmlFor="email" className="form-label">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input-field"
                placeholder="john.doe@example.com"
              />
            </div>
            <div className="form-field-group">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="form-input-field"
                placeholder="Project Inquiry"
              />
            </div>
            <div className="form-field-group">
              <label htmlFor="message" className="form-label">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="form-textarea-field"
                placeholder="Tell us about your project or question..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="cta-button cta-button-primary form-submit-button"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="contact-info-display-card">
          <div>
            <h3 className="card-heading-subtitle">Contact Information</h3>
            <div className="contact-details-list">
              <p className="contact-detail-item">
                <Mail size={24} className="contact-detail-icon" />
                <span>info@kognitoindia.com</span>
              </p>
              <p className="contact-detail-item">
                <Users size={24} className="contact-detail-icon" />
                <span>+91-98765-43210</span> (India)
              </p>
              <p className="contact-detail-item">
                <Home size={24} className="contact-detail-icon" />
                <span>123 Digital Street, Bengaluru, India</span>
              </p>
            </div>
          </div>
          <div className="social-media-follow-section">
            <h3 className="card-heading-subtitle">Follow Us</h3>
            <div className="contact-social-links">
              <a href="#" className="contact-social-icon">
                <Instagram size={32} />
              </a>
              <a href="#" className="contact-social-icon">
                <Linkedin size={32} />
              </a>
              <a href="#" className="contact-social-icon">
                <Twitter size={32} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);


// Main App Component
const App = () => {
  const [currentPage, setCurrentPage] = React.useState('home'); // Using React.useState explicitly

  let PageComponent;
  switch (currentPage) {
    case 'home':
      PageComponent = HomePage;
      break;
    case 'services':
      PageComponent = ServicesPage;
      break;
    case 'portfolio':
      PageComponent = PortfolioPage;
      break;
    case 'contact':
      PageComponent = ContactUsPage;
      break;
    default:
      PageComponent = HomePage;
  }

  // Define the logo source. This path assumes the image is in the same directory as index.html
  const kognitoLogo = "WhatsApp Image 2025-06-24 at 10.44.26 PM.jpeg-6946a111-6a80-4f83-8fde-5c57fc6caf5a"; // Ensure this image file is in the same directory as index.html and App.js

  return (
    <div className="app-container">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} logoSrc={kognitoLogo} />
      <main className="main-content">
        <PageComponent />
      </main>
      <Footer />
    </div>
  );
};

// This line is important for rendering your React App.
// It will be part of the App.js file's content.
// ReactDOM.render(<App />, document.getElementById('root'));
