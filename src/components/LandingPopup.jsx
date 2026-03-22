import { useEffect, useState } from "react";
import { FiPhoneCall, FiX } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const POPUP_STORAGE_KEY = "skytech_demo_popup_shown";

const LandingPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const solidOrangeButton = {
    background: "#FF5A00",
    backgroundImage: "none",
    color: "#F2F2F2",
    border: "1px solid #FF5A00",
    boxShadow: "none",
  };

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem(POPUP_STORAGE_KEY) === "1";
    if (alreadyShown) return undefined;

    const timer = window.setTimeout(() => {
      setIsOpen(true);
      sessionStorage.setItem(POPUP_STORAGE_KEY, "1");
    }, 5000);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  const callLink = "tel:+917020737903";
  const whatsappLink =
    "https://wa.me/917020737903?text=Hi%20SkyTech%2C%20I%20want%20WiFi%20plan%20details%20for%20Rs%20149%2Fmonth.";

  if (!isOpen) return null;

  return (
    <aside className="landing-popup" role="dialog" aria-label="WiFi plan offer">
      <button
        type="button"
        className="landing-popup-close"
        onClick={() => setIsOpen(false)}
        aria-label="Close popup"
      >
        <FiX />
      </button>

      <span className="landing-popup-badge">Special Offer</span>
      <h3>Try WiFi Plan at Rs 149/month</h3>
      <p>Try our package now and get fast setup support.</p>

      <div className="landing-popup-actions">
        <a
          className="landing-popup-cta landing-popup-call"
          href={callLink}
          onClick={() => setIsOpen(false)}
          style={solidOrangeButton}
          data-solid-orange="true"
        >
          <FiPhoneCall />
          Call
        </a>
        <a
          className="landing-popup-cta landing-popup-whatsapp"
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          onClick={() => setIsOpen(false)}
          style={solidOrangeButton}
          data-solid-orange="true"
        >
          <FaWhatsapp />
          WhatsApp
        </a>
      </div>
    </aside>
  );
};

export default LandingPopup;
