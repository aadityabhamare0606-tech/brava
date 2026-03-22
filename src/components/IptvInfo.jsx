import { FiArrowRight, FiCheckCircle, FiTv } from "react-icons/fi";
import iptvImage from "../assets/iptv.jpeg";

const iptvPoints = [
  "300+ live TV channels with stable streaming quality",
  "Free setup support and quick activation by our local team",
  "Works smoothly with fiber plans for family entertainment",
  "Clear monthly plan options with fast service assistance",
];

const IptvInfo = () => {
  const goToPricing = () => {
    const section = document.getElementById("pricing");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="iptv-info container" id="iptv">
      <div className="iptv-info-left">
        <img
          src={iptvImage}
          alt="IPTV streaming service"
          loading="lazy"
          decoding="async"
          className="iptv-main-image"
        />
      </div>

      <div className="iptv-info-right">
        <div className="iptv-info-head">
          <span className="iptv-title-tag">
            <FiTv />
            IPTV Service
          </span>
          <h2>IPTV 300+ Channels</h2>
        </div>

        <ul className="iptv-points">
          {iptvPoints.map((item) => (
            <li key={item}>
              <FiCheckCircle />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <button type="button" className="iptv-plan-btn" onClick={goToPricing}>
          Get Plan
          <FiArrowRight />
        </button>
      </div>
    </section>
  );
};

export default IptvInfo;
