import { FiMail, FiPhoneCall } from "react-icons/fi";

const Footer = () => {
  const solidOrangeIcon = {
    background: "#FF5A00",
    backgroundImage: "none",
    color: "#F2F2F2",
    border: "1px solid #FF5A00",
  };

  return (
    <footer className="footer footer-ref" id="contact">
      <div className="container footer-top">
        <div className="footer-col footer-brand">
          <h3 className="footer-logo">SkyTech</h3>
          <p>
            Fast fiber internet with smooth OTT streaming and strong local support.
            Share your number and we will call you quickly.
          </p>
          <p className="footer-mail-line">
            Email: <a href="mailto:skytechints@gmail.com">skytechints@gmail.com</a>
          </p>
        </div>

        <div className="footer-col footer-action">
          <div className="footer-care-card">
            <div className="footer-care-content">
              <div className="footer-contact-item">
                <span className="footer-care-icon" style={solidOrangeIcon} aria-hidden="true">
                  <FiPhoneCall />
                </span>
                <div className="footer-contact-copy">
                  <small>Mobile No</small>
                  <a href="tel:+917020737903">+91 70207 37903</a>
                </div>
              </div>

              <div className="footer-contact-item">
                <span className="footer-care-icon" style={solidOrangeIcon} aria-hidden="true">
                  <FiMail />
                </span>
                <div className="footer-contact-copy">
                  <small>Email</small>
                  <a href="mailto:skytechints@gmail.com">skytechints@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} SkyTech. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
