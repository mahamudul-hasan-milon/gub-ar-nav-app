import { useState, useEffect } from "react";

const Header = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <nav className="nav">
          <div className="logo">
            <div className="logo-icon">
              <i className="fas fa-rocket"></i>
            </div>
            <span className="logo-text">AppName</span>
          </div>

          <div className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}>
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("home");
              }}
            >
              Home
            </a>
            <a
              href="#features"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("features");
              }}
            >
              Features
            </a>
            <a
              href="#preview"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("preview");
              }}
            >
              Preview
            </a>
            <a
              href="#download"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("download");
              }}
            >
              Download
            </a>
            <a
              href="#testimonials"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("testimonials");
              }}
            >
              Reviews
            </a>
            <a
              href="#faq"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("faq");
              }}
            >
              FAQ
            </a>
          </div>

          <div className="nav-actions">
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              <i
                className={`fas ${theme === "light" ? "fa-moon" : "fa-sun"}`}
              ></i>
            </button>
            <button
              className="btn btn-primary download-nav-btn"
              onClick={() => scrollToSection("download")}
            >
              <i className="fas fa-download"></i>
              Download
            </button>
            <button
              className="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <i
                className={`fas ${isMobileMenuOpen ? "fa-times" : "fa-bars"}`}
              ></i>
            </button>
          </div>
        </nav>
      </div>

      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 20px 0;
          transition: var(--transition);
          background-color: transparent;
        }

        .header.scrolled {
          background-color: var(--bg-primary);
          box-shadow: var(--shadow);
          padding: 15px 0;
          backdrop-filter: blur(10px);
        }

        .nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .logo-icon {
          width: 40px;
          height: 40px;
          border-radius: var(--radius-md);
          background: var(--gradient);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .nav-links {
          display: flex;
          gap: 30px;
          align-items: center;
        }

        .nav-links a {
          color: var(--text-secondary);
          font-weight: 500;
          transition: var(--transition);
          position: relative;
        }

        .nav-links a:hover {
          color: var(--primary-color);
        }

        .nav-links a::after {
          content: "";
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--gradient);
          transition: var(--transition);
        }

        .nav-links a:hover::after {
          width: 100%;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .theme-toggle {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 1.2rem;
          color: var(--text-primary);
          transition: var(--transition);
        }

        .theme-toggle:hover {
          background: var(--bg-tertiary);
          transform: rotate(30deg);
        }

        .download-nav-btn {
          padding: 10px 24px;
          font-size: 0.9rem;
        }

        .mobile-menu-toggle {
          display: none;
          background: none;
          border: none;
          font-size: 1.5rem;
          color: var(--text-primary);
          cursor: pointer;
        }

        @media (max-width: 992px) {
          .nav-links {
            gap: 20px;
          }
        }

        @media (max-width: 768px) {
          .nav-links {
            position: fixed;
            top: 80px;
            left: 0;
            width: 100%;
            background: var(--bg-primary);
            flex-direction: column;
            padding: 30px;
            box-shadow: var(--shadow);
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
            transition: var(--transition);
            gap: 25px;
            border-top: 1px solid var(--border-color);
          }

          .nav-links.open {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
          }

          .mobile-menu-toggle {
            display: block;
          }

          .download-nav-btn {
            display: none;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
