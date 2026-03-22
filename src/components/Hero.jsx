import { useEffect, useRef } from "react";
import hero from "../assets/hero.png";
import { FiCheckCircle, FiPhoneCall, FiWifi } from "react-icons/fi";

const heroPoints = [
  "Setup in 1 Day Free Router + Setup",
  "Unlimited Data",
  "OTT Subscription Included",
  "CCTV Installation",
];

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const heroEl = heroRef.current;
    if (!heroEl) return undefined;

    let rafId = null;
    let currentX = 0;

    const setParallax = (x, y) => {
      currentX = x;
      heroEl.style.setProperty("--hero-parallax-x", `${x}px`);
      heroEl.style.setProperty("--hero-parallax-y", `${y}px`);
    };

    const onMouseMove = (event) => {
      if (window.innerWidth <= 768) return;
      const rect = heroEl.getBoundingClientRect();
      const relX = (event.clientX - rect.left) / rect.width - 0.5;
      const relY = (event.clientY - rect.top) / rect.height - 0.5;
      setParallax(relX * 10, relY * 8);
    };

    const onMouseLeave = () => setParallax(0, 0);

    const onScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        const rect = heroEl.getBoundingClientRect();
        const shift = Math.max(Math.min(-rect.top * 0.04, 8), -8);
        setParallax(currentX, shift);
        rafId = null;
      });
    };

    heroEl.addEventListener("mousemove", onMouseMove);
    heroEl.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      heroEl.removeEventListener("mousemove", onMouseMove);
      heroEl.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("scroll", onScroll);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  const solidOrangeButton = {
    background: "#FF5A00",
    backgroundImage: "none",
    color: "#F2F2F2",
    border: "1px solid #FF5A00",
    boxShadow: "none",
  };

  return (
    <section className="hero hero-iznet" id="home" ref={heroRef}>
      <div className="iz-hero-surface">
        <div className="hero-left">
          <span className="hero-badge">
            <span className="iz-badge-icon">
              <FiWifi />
            </span>
            #1 internet service provider in Wakad.
          </span>

          <h1>
            Super Fast Internet <br />
            <span className="highlight">for Home, Work, and OTT</span>
          </h1>

          <div className="price-line">
            Starts at <span className="price-highlight">Rs 499</span> / month
          </div>

          <p className="hero-subtext">
            Book now for fast installation and stable speed at the best local price.
          </p>

          <div className="hero-features hero-features-cards">
            {heroPoints.map((point) => (
              <div key={point} className="hero-feature-card">
                <FiCheckCircle style={{ color: "#FF5A00" }} />
                <div>
                  <strong>{point}</strong>
                </div>
              </div>
            ))}
          </div>

          <div className="hero-form-wrap">
            <a
              href="tel:+917020737903"
              className="hero-direct-call"
              aria-label="Call now"
              style={solidOrangeButton}
              data-solid-orange="true"
            >
              <FiPhoneCall />
              Call for Instant Setup
            </a>
          </div>

        </div>

        <div className="hero-right">
          <div className="image-wrapper">
            <img
              src={hero}
              alt="Fiber internet service"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="iz-hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
