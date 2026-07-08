import { FiArrowRight } from "react-icons/fi";
import ContactImg from "../../assets/images/contact.webp";

export default function Contact() {
  return (
    <section className="contact-section py-5">
      <div className="container">
        <div className="row g-4 align-items-stretch">
          <div className="col-lg-7">
            <div className="contact-visual">
              <img src={ContactImg} alt="Contact us" />
            </div>
          </div>

          <div className="col-lg-5">
            <div className="contact-form">
              <h2 className="contact-title">Contact Us</h2>
              <form onSubmit={(e) => e.preventDefault()}>
                <input type="text" className="contact-input" placeholder="Name*" required />
                <input type="tel" className="contact-input" placeholder="Phone Number*" required />
                <input type="date" className="contact-input" required />
                <textarea className="contact-input" rows="4" placeholder="Message" />
                <button type="submit" className="contact-submit">
                  Send Message <FiArrowRight />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
