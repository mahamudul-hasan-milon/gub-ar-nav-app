const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = [
    {
      title: "Product",
      links: [
        { label: "About Project", href: "#" },
        { label: "Features", href: "#features" },
        { label: "How It Works", href: "#" },
        { label: "Screenshots", href: "#" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Contact Us", href: "#" },
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
      ],
    },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="logo">
              <div className="logo-icon">
                <i className="fas fa-rocket"></i>
              </div>
              <span className="logo-text">GUB AR Nav</span>
            </div>
            <p className="footer-tagline">
              AR-based indoor navigation system for Green University of
              Bangladesh.
            </p>

            <div className="app-stores">
              <a href="#" className="store-link">
                <i className="fab fa-google-play"></i>
                <div>
                  <span className="store-label">GET IT ON</span>
                  <span className="store-name">Google Play</span>
                </div>
              </a>
              <a href="#" className="store-link">
                <i className="fab fa-app-store-ios"></i>
                <div>
                  <span className="store-label">Download on the</span>
                  <span className="store-name">App Store</span>
                </div>
              </a>
            </div>
          </div>

          <div className="footer-links">
            {footerLinks.map((column, index) => (
              <div key={index} className="footer-column">
                <h4>{column.title}</h4>
                <ul>
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        onClick={(e) => {
                          if (link.href.startsWith("#")) {
                            e.preventDefault();
                            const element = document.querySelector(link.href);
                            if (element) {
                              element.scrollIntoView({ behavior: "smooth" });
                            }
                          }
                        }}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="footer-column">
              <h4>Contact</h4>
              <div className="contact-info">
                <div className="contact-item">
                  <i className="fas fa-envelope"></i>
                  <span>mahamudulhasanmilon553@gmail.com</span>
                  <span>tacin900.bd@gmail.com</span>
                </div>
                <div className="contact-item">
                  <i className="fas fa-phone"></i>
                  <span>+8801773593797</span>
                  <span>+8801518605673</span>
                  <span>+8801568041826</span>
                </div>
                <div className="contact-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>
                    Purbachal American City, Kanchan, Rupganj, Narayanganj-1461,
                    Dhaka, Bangladesh
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright">
            © {currentYear} GUB AR Navigation System. All rights reserved.
          </div>

          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: var(--bg-secondary);
          padding: 80px 0 30px;
          border-top: 1px solid var(--border-color);
        }

        .footer-top {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 60px;
          margin-bottom: 60px;
        }

        .footer-brand .logo {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }

        .footer-brand .logo-icon {
          width: 40px;
          height: 40px;
          border-radius: var(--radius-md);
          background: var(--gradient);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .footer-brand .logo-text {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .footer-tagline {
          color: var(--text-secondary);
          margin-bottom: 30px;
          max-width: 300px;
        }

        .social-links {
          display: flex;
          gap: 15px;
          margin-bottom: 30px;
        }

        .social-link {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--bg-tertiary);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-primary);
          transition: var(--transition);
        }

        .social-link:hover {
          background: var(--primary-color);
          color: white;
          transform: translateY(-3px);
        }

        .app-stores {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .store-link {
          display: flex;
          align-items: center;
          gap: 15px;
          background: var(--card-bg);
          padding: 15px 20px;
          border-radius: var(--radius-md);
          transition: var(--transition);
          border: 1px solid var(--border-color);
        }

        .store-link:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow);
        }

        .store-link i {
          font-size: 2rem;
        }

        .store-label {
          display: block;
          font-size: 0.8rem;
          color: var(--text-secondary);
        }

        .store-name {
          display: block;
          font-weight: 600;
          color: var(--text-primary);
        }

        .footer-links {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }

        .footer-column h4 {
          font-size: 1.1rem;
          margin-bottom: 20px;
          color: var(--text-primary);
        }

        .footer-column ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-column li {
          margin-bottom: 12px;
        }

        .footer-column a {
          color: var(--text-secondary);
          transition: var(--transition);
          font-size: 0.95rem;
        }

        .footer-column a:hover {
          color: var(--primary-color);
          padding-left: 5px;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 15px;
          margin-bottom: 30px;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--text-secondary);
          font-size: 0.95rem;
        }

        .contact-item i {
          color: var(--primary-color);
          width: 20px;
        }

        .newsletter p {
          color: var(--text-secondary);
          font-size: 0.9rem;
          margin-bottom: 15px;
        }

        .newsletter-form {
          display: flex;
          position: relative;
        }

        .newsletter-form input {
          flex: 1;
          padding: 12px 15px;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-color);
          background: var(--bg-primary);
          color: var(--text-primary);
          font-family: "Inter", sans-serif;
        }

        .newsletter-form button {
          position: absolute;
          right: 5px;
          top: 5px;
          bottom: 5px;
          width: 40px;
          border-radius: var(--radius-md);
          background: var(--primary-color);
          color: white;
          border: none;
          cursor: pointer;
          transition: var(--transition);
        }

        .newsletter-form button:hover {
          background: var(--secondary-color);
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 30px;
          border-top: 1px solid var(--border-color);
        }

        .copyright {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .footer-bottom-links {
          display: flex;
          gap: 25px;
        }

        .footer-bottom-links a {
          color: var(--text-secondary);
          font-size: 0.9rem;
          transition: var(--transition);
        }

        .footer-bottom-links a:hover {
          color: var(--primary-color);
        }

        .back-to-top {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: var(--text-primary);
          transition: var(--transition);
        }

        .back-to-top:hover {
          background: var(--primary-color);
          color: white;
          border-color: var(--primary-color);
          transform: translateY(-3px);
        }

        @media (max-width: 992px) {
          .footer-top {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .footer-links {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .footer {
            padding: 60px 0 30px;
          }

          .footer-links {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .footer-bottom {
            flex-direction: column;
            gap: 20px;
            text-align: center;
          }
        }

        @media (max-width: 576px) {
          .app-stores {
            flex-direction: column;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
