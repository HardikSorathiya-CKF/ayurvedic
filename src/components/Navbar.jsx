import { Link, NavLink } from "react-router-dom";
import { GiMortar } from "react-icons/gi";
import { FiHeart, FiHome, FiShoppingBag, FiUser } from "react-icons/fi";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Shop", to: "/shop" },
  { label: "Contact", to: "/contact" },
];

const navActions = [
  { label: "Wishlist", to: "#", icon: FiHeart },
  { label: "Cart", to: "#", icon: FiShoppingBag, badge: 2 },
  { label: "Account", to: "#", icon: FiUser },
];

const bottomBarItems = [
  { label: "Home", to: "/", icon: FiHome },
  ...navActions,
];

function NavActions() {
  return navActions.map((item) => {
    const Icon = item.icon;
    return (
      <a
        key={item.label}
        href={item.to}
        className="nav-icon"
        aria-label={item.label}
      >
        <Icon />
        {item.badge != null && (
          <span className="cart-badge">{item.badge}</span>
        )}
      </a>
    );
  });
}

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg site-navbar pt-0">
        <div className="container navbar-inner">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <GiMortar size={28} />
            <span className="brand-text">
              Aushadhi
            </span>
          </Link>

          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#mobileNav"
            aria-label="Open menu"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="navbar-desktop">
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

            <div className="nav-actions d-flex align-items-center gap-4">
              <NavActions />
            </div>
          </div>
        </div>
      </nav>

      <div
        className="offcanvas offcanvas-start site-offcanvas"
        tabIndex="-1"
        id="mobileNav"
      >
        <div className="offcanvas-header">
          <span className="offcanvas-title">Menu</span>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav">
            {links.map((link) => (
              <li className="nav-item" key={link.to}>
                <NavLink
                  className="nav-link"
                  to={link.to}
                  end={link.to === "/"}
                  data-bs-dismiss="offcanvas"
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mobile-bottom-bar d-lg-none">
        {bottomBarItems.map((item) => {
          const Icon = item.icon;
          const content = (
            <>
              <span className="mobile-bar-icon">
                <Icon />
                {item.badge != null && (
                  <span className="cart-badge">{item.badge}</span>
                )}
              </span>
              <span>{item.label}</span>
            </>
          );

          return item.to.startsWith("/") ? (
            <NavLink
              key={item.label}
              to={item.to}
              end={item.to === "/"}
              className="mobile-bar-item"
            >
              {content}
            </NavLink>
          ) : (
            <a
              key={item.label}
              href={item.to}
              className="mobile-bar-item"
              aria-label={item.label}
            >
              {content}
            </a>
          );
        })}
      </div>
    </>
  );
}
