import {
  FiBriefcase,
  FiCast,
  FiHome,
  FiWifi,
} from "react-icons/fi";
import { FaVideo } from "react-icons/fa";

const Services = () => {
  const features = [
    {
      text: "Home Internet",
      description: "High-speed fiber internet for streaming, online classes, office work, and smooth daily use at home.",
      icon: FiHome,
    },
    {
      text: "IPTV 300 Channel Free Setup Connection",
      description: "Get 300+ live channels with clear quality, easy setup support, and stable connection for family entertainment.",
      icon: FiCast,
    },
    {
      text: "Unlimited Data with 24/7 Support",
      description: "Use unlimited data all day with no daily cap, plus fast support whenever you need help.",
      icon: FiWifi,
    },
    {
      text: "CCTV Installation",
      description: "Professional CCTV setup with proper wiring, camera placement, and reliable monitoring for your safety.",
      icon: FaVideo,
    },
    {
      text: "Corporate Internet",
      description: "Dedicated high-uptime internet solutions for offices with stable speed and enterprise-grade reliability.",
      icon: FiBriefcase,
      comingSoon: true,
    },
  ];

  return (
    <section className="services services-ref" id="services">
      <div className="container services-ref-head">
        <h2>
          Smart <span className="highlight-purple">Services</span> for Every Need
        </h2>
      </div>

        <div className="container services-ref-grid">
          {features.map((feature) => (
          <article key={feature.text} className="service-card">
            {feature.comingSoon ? (
              <span className="service-card-badge">Coming Soon</span>
            ) : null}
            <span className="service-card-icon">
              <feature.icon />
            </span>

            <h3>{feature.text}</h3>
            <p>{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
