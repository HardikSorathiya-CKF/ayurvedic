import { Link } from "react-router-dom";
import { GiMortar } from "react-icons/gi";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import { FaPinterestP } from "react-icons/fa6";
import { HiOutlineMapPin, HiOutlinePhone, HiOutlineEnvelope } from "react-icons/hi2";
import footerleft from "../assets/images/footer-left.webp";
import footerright from "../assets/images/footer-right.webp";

const usefulLinks = [
  { label: "Shipping Options", to: "/shop" },
  { label: "My Wishlist", to: "#" },
  { label: "My Account", to: "#" },
  { label: "Return Policy", to: "#" },
  { label: "Shopping FAQs", to: "#" },
];

const socials = [
  { icon: FiFacebook, label: "Facebook" },
  { icon: FiTwitter, label: "Twitter" },
  { icon: FaPinterestP, label: "Pinterest" },
  { icon: FiInstagram, label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="site-footer position-relative overflow-hidden">
        <img src={footerleft} alt="Ayurvedic products" className="footer-bg-left" />
      <div className="container position-relative z-1">
        <div className="footer-top row align-items-center g-4">
          <div className="col-lg-5">
            <h3 className="footer-newsletter-title mb-0">
              Sign Up To Get Updates &amp; News About Us..
            </h3>
          </div>
          <div className="col-lg-7">
            <form className="footer-newsletter" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter Your Email..." required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="footer-main row g-4">
          <div className="col-md-6 col-lg-4">
            <Link to="/" className="footer-brand d-flex align-items-center">
              <GiMortar size={30} />
              <span>Aushadhi</span>
            </Link>
            <p className="footer-about">
              Amet minim mollit non deserunt ullamco est sit Velit officia
              consequat duis enim velit mollit. sunt nostrud amet. Excepteur
              sint occaecat.
            </p>
            <div className="footer-socials d-flex gap-3">
              {socials.map((item) => {
                const Icon = item.icon;
                return (
                  <a key={item.label} href="#" aria-label={item.label}>
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <h4 className="footer-heading">Useful Links</h4>
            <ul className="footer-links list-unstyled mb-0">
              {usefulLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-md-6 col-lg-4">
            <h4 className="footer-heading">Contact Info</h4>
            <ul className="footer-contact list-unstyled mb-0 position-relative z-1">
              <li>
                <HiOutlineMapPin />
                <span>4517 Washington Ave. Manchester, Kentucky 39495</span>
              </li>
              <li>
                <HiOutlinePhone />
                <span>(208) 555-0112</span>
              </li>
              <li>
                <HiOutlineEnvelope />
                <span>example@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom text-center">
          Copyright © 2026. All Right Reserved. Aushadhi
        </div>
      </div>
      <img src={footerright} alt="Ayurvedic products" className="footer-bg-right" />
    </footer>
  );
}
