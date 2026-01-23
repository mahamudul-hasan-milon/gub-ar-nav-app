import { useState } from "react";

const Features = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const features = [
    {
      id: 1,
      icon: "fas fa-map-marked-alt",
      title: "AR Indoor Navigation",
      shortDesc: "Find your way using AR guidance",
      fullDesc:
        "Navigate inside campus buildings using real-time AR arrows and paths. Simply point your camera and follow visual directions to reach your destination.",
      color: "#4361ee",
    },
    {
      id: 2,
      icon: "fas fa-search-location",
      title: "Quick Destination Search",
      shortDesc: "Find rooms instantly",
      fullDesc:
        "Search for classrooms, labs, offices, and facilities by name or code. The system instantly loads the best route for your selected location.",
      color: "#3a0ca3",
    },
    {
      id: 3,
      icon: "fas fa-route",
      title: "Step-by-Step Guidance",
      shortDesc: "Follow clear navigation paths",
      fullDesc:
        "The app guides users through predefined waypoints, showing arrows and markers at each turn for a smooth and easy navigation experience.",
      color: "#7209b7",
    },
    {
      id: 4,
      icon: "fas fa-university",
      title: "Campus-Focused Design",
      shortDesc: "Built for university buildings",
      fullDesc:
        "Designed specifically for Green University, the system reflects real building layouts and room structures for accurate indoor navigation.",
      color: "#f72585",
    },
    {
      id: 5,
      icon: "fas fa-mobile-alt",
      title: "No Extra Hardware",
      shortDesc: "Works on your smartphone",
      fullDesc:
        "Runs on standard Android devices using the camera and sensors. No need for beacons, QR codes, or additional equipment.",
      color: "#4cc9f0",
    },
    {
      id: 6,
      icon: "fas fa-user-check",
      title: "User-Friendly Interface",
      shortDesc: "Easy for everyone to use",
      fullDesc:
        "A clean and simple interface ensures that new students and visitors can use the app without any prior training.",
      color: "#4895ef",
    },
  ];

  const toggleCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <section className="features" id="features">
      <div className="container">
        <h2>Powerful Features</h2>
        <p className="section-subtitle">
          Everything you need to boost your productivity
        </p>

        <div className="features-grid">
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`feature-card ${expandedCard === feature.id ? "expanded" : ""}`}
              onClick={() => toggleCard(feature.id)}
            >
              <div
                className="feature-icon"
                style={{ background: feature.color }}
              >
                <i className={feature.icon}></i>
              </div>
              <h3>{feature.title}</h3>
              <p className="feature-short-desc">{feature.shortDesc}</p>

              <div
                className={`feature-full-desc ${expandedCard === feature.id ? "show" : ""}`}
              >
                <p>{feature.fullDesc}</p>
              </div>

              <button className="feature-expand-btn">
                <i
                  className={`fas ${expandedCard === feature.id ? "fa-chevron-up" : "fa-chevron-down"}`}
                ></i>
              </button>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .features {
          background: var(--bg-primary);
        }

        .section-subtitle {
          text-align: center;
          max-width: 600px;
          margin: 0 auto 60px;
          font-size: 1.1rem;
          color: var(--text-secondary);
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .feature-card {
          background: var(--card-bg);
          border-radius: var(--radius-lg);
          padding: 30px;
          cursor: pointer;
          transition: var(--transition);
          position: relative;
          border: 1px solid var(--border-color);
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .feature-card:hover {
          transform: translateY(-10px);
          box-shadow: var(--shadow);
        }

        .feature-card.expanded {
          transform: translateY(-10px);
          box-shadow: var(--shadow);
        }

        .feature-icon {
          width: 70px;
          height: 70px;
          border-radius: var(--radius-lg);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          color: white;
          font-size: 1.8rem;
          transition: var(--transition);
        }

        .feature-card:hover .feature-icon {
          transform: scale(1.1) rotate(10deg);
        }

        .feature-card h3 {
          margin-bottom: 10px;
          font-size: 1.3rem;
        }

        .feature-short-desc {
          color: var(--text-secondary);
          margin-bottom: 20px;
          font-size: 0.95rem;
        }

        .feature-full-desc {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.5s ease;
          opacity: 0;
        }

        .feature-full-desc.show {
          max-height: 500px;
          opacity: 1;
          margin-bottom: 20px;
        }

        .feature-benefits {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 20px;
        }

        .benefit {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .benefit i {
          color: #4caf50;
        }

        .feature-expand-btn {
          position: absolute;
          bottom: 20px;
          right: 20px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition);
          margin-top: auto;
        }

        .feature-expand-btn:hover {
          background: var(--primary-color);
          color: white;
          border-color: var(--primary-color);
        }

        @media (max-width: 992px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .features-grid {
            grid-template-columns: 1fr;
          }

          .feature-card {
            padding: 25px;
          }
        }
      `}</style>
    </section>
  );
};

export default Features;
