import { useState, useEffect } from "react";

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.pageYOffset / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="scroll-progress">
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      <style jsx>{`
        .scroll-progress {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: transparent;
          z-index: 1001;
        }

        .scroll-progress-bar {
          height: 100%;
          background: var(--gradient);
          transition: width 0.1s ease;
          border-radius: 0 2px 2px 0;
        }
      `}</style>
    </div>
  );
};

export default ScrollProgress;
