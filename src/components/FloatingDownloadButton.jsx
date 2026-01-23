import { useState, useEffect } from "react";

const FloatingDownloadButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [userDevice, setUserDevice] = useState("unknown");

  useEffect(() => {
    // Check if user is on mobile
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const isMobile =
      /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
        userAgent.toLowerCase(),
      );

    if (/android/i.test(userAgent)) {
      setUserDevice("android");
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      setUserDevice("ios");
    }

    // Show button only on mobile and after scrolling past hero section
    const handleScroll = () => {
      const heroSection = document.getElementById("home");
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        setIsVisible(isMobile && window.pageYOffset > heroBottom - 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToDownload = () => {
    const downloadSection = document.getElementById("download");
    if (downloadSection) {
      downloadSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getButtonText = () => {
    if (userDevice === "android") return "Get it on Google Play";
    if (userDevice === "ios") return "Download on App Store";
    return "Download App";
  };

  if (!isVisible) return null;

  return (
    <div className="floating-download-btn" onClick={scrollToDownload}>
      <div className="floating-btn-content">
        <i className="fas fa-download"></i>
        <span>{getButtonText()}</span>
      </div>

      <style jsx>{`
        .floating-download-btn {
          position: fixed;
          bottom: 20px;
          right: 20px;
          background: var(--gradient);
          color: white;
          padding: 15px 25px;
          border-radius: 50px;
          box-shadow: 0 10px 30px rgba(67, 97, 238, 0.3);
          cursor: pointer;
          z-index: 1000;
          transition: var(--transition);
          animation: float 3s ease-in-out infinite;
          display: none;
        }

        .floating-btn-content {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 600;
          font-size: 0.9rem;
        }

        .floating-download-btn:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(67, 97, 238, 0.4);
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @media (max-width: 768px) {
          .floating-download-btn {
            display: block;
          }
        }

        @media (max-width: 576px) {
          .floating-download-btn {
            bottom: 15px;
            right: 15px;
            padding: 12px 20px;
            font-size: 0.8rem;
          }

          .floating-btn-content span {
            display: none;
          }

          .floating-btn-content i {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default FloatingDownloadButton;
