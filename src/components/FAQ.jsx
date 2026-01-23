import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqItems = [
    {
      id: 1,
      question: "Is the app completely free to use?",
      answer:
        "Yes, our app is completely free to download and use with all core features available at no cost. We offer optional premium features for power users, but everything you need for productivity is available in the free version.",
    },
    {
      id: 2,
      question: "Which devices are supported?",
      answer:
        "The app is available for both Android (version 8.0 and above) and iOS (version 13.0 and above). We also have a web version that syncs with your mobile app for seamless cross-platform usage.",
    },
    {
      id: 3,
      question: "How does the data sync work?",
      answer:
        "Your data syncs automatically across all your devices using secure cloud storage. Changes made on one device appear on all your other devices within seconds. You can also enable manual sync if preferred.",
    },
    {
      id: 4,
      question: "Is my data secure and private?",
      answer:
        "Absolutely. We use end-to-end encryption for all your data. We never sell your personal information, and you have full control over your data. You can read our detailed privacy policy for more information.",
    },
    {
      id: 5,
      question: "How do I export my data?",
      answer:
        "You can export your tasks, notes, and analytics at any time in multiple formats (PDF, CSV, JSON). Go to Settings > Data Management > Export Data to download all your information.",
    },
    {
      id: 6,
      question: "What happens if I lose my device?",
      answer:
        "Your data is safely stored in the cloud. Simply install the app on your new device, log in with your account, and all your data will be restored. You can also remotely sign out of lost devices from the web version.",
    },
    {
      id: 7,
      question: "How do I contact support?",
      answer:
        "You can contact our support team 24/7 through the in-app chat, email at support@appname.com, or visit our help center. We typically respond within a few hours, often much sooner.",
    },
    {
      id: 8,
      question: "Can I use the app offline?",
      answer:
        "Yes! The app works offline for most features. Any changes you make offline will sync automatically once you reconnect to the internet. Some features like cloud backup require an internet connection.",
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
                <a href="mailto:support@appname.com" className="contact-method">
                  <i className="fas fa-envelope"></i>
                  <div>
                    <span className="method-label">Email us</span>
                    <span className="method-detail">support@appname.com</span>
                  </div>
                </a>

                <a href="#" className="contact-method">
                  <i className="fas fa-comments"></i>
                  <div>
                    <span className="method-label">Live chat</span>
                    <span className="method-detail">24/7 available</span>
                  </div>
                </a>

                <a href="#" className="contact-method">
                  <i className="fas fa-file-alt"></i>
                  <div>
                    <span className="method-label">Help center</span>
                    <span className="method-detail">Docs & tutorials</span>
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
