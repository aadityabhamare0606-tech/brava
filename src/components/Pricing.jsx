import { useState } from "react";
import { FiCheck } from "react-icons/fi";

const pricingData = {
  100: [
    { duration: "12 Months", price: 499, tag: "Best value" },
    { duration: "6 Months", price: 549, tag: "Popular" },
    { duration: "3 Months", price: 599, tag: "Starter" },
  ],
  150: [
    { duration: "12 Months", price: 599, tag: "Best value" },
    { duration: "6 Months", price: 649, tag: "Popular" },
    { duration: "3 Months", price: 699, tag: "Starter" },
  ],
  200: [
    { duration: "12 Months", price: 699, tag: "Best value" },
    { duration: "6 Months", price: 749, tag: "Popular" },
    { duration: "3 Months", price: 799, tag: "Starter" },
  ],
  300: [
    { duration: "12 Months", price: 899, tag: "Best value" },
    { duration: "6 Months", price: 949, tag: "Popular" },
    { duration: "3 Months", price: 999, tag: "Starter" },
  ],
};

const Pricing = () => {
  const [speed, setSpeed] = useState(100);
  const solidOrangeButton = {
    background: "#FF5A00",
    backgroundImage: "none",
    backgroundColor: "#FF5A00",
    color: "#F2F2F2",
    border: "1px solid #FF5A00",
    boxShadow: "none",
  };

  const solidOrangeIcon = { color: "#FF5A00" };

  const goToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="pricing pricing-ref pricing-clean container" id="pricing">
      <h2>Pick Your Plan</h2>
      <p className="pricing-sub">
        Choose speed and duration. All plans include unlimited data and support.
      </p>

      <div className="speed-selector">
        {[100, 150, 200, 300].map((s) => (
          <button
            key={s}
            type="button"
            className={`speed-btn ${speed === s ? "active-speed" : ""}`}
            onClick={() => setSpeed(s)}
          >
            {s} Mbps
          </button>
        ))}
      </div>

      <div className="pricing-grid">
        {pricingData[speed].map((plan) => (
          <article key={`${speed}-${plan.duration}`} className="price-card clean-card">
            <span className="price-tag clean-tag">{plan.tag}</span>
            <h3>{plan.duration}</h3>
            <p className="clean-speed">{speed} Mbps</p>

            <div className="price-amount">
              <span className="price-value">Rs {plan.price}</span>
              <span className="price-period">/month</span>
            </div>

            <button
              type="button"
              className="price-btn clean-btn"
              onClick={goToContact}
              style={solidOrangeButton}
              data-solid-orange="true"
            >
              Book This Plan
            </button>

            <h4>Features & Benefit</h4>
            <ul className="price-features">
              <li>
                <FiCheck style={solidOrangeIcon} /> {speed} Mbps speed
              </li>
              <li>
                <FiCheck style={solidOrangeIcon} /> Unlimited data
              </li>
              <li>
                <FiCheck style={solidOrangeIcon} /> 24/7 support
              </li>
              <li>
                <FiCheck style={solidOrangeIcon} /> Free setup
              </li>
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
