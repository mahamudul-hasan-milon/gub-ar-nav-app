import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqItems = [
    {
      id: 1,
      question: "Is GUB AR Nav free to use?",
      answer:
        "Yes, GUB AR Nav is completely free and developed for academic and campus use. All core navigation features are available without any cost.",
    },
    {
      id: 2,
      question: "Which devices are supported?",
      answer:
        "The application supports Android smartphones running Android 8.0 or higher with ARCore compatibility.",
    },
    {
      id: 3,
      question: "Do I need an internet connection?",
      answer:
        "Basic navigation works offline after the app is installed. Internet is only required for initial setup and updates.",
    },
    {
      id: 4,
      question: "How does the AR navigation work?",
      answer:
        "The app uses the phone camera and AR technology to display arrows and markers directly on the real environment, guiding users step by step to their destination.",
    },
    {
      id: 5,
      question: "Does it require extra hardware?",
      answer:
        "No additional hardware is required. The system works using only a standard Android Smartphone.",
    },
    {
      id: 6,
      question: "Which areas are covered?",
      answer:
        "Currently, the prototype covers selected buildings and floors of Green University of Bangladesh.",
    },
    {
      id: 7,
      question: "Who is this app for?",
      answer:
        "The app is designed for new students, visitors, and anyone who is unfamiliar with the campus layout.",
    },
    {
      id: 8,
      question: "Is this a commercial product?",
      answer:
        "No. GUB AR Nav is an academic project developed for research and educational purposes.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq" id="faq">
      <div className="container">
        <h2>Frequently Asked Questions</h2>
        <p className="section-subtitle">
          Find quick answers to common questions about our app
        </p>

        <div className="faq-container">
          <div className="faq-list">
            {faqItems.map((item, index) => (
              <div
                key={item.id}
                className={`faq-item ${openIndex === index ? "open" : ""}`}
              >
                <div className="faq-question" onClick={() => toggleFAQ(index)}>
                  <h3>{item.question}</h3>
                  <div className="faq-toggle">
                    <i
                      className={`fas ${openIndex === index ? "fa-minus" : "fa-plus"}`}
                    ></i>
                  </div>
                </div>

                <div
                  className={`faq-answer ${openIndex === index ? "open" : ""}`}
                >
                  <p>{item.answer}</p>
                  {index === 6 && ( // Support question
                    <div className="support-links">
                      <a
                        href="mailto:support@appname.com"
                        className="support-link"
                      >
                        <i className="fas fa-envelope"></i>
                        Email Support
                      </a>
                      <a href="#" className="support-link">
                        <i className="fas fa-headset"></i>
                        Live Chat
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="faq-sidebar">
            <div className="sidebar-card">
              <div className="sidebar-icon">
                <i className="fas fa-question-circle"></i>
              </div>
              <h3>Still have questions?</h3>
              <p>
                Can't find the answer you're looking for? Our support team is
                here to help.
              </p>

              <div className="contact-methods">
                <a href="#" className="contact-method">
                  <i className="fas fa-envelope"></i>
                  <div>
                    <span className="method-label">Email us</span>
                  </div>
                </a>

                <a href="#" className="contact-method">
                  <i className="fas fa-comments"></i>
                  <div>
                    <span className="method-label">Live chat</span>
                  </div>
                </a>

                <a href="#" className="contact-method">
                  <i className="fas fa-file-alt"></i>
                  <div>
                    <span className="method-label">Help center</span>
                  </div>
                </a>
              </div>

              <button
                className="btn btn-secondary"
                style={{ width: "100%", marginTop: "20px" }}
              >
                <i className="fas fa-book"></i>
                Visit Help Center
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .faq {
          background: var(--bg-primary);
        }

        .section-subtitle {
          text-align: center;
          max-width: 600px;
          margin: 0 auto 60px;
          font-size: 1.1rem;
          color: var(--text-secondary);
        }

        .faq-container {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 60px;
        }

        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .faq-item {
          background: var(--card-bg);
          border-radius: var(--radius-lg);
          overflow: hidden;
          border: 1px solid var(--border-color);
          transition: var(--transition);
        }

        .faq-item.open {
          box-shadow: var(--shadow);
        }

        .faq-question {
          padding: 25px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          transition: var(--transition);
        }

        .faq-question:hover {
          background: var(--bg-secondary);
        }

        .faq-question h3 {
          margin: 0;
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .faq-toggle {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--bg-tertiary);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-primary);
          transition: var(--transition);
          flex-shrink: 0;
        }

        .faq-item.open .faq-toggle {
          background: var(--primary-color);
          color: white;
          transform: rotate(180deg);
        }

        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.5s ease;
        }

        .faq-answer.open {
          max-height: 500px;
        }

        .faq-answer p {
          padding: 0 25px 25px;
          margin: 0;
          color: var(--text-secondary);
        }

        .support-links {
          display: flex;
          gap: 15px;
          padding: 0 25px 25px;
        }

        .support-link {
          display: flex;
          align-items: center;
          gap: 8px;
          background: var(--bg-secondary);
          padding: 10px 15px;
          border-radius: var(--radius-md);
          color: var(--text-primary);
          font-size: 0.9rem;
          transition: var(--transition);
        }

        .support-link:hover {
          background: var(--bg-tertiary);
        }

        .faq-sidebar {
          position: sticky;
          top: 100px;
          height: fit-content;
        }

        .sidebar-card {
          background: var(--card-bg);
          border-radius: var(--radius-lg);
          padding: 30px;
          box-shadow: var(--shadow);
          border: 1px solid var(--border-color);
        }

        .sidebar-icon {
          width: 70px;
          height: 70px;
          border-radius: var(--radius-lg);
          background: var(--gradient);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 2rem;
          margin-bottom: 20px;
        }

        .sidebar-card h3 {
          font-size: 1.3rem;
          margin-bottom: 10px;
        }

        .sidebar-card p {
          color: var(--text-secondary);
          margin-bottom: 30px;
          font-size: 0.95rem;
        }

        .contact-methods {
          display: flex;
          flex-direction: column;
          gap: 15px;
          margin-bottom: 20px;
        }

        .contact-method {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 15px;
          border-radius: var(--radius-md);
          background: var(--bg-secondary);
          transition: var(--transition);
          color: var(--text-primary);
        }

        .contact-method:hover {
          background: var(--bg-tertiary);
          transform: translateX(5px);
        }

        .contact-method i {
          font-size: 1.2rem;
          color: var(--primary-color);
        }

        .method-label {
          display: block;
          font-weight: 500;
          font-size: 0.9rem;
        }

        .method-detail {
          display: block;
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        @media (max-width: 992px) {
          .faq-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .faq-sidebar {
            position: static;
          }
        }

        @media (max-width: 768px) {
          .faq-question {
            padding: 20px;
          }

          .faq-question h3 {
            font-size: 1rem;
            padding-right: 10px;
          }

          .support-links {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
};

export default FAQ;
