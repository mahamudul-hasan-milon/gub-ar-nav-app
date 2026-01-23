import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    const animateGradient = () => {
      const hero = document.querySelector(".hero");
      if (hero) {
        let angle = 0;
        const animate = () => {
          angle = (angle + 0.5) % 360;
          hero.style.background = `linear-gradient(${angle}deg, #4361ee 0%, #3a0ca3 50%, #7209b7 100%)`;
          requestAnimationFrame(animate);
        };
        animate();
      }
    };

    animateGradient();
  }, []);

  const scrollToDownload = () => {
    const downloadSection = document.getElementById("download");
    if (downloadSection) {
      downloadSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Smart Indoor Navigation for Green University</h1>
            <p className="subtitle">
              An AR-powered mobile application that guides students and visitors
              inside campus buildings with real-time visual directions.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Downloads</span>
              </div>
              <div className="stat">
                <span className="stat-number">4.9</span>
                <span className="stat-label">Rating</span>
              </div>
              <div className="stat">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Support</span>
              </div>
            </div>
            <button
              className="btn btn-primary btn-large"
              onClick={scrollToDownload}
            >
              <i className="fas fa-download"></i>
              Download Now - Free
            </button>
          </div>
          <div className="hero-image">
            <div className="phone-mockup">
              <div className="phone-screen">
                <div className="screen-content">
                  <div className="app-header">
                    <div className="app-header-content">
                      <div className="app-icon-small"></div>
                      {/* <span>GUB AR Nav</span> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="phone-frame"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          padding-top: 150px;
          background: var(--gradient-hero);
          color: white;
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          position: relative;
        }

        .hero::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");
          animation: float 20s linear infinite;
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          position: relative;
          z-index: 2;
        }

        .hero-text {
          max-width: 600px;
        }

        .hero h1 {
          color: white;
          -webkit-text-fill-color: white;
          margin-bottom: 20px;
          font-size: 3.5rem;
        }

        .subtitle {
          font-size: 1.2rem;
          margin-bottom: 40px;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.6;
        }

        .hero-stats {
          display: flex;
          gap: 40px;
          margin-bottom: 40px;
        }

        .stat {
          display: flex;
          flex-direction: column;
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 700;
          color: white;
          line-height: 1;
        }

        .stat-label {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.8);
          margin-top: 5px;
        }

        .hero-image {
          display: flex;
          justify-content: center;
        }

        .phone-mockup {
          width: 300px;
          height: 600px;
          position: relative;
          transform: perspective(1000px) rotateY(-15deg) rotateX(5deg);
          transition: var(--transition);
        }

        .phone-mockup:hover {
          transform: perspective(1000px) rotateY(-5deg) rotateX(0deg);
        }

        .phone-frame {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 40px;
          background: #222;
          box-shadow:
            0 20px 60px rgba(0, 0, 0, 0.5),
            inset 0 0 0 3px #333,
            inset 0 0 0 10px #111;
          z-index: 2;
        }

        .phone-screen {
          position: absolute;
          top: 20px;
          left: 10px;
          width: calc(100% - 20px);
          height: calc(100% - 40px);
          border-radius: 30px;
          background: url("https://i.ibb.co/0jcDtVJr/pro-ui.png") center/cover
            no-repeat;
          overflow: hidden;
          z-index: 3;
        }

        .screen-content {
          padding: 30px;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .app-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
        }

        .app-header-content {
          display: flex;
          align-items: center;
          gap: 10px;
          color: white;
          font-weight: 600;
        }

        .app-icon-small {
          width: 30px;
          height: 30px;
          border-radius: 8px;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #667eea;
          font-size: 1.2rem;
        }

        .task-list {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .task-item {
          background: rgba(255, 255, 255, 0.9);
          border-radius: 12px;
          padding: 15px;
          display: flex;
          align-items: center;
          gap: 15px;
          transition: var(--transition);
        }

        .task-item:hover {
          transform: translateX(5px);
          background: white;
        }

        .task-checkbox {
          width: 20px;
          height: 20px;
          border-radius: 6px;
          border: 2px solid #667eea;
        }

        .task-time {
          margin-left: auto;
          font-size: 0.8rem;
          color: #666;
        }

        @keyframes float {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          100% {
            transform: translate(50px, 50px) rotate(360deg);
          }
        }

        @media (max-width: 992px) {
          .hero-content {
            grid-template-columns: 1fr;
            gap: 50px;
            text-align: center;
          }

          .hero-text {
            max-width: 100%;
          }

          .hero-stats {
            justify-content: center;
          }

          .phone-mockup {
            transform: none;
            margin: 0 auto;
          }

          .phone-mockup:hover {
            transform: scale(1.05);
          }
        }

        @media (max-width: 768px) {
          .hero {
            padding-top: 120px;
          }

          .hero h1 {
            font-size: 2.5rem;
          }

          .hero-stats {
            gap: 30px;
          }

          .stat-number {
            font-size: 2rem;
          }

          .phone-mockup {
            width: 250px;
            height: 500px;
          }
        }

        @media (max-width: 576px) {
          .hero h1 {
            font-size: 2rem;
          }

          .hero-stats {
            flex-direction: column;
            gap: 20px;
            align-items: center;
          }

          .phone-mockup {
            width: 200px;
            height: 400px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
