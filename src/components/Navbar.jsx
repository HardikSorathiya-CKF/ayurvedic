import { Link, NavLink } from "react-router-dom";
import { GiMortar } from "react-icons/gi";
import { FiHeart, FiShoppingBag, FiUser } from "react-icons/fi";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Shop", to: "/shop" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg site-navbar">
      <div className="container-fluid navbar-inner">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <GiMortar size={28} />
          <span className="brand-text">
            Pure
            <br />
            Ayurveda
          </span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav nav-center gap-lg-1">
            {links.map((link) => (
              <li className="nav-item" key={link.to}>
                <NavLink
                  className="nav-link"
                  to={link.to}
                  end={link.to === "/"}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="nav-actions d-flex align-items-center gap-3">
            <a href="#" className="nav-icon" aria-label="Wishlist">
              <FiHeart />
            </a>
            <a href="#" className="nav-icon" aria-label="Cart">
              <FiShoppingBag />
              <span className="cart-badge">2</span>
            </a>
            <a href="#" className="nav-icon" aria-label="Account">
              <FiUser />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
