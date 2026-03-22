import { useEffect, useState } from "react";
import { FiPhoneCall } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const MobileStickyCta = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const heroSection = document.getElementById("home");
    if (!heroSection) return undefined;

    const onScroll = () => {
      const rect = heroSection.getBoundingClientRect();
      const pastHero = rect.bottom < 72;
      setIsVisible(pastHero);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const whatsappMessage = encodeURIComponent(
    "Hi SkyTech Team 👋\nI’d like to know more about your broadband plans.\n\nPlease contact me.",
  );

  return (
    <div className={`mobile-sticky-cta ${isVisible ? "is-visible" : ""}`} aria-hidden={!isVisible}>
      <a href="tel:+917020737903" className="mobile-sticky-btn mobile-sticky-call" aria-label="Call now">
        <FiPhoneCall />
        <span>Call</span>
      </a>
      <a
        href={`https://wa.me/917020737903?text=${whatsappMessage}`}
        className="mobile-sticky-btn mobile-sticky-whatsapp"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp />
        <span>WhatsApp</span>
      </a>
    </div>
  );
};

export default MobileStickyCta;
