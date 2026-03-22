import { FaWhatsapp } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";

const FloatingCallButton = () => {
  const whatsappMessage = encodeURIComponent(
    "Hi SkyTech Team.\nI’d like to know more about your broadband plans.\n\nPlease contact me.",
  );
  const whatsappLink = `https://wa.me/917020737903?text=${whatsappMessage}`;
  const callLink = "tel:+917020737903";

  return (
    <div className="floating-contact-stack" aria-label="Quick contact actions">
      <a href={callLink} className="floating-call-only" aria-label="Call now">
        <FiPhoneCall />
      </a>

      <a
        className="floating-call-cta"
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <span className="floating-call-icon floating-whatsapp-icon" aria-hidden="true">
          <FaWhatsapp />
        </span>
        <span className="floating-call-text">
          <strong className="floating-whatsapp-label">WhatsApp Now</strong>
        </span>
      </a>
    </div>
  );
};

export default FloatingCallButton;
