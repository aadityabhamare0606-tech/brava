import laptop from "../assets/laptop.png";
import iptvImage from "../assets/iptv.jpeg";
import { FiArrowRight, FiCheckCircle, FiTv } from "react-icons/fi";

const broadbandPoints = [
  "Setup in 1 day with free router and free installation",
  "Unlimited data for streaming, gaming, and office work",
  "Low-latency speed with stable connection all day",
  "24/7 local support with fast issue resolution",
];

const iptvPoints = [
  "300+ live TV channels with stable streaming quality",
  "Free setup support and quick activation by our local team",
  "Works smoothly with fiber plans for family entertainment",
  "Clear monthly plan options with fast service assistance",
];

const Broadband = () => {
  const goToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="broadband broadband-merged container" id="benefits">
      <article className="broadband-pane broadband-pane-left">
        <div className="broadband-info-head">
          <span className="broadband-title-tag">Broadband Service</span>
          <h2>Fiber Broadband with OTT</h2>
        </div>

        <div className="image-wrapper broadband-main-image">
          <img src={laptop} alt="Broadband service" loading="lazy" decoding="async" />
        </div>

        <ul className="broadband-points">
          {broadbandPoints.map((item) => (
            <li key={item}>
              <FiCheckCircle />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </article>

      <article className="broadband-pane broadband-pane-right">
        <div className="iptv-info-head">
          <span className="iptv-title-tag">
            <FiTv />
            IPTV Service
          </span>
          <h2>IPTV 300+ Channels</h2>
        </div>

        <div className="iptv-merged-image-wrap">
          <img
            src={iptvImage}
            alt="IPTV channels service"
            loading="lazy"
            decoding="async"
            className="iptv-merged-image"
          />
        </div>

        <ul className="iptv-points">
          {iptvPoints.map((item) => (
            <li key={item}>
              <FiCheckCircle />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <button type="button" className="iptv-plan-btn" onClick={goToContact}>
          Get Plan
          <FiArrowRight />
        </button>
      </article>
    </section>
  );
};

export default Broadband;
