import { useState, useEffect, useRef } from "react";

const Testimonials = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechCorp",
      content:
        "This app completely transformed how I manage my daily tasks. The interface is intuitive and the analytics helped me identify time-wasting habits.",
      rating: 5,
      avatar: "SJ",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Freelance Developer",
      company: "Self-Employed",
      content:
        "As a freelancer, staying organized is crucial. This app helps me track multiple projects and deadlines seamlessly across all my devices.",
      rating: 5,
      avatar: "MC",
    },
    {
      id: 3,
      name: "Jessica Williams",
      role: "Student",
      company: "University",
      content:
        "Perfect for students! The habit tracking feature helped me build consistent study routines. My productivity has increased by 40% since using this app.",
      rating: 4,
      avatar: "JW",
    },
    {
      id: 4,
      name: "David Miller",
      role: "Team Lead",
      company: "StartupXYZ",
      content:
        "The team collaboration features are fantastic. We've reduced meeting times by 30% thanks to better task organization and communication.",
      rating: 5,
      avatar: "DM",
    },
    {
      id: 5,
      name: "Emma Garcia",
      role: "Marketing Director",
      company: "BrandAgency",
      content:
        "I've tried many productivity apps, but this one stands out. The smart reminders and progress tracking keep me motivated and on track.",
      rating: 5,
      avatar: "EG",
    },
    {
      id: 6,
      name: "Robert Kim",
      role: "Entrepreneur",
      company: "InnovateLabs",
      content:
        "The cross-platform sync is flawless. Whether I'm on my phone, tablet, or laptop, everything is always up to date. Highly recommended!",
      rating: 4,
      avatar: "RK",
    },
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % Math.ceil(testimonials.length / 2));
  };

  const prevSlide = () => {
    setActiveSlide(
      (prev) =>
        (prev - 1 + Math.ceil(testimonials.length / 2)) %
        Math.ceil(testimonials.length / 2),
    );
  };

  const goToSlide = (index) => {
    setActiveSlide(index);
  };

  const startAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(nextSlide, 4000);
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
  }, [isAutoPlaying, activeSlide]);

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
    stopAutoPlay();
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <i
        key={index}
        className={`fas fa-star ${index < rating ? "filled" : ""}`}
      ></i>
    ));
  };

  // Group testimonials into pairs for carousel
  const groupedTestimonials = [];
  for (let i = 0; i < testimonials.length; i += 2) {
    groupedTestimonials.push(testimonials.slice(i, i + 2));
  }

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <h2>What Our Users Say</h2>
        <p className="section-subtitle">
          Join thousands of satisfied users who have transformed their
          productivity
        </p>

        <div
          className="testimonials-carousel"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="testimonials-track"
            style={{ transform: `translateX(-${activeSlide * 100}%)` }}
          >
            {groupedTestimonials.map((group, groupIndex) => (
              <div key={groupIndex} className="testimonials-group">
                {group.map((testimonial) => (
                  <div key={testimonial.id} className="testimonial-card">
                    <div className="testimonial-header">
                      <div className="user-avatar">{testimonial.avatar}</div>
                      <div className="user-info">
                        <h4>{testimonial.name}</h4>
                        <p className="user-role">
                          {testimonial.role} • {testimonial.company}
                        </p>
                      </div>
                    </div>

                    <div className="testimonial-rating">
                      {renderStars(testimonial.rating)}
                    </div>

                    <p className="testimonial-content">
                      "{testimonial.content}"
                    </p>

                    <div className="testimonial-date">
                      <i className="far fa-calendar"></i>
                      <span>2 weeks ago</span>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="carousel-controls">
            <button
              className="carousel-btn prev"
              onClick={prevSlide}
              aria-label="Previous slide"
            >
              <i className="fas fa-chevron-left"></i>
            </button>

            <div className="carousel-dots">
              {groupedTestimonials.map((_, index) => (
                <button
                  key={index}
                  className={`carousel-dot ${index === activeSlide ? "active" : ""}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              className="carousel-btn next"
              onClick={nextSlide}
              aria-label="Next slide"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>

          <div className="autoplay-control">
            <button
              className="autoplay-btn"
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
            >
              <i
                className={`fas ${isAutoPlaying ? "fa-pause" : "fa-play"}`}
              ></i>
              {isAutoPlaying ? "Pause" : "Play"} slideshow
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .testimonials {
          background: var(--bg-secondary);
        }

        .section-subtitle {
          text-align: center;
          max-width: 600px;
          margin: 0 auto 60px;
          font-size: 1.1rem;
          color: var(--text-secondary);
        }

        .testimonials-carousel {
          overflow: hidden;
          position: relative;
        }

        .testimonials-track {
          display: flex;
          transition: transform 0.5s ease;
        }

        .testimonials-group {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
          flex: 0 0 100%;
        }

        .testimonial-card {
          background: var(--card-bg);
          border-radius: var(--radius-lg);
          padding: 30px;
          height: 100%;
          transition: var(--transition);
          border: 1px solid var(--border-color);
        }

        .testimonial-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow);
        }

        .testimonial-header {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 15px;
        }

        .user-avatar {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: var(--gradient);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 600;
          font-size: 1.2rem;
        }

        .user-info h4 {
          margin-bottom: 5px;
          font-size: 1.2rem;
        }

        .user-role {
          color: var(--text-secondary);
          font-size: 0.9rem;
          margin: 0;
        }

        .testimonial-rating {
          display: flex;
          gap: 5px;
          margin-bottom: 15px;
          color: #ffd700;
        }

        .testimonial-rating .fa-star {
          color: #e0e0e0;
        }

        .testimonial-rating .fa-star.filled {
          color: #ffd700;
        }

        .testimonial-content {
          font-style: italic;
          color: var(--text-primary);
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .testimonial-date {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .carousel-controls {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 30px;
          margin-top: 40px;
        }

        .carousel-btn {
          width: 50px;
          height: 50px;
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

        .carousel-btn:hover {
          background: var(--primary-color);
          color: white;
          border-color: var(--primary-color);
        }

        .carousel-dots {
          display: flex;
          gap: 10px;
        }

        .carousel-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: var(--border-color);
          border: none;
          cursor: pointer;
          transition: var(--transition);
          padding: 0;
        }

        .carousel-dot.active {
          background: var(--primary-color);
          transform: scale(1.2);
        }

        .autoplay-control {
          display: flex;
          justify-content: center;
          margin-top: 30px;
        }

        .autoplay-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          padding: 10px 20px;
          border-radius: 30px;
          cursor: pointer;
          color: var(--text-primary);
          font-weight: 500;
          transition: var(--transition);
        }

        .autoplay-btn:hover {
          background: var(--bg-secondary);
        }

        @media (max-width: 992px) {
          .testimonials-group {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .carousel-controls {
            gap: 20px;
          }

          .carousel-btn {
            width: 40px;
            height: 40px;
            font-size: 1rem;
          }
        }

        @media (max-width: 576px) {
          .testimonial-card {
            padding: 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
