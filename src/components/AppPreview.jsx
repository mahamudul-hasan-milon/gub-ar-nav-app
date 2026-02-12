import { useState, useEffect, useRef } from "react";

const AppPreview = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef(null);

  const screenshots = [
    {
      id: 1,
      title: "Home Screen",
      description: "Start the app and access campus navigation features",
      image: "https://i.ibb.co/4ntCCv2M/home.jpg",
    },
    {
      id: 3,
      title: "Search Location",
      description: "Quickly find a room or place by name or code",
      image: "https://i.ibb.co/G4R2m5FH/path.jpg",
    },
    {
      id: 4,
      title: "AR Navigation View",
      description: "Follow green paths and arrows in real time using AR",
      image: "https://i.ibb.co/8g5cH4nx/output.jpg",
    },
    {
      id: 5,
      title: "Campus Map",
      description: "View the building layout and navigation points",
      image: "https://i.ibb.co/SDX7JQnV/B7-small-wall.png",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + screenshots.length) % screenshots.length,
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const startAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(nextSlide, 3000);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    if (isAutoPlaying) {
      startAutoPlay();
    }
    return () => stopAutoPlay();
  }, [isAutoPlaying]);

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
    stopAutoPlay();
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  return (
    <section className="app-preview" id="preview">
      <div className="container">
        <h2>App Preview</h2>
        <p className="section-subtitle">
          Explore how GUB AR Nav guides you inside the campus using Augmented
          Reality
        </p>

        <div
          className="preview-container"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="phone-mockup-preview">
            <div className="phone-frame-preview">
              <div className="phone-screen-preview">
                <div className={`screenshot-content slide-${currentSlide + 1}`}>
                  <div className="screenshot-header">
                    <div className="screenshot-title">
                      {screenshots[currentSlide].title}
                    </div>
                    <div className="screenshot-description">
                      {screenshots[currentSlide].description}
                    </div>
                  </div>
                  <div className="screenshot-image-wrapper">
                    <img
                      src={screenshots[currentSlide].image}
                      alt={screenshots[currentSlide].title}
                      className="screenshot-image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="screenshot-controls">
            <div className="screenshot-thumbnails">
              {screenshots.map((screenshot, index) => (
                <div
                  key={screenshot.id}
                  className={`thumbnail ${index === currentSlide ? "active" : ""}`}
                  onClick={() => goToSlide(index)}
                >
                  <div className="thumbnail-placeholder">
                    <span>{screenshot.title}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="control-buttons">
              <button
                className="control-btn"
                onClick={prevSlide}
                aria-label="Previous slide"
              >
                <i className="fas fa-chevron-left"></i>
              </button>
              <button
                className="control-btn play-pause"
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                aria-label={
                  isAutoPlaying ? "Pause slideshow" : "Play slideshow"
                }
              >
                <i
                  className={`fas ${isAutoPlaying ? "fa-pause" : "fa-play"}`}
                ></i>
              </button>
              <button
                className="control-btn"
                onClick={nextSlide}
                aria-label="Next slide"
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .app-preview {
          background: var(--bg-secondary);
        }

        .section-subtitle {
          text-align: center;
          max-width: 600px;
          margin: 0 auto 60px;
          font-size: 1.1rem;
          color: var(--text-secondary);
        }

        .preview-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .phone-mockup-preview {
          position: relative;
          display: flex;
          justify-content: center;
        }

        .screenshot-image-wrapper {
          flex: 1;
          border-radius: var(--radius-lg);
          overflow: hidden;
        }

        .screenshot-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .phone-frame-preview {
          width: 300px;
          height: 600px;
          border-radius: 40px;
          background: linear-gradient(145deg, #1a1a1a, #2a2a2a);
          box-shadow:
            0 30px 60px rgba(0, 0, 0, 0.3),
            inset 0 0 0 3px #333,
            inset 0 0 0 10px #1a1a1a;
          padding: 20px;
        }

        .phone-screen-preview {
          width: 100%;
          height: 100%;
          border-radius: 25px;
          background: var(--bg-primary);
          overflow: hidden;
        }

        .screenshot-content {
          height: 100%;
          padding: 30px;
          display: flex;
          flex-direction: column;
          animation: fadeIn 0.5s ease;
        }

        .screenshot-header {
          margin-bottom: 30px;
        }

        .screenshot-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 10px;
        }

        .screenshot-description {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .screenshot-placeholder {
          flex: 1;
          background: var(--bg-tertiary);
          border-radius: var(--radius-lg);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .placeholder-animation {
          width: 80%;
          height: 80%;
          background: linear-gradient(
            90deg,
            var(--bg-secondary) 25%,
            var(--border-color) 50%,
            var(--bg-secondary) 75%
          );
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
          border-radius: var(--radius-md);
        }

        .screenshot-controls {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .screenshot-thumbnails {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .thumbnail {
          background: var(--card-bg);
          border-radius: var(--radius-md);
          padding: 20px;
          cursor: pointer;
          transition: var(--transition);
          border: 2px solid transparent;
        }

        .thumbnail:hover {
          transform: translateY(-5px);
          border-color: var(--primary-color);
        }

        .thumbnail.active {
          border-color: var(--primary-color);
          background: linear-gradient(
            135deg,
            rgba(67, 97, 238, 0.1),
            rgba(58, 12, 163, 0.1)
          );
        }

        .thumbnail-placeholder {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }

        .thumbnail-placeholder span {
          font-weight: 500;
          color: var(--text-primary);
        }

        .control-buttons {
          display: flex;
          justify-content: center;
          gap: 20px;
        }

        .control-btn {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: var(--card-bg);
          border: 2px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 1.2rem;
          color: var(--text-primary);
          transition: var(--transition);
        }

        .control-btn:hover {
          background: var(--primary-color);
          color: white;
          border-color: var(--primary-color);
          transform: scale(1.1);
        }

        .play-pause {
          background: var(--gradient);
          color: white;
          border: none;
        }

        @keyframes fadeIn {
          from {
            opacity: 0.5;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        @media (max-width: 992px) {
          .preview-container {
            grid-template-columns: 1fr;
            gap: 50px;
          }

          .phone-mockup-preview {
            order: 1;
          }
        }

        @media (max-width: 768px) {
          .phone-frame-preview {
            width: 250px;
            height: 500px;
          }

          .screenshot-thumbnails {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 576px) {
          .phone-frame-preview {
            width: 200px;
            height: 400px;
          }

          .screenshot-thumbnails {
            grid-template-columns: repeat(2, 1fr);
          }

          .control-buttons {
            gap: 10px;
          }

          .control-btn {
            width: 50px;
            height: 50px;
          }
        }
      `}</style>
    </section>
  );
};

export default AppPreview;
