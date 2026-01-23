import { useState, useEffect, useRef } from "react";

const Testimonials = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "Md. Mahamudul Hasan Milon",
      role: "Student, Green University of Bangladesh",
      content:
        "Using GUB AR Nav made it much easier to find rooms inside the campus. The AR arrows felt natural and helped me reach my destination without asking anyone.",
      rating: 5,
      avatar: "MH",
    },
    {
      id: 2,
      name: "Md. Abdullah Al Tacin",
      role: "Student, Green University of Bangladesh",
      content:
        "As a new student, I often got confused between buildings and floors. This app gave clear visual guidance and saved a lot of time.",
      rating: 5,
      avatar: "AT",
    },
    {
      id: 3,
      name: "Mofidul Moktar Mofid",
      role: "Student, Green University of Bangladesh",
      content:
        "The AR-based navigation is simple and effective. I liked how the arrows appear directly in front of me instead of using a complex map.",
      rating: 4,
      avatar: "MM",
    },
    {
      id: 4,
      name: "Nusrat Jahan",
      role: "First-Year Student",
      content:
        "Finding classrooms during the first week was stressful. GUB AR Nav guided me step by step and reduced confusion inside the building.",
      rating: 5,
      avatar: "NJ",
    },
    {
      id: 5,
      name: "Rakib Hossain",
      role: "Campus Visitor",
      content:
        "I visited the university for the first time and easily reached the office using this app. It feels like having a digital guide in your phone.",
      rating: 4,
      avatar: "RH",
    },
    {
      id: 6,
      name: "Sadia Islam",
      role: "Student",
      content:
        "The system is very helpful for large buildings. Even without knowing the layout, I could follow the green path and reach my destination.",
      rating: 5,
      avatar: "SI",
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
        <h2>What Our Test Users Say</h2>
        <p className="section-subtitle">
          Feedback from students and visitors who tested the AR navigation
          system inside the campus.
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
