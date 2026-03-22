import { useEffect, useMemo, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const reviews = [
  {
    name: "Aditi Sharma",
    initials: "AS",
    text: "Very stable speed and quick setup. My work calls run smoothly every day.",
  },
  {
    name: "Rahul Patil",
    initials: "RP",
    text: "Best connection I used in Pimpri. No lag in meetings and OTT works great.",
  },
  {
    name: "Sneha Jadhav ",
    initials: "SJ",
    text: "Support team is fast and polite. They fixed my issue in under 15 minutes.",
  },
  {
    name: "Nikhil Deshmukh",
    initials: "ND",
    text: "Gaming ping is good and weekend streaming is smooth even on multiple devices.",
  },
  {
    name: "Pooja Kulkarni",
    initials: "PK",
    text: "Clean plans and fair price. The free setup and router made it easy to switch.",
  },
  {
    name: "Karan More (Pimpri)",
    initials: "KM",
    text: "No downtime so far. Netflix and SonyLIV run in high quality without buffering.",
  },
];

const getCardsPerView = (width) => {
  if (width <= 640) return 1;
  if (width <= 1024) return 2;
  return 3;
};

const Testimonials = () => {
  const [cardsPerView, setCardsPerView] = useState(() =>
    typeof window === "undefined" ? 1 : getCardsPerView(window.innerWidth),
  );
  const [activeIndex, setActiveIndex] = useState(0);

  const maxIndex = useMemo(
    () => Math.max(0, reviews.length - cardsPerView),
    [cardsPerView],
  );
  const safeActiveIndex = Math.min(activeIndex, maxIndex);

  useEffect(() => {
    const handleResize = () => {
      setCardsPerView(getCardsPerView(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => {
      const clamped = Math.min(prev, maxIndex);
      return clamped <= 0 ? maxIndex : clamped - 1;
    });
  };

  const handleNext = () => {
    setActiveIndex((prev) => {
      const clamped = Math.min(prev, maxIndex);
      return clamped >= maxIndex ? 0 : clamped + 1;
    });
  };

  useEffect(() => {
    if (maxIndex === 0) return undefined;

    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4500);

    return () => window.clearInterval(interval);
  }, [maxIndex]);

  return (
    <section className="testimonials testimonials-ref" id="reviews">
      <h2>Trusted by Families</h2>
      <p className="testimonial-sub">Real users. Real speed. Real support.</p>

      <div className="testimonial-slider-wrap">
        <button
          type="button"
          className="testimonial-nav prev"
          onClick={handlePrev}
          aria-label="Previous reviews"
        >
          <FiChevronLeft />
        </button>

        <div className="testimonial-track-window">
          <div
            className="testimonial-track"
            style={{ transform: `translateX(-${safeActiveIndex * (100 / cardsPerView)}%)` }}
          >
            {reviews.map((review, index) => {
              const isVisible =
                index >= safeActiveIndex && index < safeActiveIndex + cardsPerView;
              const isMiddle =
                isVisible && index === safeActiveIndex + Math.floor(cardsPerView / 2);

              return (
              <article
                key={review.name}
                className={`testimonial-card ${isMiddle ? "card-center" : ""} ${
                  isVisible && !isMiddle ? "card-side" : ""
                }`}
                style={{ flex: `0 0 ${100 / cardsPerView}%` }}
              >
                <div className="testimonial-bubble">
                  <p>{review.text}</p>
                </div>
                <div className="testimonial-person">
                  <div className="avatar">{review.initials}</div>
                  <div>
                    <h4>{review.name}</h4>
                  </div>
                </div>
              </article>
              );
            })}
          </div>
        </div>

        <button
          type="button"
          className="testimonial-nav next"
          onClick={handleNext}
          aria-label="Next reviews"
        >
          <FiChevronRight />
        </button>
      </div>

      <div className="slider-dots">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            type="button"
            className={`slider-dot ${index === safeActiveIndex ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to review set ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
