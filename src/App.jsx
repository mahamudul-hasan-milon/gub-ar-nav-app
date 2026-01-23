import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AppPreview from "./components/AppPreview";
import Features from "./components/Features";
import DownloadSection from "./components/DownloadSection";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import FloatingDownloadButton from "./components/FloatingDownloadButton";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Check for saved theme preference or use preferred color scheme
    const savedTheme =
      localStorage.getItem("app-theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("app-theme", newTheme);
  };

  return (
    <div className="app">
      <ScrollProgress />
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <AppPreview />
        <Features />
        <DownloadSection />
        <Testimonials />
        <FAQ />
      </main>
      <FloatingDownloadButton />
      <Footer />
    </div>
  );
}

export default App;
