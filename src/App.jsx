import { Helmet } from "react-helmet";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Broadband from "./components/Broadband";
import Pricing from "./components/Pricing";
import Faq from "./components/Faq";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import LandingPopup from "./components/LandingPopup";
import FloatingCallButton from "./components/FloatingCallButton";
import MobileStickyCta from "./components/MobileStickyCta";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Skytech Internet Services",
  url: "https://skytechinternet.in",
  areaServed: [
    "Wakad",
    "Jagtap Dairy",
    "Kalewadi Phata",
    "Vishal Nagar",
    "Kaspate Vasti",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pune",
    addressCountry: "IN",
  },
  telephone: "+91 70207 37903",
};

function App() {
  return (
    <>
      <Helmet>
        <title>Best Broadband in Wakad Pune | Skytech Internet Services</title>
        <meta
          name="description"
          content="High-speed fiber broadband in Wakad, Jagtap Dairy, Kalewadi Phata, Vishal Nagar & nearby Pune. Plans start at Rs 499/month."
        />
        <meta
          name="keywords"
          content="broadband in Wakad, internet provider Pune, fiber internet Wakad, wifi plans Pune, wifi service provider in wakad"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://skytechinternet.in/" />

        <meta property="og:title" content="Best Broadband in Wakad Pune | Skytech" />
        <meta
          property="og:description"
          content="Fast internet plans in Pune starting Rs 499"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://skytechinternet.in" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Broadband in Wakad Pune" />
        <meta
          name="twitter:description"
          content="Affordable fiber internet plans in Pune"
        />

        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>
      <Navbar />
      <Hero />
      <Services />
      <Broadband />
      <Pricing />
      <Faq />
      <Testimonials />
      <Footer />
      <FloatingCallButton />
      <MobileStickyCta />
      <LandingPopup />
    </>
  );
}

export default App;
