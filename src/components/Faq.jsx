import { useState } from "react";
import { FiArrowRight, FiArrowUpRight, FiPhoneCall } from "react-icons/fi";
import hero from "../assets/hero.png";

const faqs = [
  {
    question: "How fast is the setup after I book a plan?",
    answer:
      "Most connections are installed within 24 hours in Pimpri and nearby areas, based on slot availability.",
  },
  {
    question: "Do all plans include unlimited data?",
    answer:
      "Yes. Every active broadband plan includes unlimited data for daily work, streaming, and gaming use.",
  },
  {
    question: "Will I get a router and setup for free?",
    answer:
      "Eligible plans include free router and setup. Our team confirms this clearly before installation.",
  },
  {
    question: "Which OTT apps are included?",
    answer:
      "Selected plans include popular OTT benefits such as Netflix, SonyLIV, and other partner apps.",
  },
  {
    question: "What if my internet stops working?",
    answer:
      "Our support team is available 24/7. Most issues are resolved quickly through remote checks or local visits.",
  },
  {
    question: "Can I upgrade my plan later?",
    answer:
      "Yes. You can upgrade to a higher speed plan anytime. The process is simple and handled by support.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(1);

  const goToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="faq faq-ref" id="faq">
      <div className="container faq-ref-wrap">
        <div className="faq-left">
          <h2>
            Frequently <span>Question</span> Ask
          </h2>

          <div className="faq-list">
            {faqs.map((item, index) => {
              const isOpen = index === openIndex;

              return (
                <article key={item.question} className={`faq-item ${isOpen ? "open" : ""}`}>
                  <button
                    type="button"
                    className="faq-question"
                    onClick={() => setOpenIndex(index)}
                    aria-expanded={isOpen}
                  >
                    <span>{item.question}</span>
                    {isOpen ? <FiArrowUpRight /> : <FiArrowRight />}
                  </button>
                  {isOpen && <div className="faq-answer">{item.answer}</div>}
                </article>
              );
            })}
          </div>
        </div>

        <div className="faq-right">
          <div className="faq-agent">

          </div>
          <div className="faq-help-card">
            <span className="faq-help-icon">
              <FiPhoneCall />
            </span>
            <h3>Still Need Our Help?</h3>
            <p>
              Our support team is ready to help you choose the right plan and
              solve your doubts quickly.
            </p>
            <button type="button" onClick={goToContact}>
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
