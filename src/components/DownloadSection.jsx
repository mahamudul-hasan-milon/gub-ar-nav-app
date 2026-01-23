import { useState, useEffect } from "react";

const DownloadSection = () => {
  const [userDevice, setUserDevice] = useState("unknown");
  const [recommendedBtn, setRecommendedBtn] = useState(null);

  const appDetails = {
    version: "2.5.1",
    android: {
      size: "45 MB",
      downloads: "500K+",
      link: "https://example.com/app.apk",
    },
    ios: {
      size: "68 MB",
      downloads: "300K+",
      link: "https://apps.apple.com/app/id1234567890",
    },
  };

  useEffect(() => {
    // Detect user device
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(userAgent)) {
      setUserDevice("android");
      setRecommendedBtn("android");
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      setUserDevice("ios");
      setRecommendedBtn("ios");
    } else {
      setUserDevice("desktop");
      setRecommendedBtn(null);
    }
  }, []);

  const handleDownload = (platform) => {
    // In a real app, you would track this download
    console.log(`Downloading for ${platform}`);

    // Simulate download start
    alert(
      `Starting download for ${platform === "android" ? "Android" : "iOS"}...`,
    );

    // Redirect to actual download link
    // window.open(platform === 'android' ? appDetails.android.link : appDetails.ios.link, '_blank');
  };

  return (
    <section className="download-section" id="download">
      <div className="container">
        <h2>Download AppName Now</h2>
        <p className="section-subtitle">
          Join millions of users who have transformed their productivity
        </p>

        <div className="download-content">
          <div className="download-info">
            <div className="version-badge">
              <span>Version {appDetails.version}</span>
              <span className="badge-new">NEW</span>
            </div>

            <h3>Ready to boost your productivity?</h3>
            <p className="download-desc">
              Download our app today and experience the difference. Available
              for both Android and iOS devices.
            </p>

            {recommendedBtn && (
              <div className="device-detection">
                <i className="fas fa-info-circle"></i>
                <span>
                  We detected you're on{" "}
                  {userDevice === "android" ? "Android" : "iOS"}. The{" "}
                  {userDevice === "android" ? "Android" : "iOS"} button is
                  highlighted for you.
                </span>
              </div>
            )}

            <div className="download-stats">
              <div className="download-stat">
                <div className="stat-value">{appDetails.android.downloads}</div>
                <div className="stat-label">Android Downloads</div>
              </div>
              <div className="download-stat">
                <div className="stat-value">{appDetails.ios.downloads}</div>
                <div className="stat-label">iOS Downloads</div>
              </div>
              <div className="download-stat">
                <div className="stat-value">4.9★</div>
                <div className="stat-label">Average Rating</div>
              </div>
            </div>
          </div>

          <div className="download-buttons">
            <div
              className={`download-platform ${recommendedBtn === "android" ? "recommended" : ""}`}
              onClick={() => handleDownload("android")}
            >
              <div className="platform-icon">
                <i className="fab fa-android"></i>
              </div>
              <div className="platform-info">
                <h4>Download for Android</h4>
                <p>APK • {appDetails.android.size}</p>
                {recommendedBtn === "android" && (
                  <div className="recommended-badge">
                    <i className="fas fa-star"></i> Recommended for you
                  </div>
                )}
              </div>
              <div className="download-arrow">
                <i className="fas fa-download"></i>
              </div>
            </div>

            <div
              className={`download-platform ${recommendedBtn === "ios" ? "recommended" : ""}`}
              onClick={() => handleDownload("ios")}
            >
              <div className="platform-icon">
                <i className="fab fa-apple"></i>
              </div>
              <div className="platform-info">
                <h4>Download for iOS</h4>
                <p>App Store • {appDetails.ios.size}</p>
                {recommendedBtn === "ios" && (
                  <div className="recommended-badge">
                    <i className="fas fa-star"></i> Recommended for you
                  </div>
                )}
              </div>
              <div className="download-arrow">
                <i className="fas fa-download"></i>
              </div>
            </div>

            <div className="download-notes">
              <div className="note">
                <i className="fas fa-shield-alt"></i>
                <span>100% Safe & Secure</span>
              </div>
              <div className="note">
                <i className="fas fa-sync-alt"></i>
                <span>Free Lifetime Updates</span>
              </div>
              <div className="note">
                <i className="fas fa-headset"></i>
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>

        <div className="qrcode-section">
          <div className="qrcode-container">
            <div className="qrcode-placeholder">
              <div className="qrcode-grid">
                {Array.from({ length: 25 }).map((_, i) => (
                  <div
                    key={i}
                    className={`qrcode-cell ${i % 3 === 0 ? "filled" : ""}`}
                  ></div>
                ))}
              </div>
            </div>
            <p>Scan to download on your mobile device</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .download-section {
          background: var(--gradient-hero);
          color: white;
          position: relative;
          overflow: hidden;
        }

        .download-section h2 {
          color: white;
          -webkit-text-fill-color: white;
        }

        .section-subtitle {
          text-align: center;
          max-width: 600px;
          margin: 0 auto 60px;
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.9);
        }

        .download-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          margin-bottom: 60px;
        }

        .version-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(255, 255, 255, 0.2);
          padding: 8px 16px;
          border-radius: 30px;
          margin-bottom: 20px;
          backdrop-filter: blur(10px);
        }

        .badge-new {
          background: var(--accent-color);
          padding: 2px 8px;
          border-radius: 12px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .download-desc {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.9);
          margin: 20px 0;
          line-height: 1.6;
        }

        .device-detection {
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(255, 255, 255, 0.1);
          padding: 15px;
          border-radius: var(--radius-md);
          margin: 25px 0;
          border-left: 4px solid var(--accent-color);
        }

        .device-detection i {
          color: var(--accent-color);
          font-size: 1.2rem;
        }

        .download-stats {
          display: flex;
          gap: 30px;
          margin-top: 40px;
        }

        .download-stat {
          display: flex;
          flex-direction: column;
        }

        .stat-value {
          font-size: 2rem;
          font-weight: 700;
          line-height: 1;
        }

        .stat-label {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.8);
          margin-top: 5px;
        }

        .download-buttons {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .download-platform {
          background: rgba(255, 255, 255, 0.1);
          border-radius: var(--radius-lg);
          padding: 25px;
          display: flex;
          align-items: center;
          gap: 20px;
          cursor: pointer;
          transition: var(--transition);
          border: 2px solid transparent;
          backdrop-filter: blur(10px);
        }

        .download-platform:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-5px);
        }

        .download-platform.recommended {
          border-color: var(--accent-color);
          background: rgba(255, 255, 255, 0.15);
        }

        .platform-icon {
          width: 60px;
          height: 60px;
          border-radius: var(--radius-lg);
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
        }

        .platform-icon .fa-android {
          color: #3ddc84;
        }

        .platform-icon .fa-apple {
          color: #000;
        }

        .platform-info {
          flex: 1;
        }

        .platform-info h4 {
          font-size: 1.3rem;
          margin-bottom: 5px;
        }

        .platform-info p {
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.9rem;
          margin: 0;
        }

        .recommended-badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: var(--accent-color);
          color: white;
          padding: 5px 10px;
          border-radius: 15px;
          font-size: 0.8rem;
          margin-top: 8px;
          font-weight: 600;
        }

        .download-arrow {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: white;
          color: var(--primary-color);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          transition: var(--transition);
        }

        .download-platform:hover .download-arrow {
          transform: scale(1.1);
        }

        .download-notes {
          display: flex;
          justify-content: space-between;
          margin-top: 20px;
        }

        .note {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.9);
        }

        .note i {
          color: var(--accent-color);
        }

        .qrcode-section {
          display: flex;
          justify-content: center;
          margin-top: 60px;
          padding-top: 60px;
          border-top: 1px solid rgba(255, 255, 255, 0.2);
        }

        .qrcode-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }

        .qrcode-placeholder {
          width: 200px;
          height: 200px;
          background: white;
          border-radius: var(--radius-md);
          padding: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .qrcode-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          grid-template-rows: repeat(5, 1fr);
          gap: 4px;
          width: 100%;
          height: 100%;
        }

        .qrcode-cell {
          background: #f0f0f0;
          border-radius: 2px;
          transition: var(--transition);
        }

        .qrcode-cell.filled {
          background: #333;
        }

        .qrcode-container p {
          color: rgba(255, 255, 255, 0.9);
          text-align: center;
        }

        @media (max-width: 992px) {
          .download-content {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .download-stats {
            justify-content: center;
          }
        }

        @media (max-width: 768px) {
          .download-stats {
            flex-direction: column;
            gap: 20px;
            align-items: center;
          }

          .download-notes {
            flex-direction: column;
            gap: 15px;
            align-items: flex-start;
          }

          .qrcode-placeholder {
            width: 150px;
            height: 150px;
          }
        }

        @media (max-width: 576px) {
          .download-platform {
            padding: 20px;
          }

          .platform-icon {
            width: 50px;
            height: 50px;
            font-size: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default DownloadSection;
