import { Link } from "react-router-dom";
import { FiHeart, FiShoppingBag, FiStar } from "react-icons/fi";

export default function Product({ item }) {
  return (
    <article className="product-card h-100">
      <div className="product-card-image">
        {item.badge && (
          <span className={`product-badge product-badge--${item.badgeType}`}>
            {item.badge}
          </span>
        )}
        <button type="button" className="product-wishlist" aria-label="Add to wishlist">
          <FiHeart />
        </button>
        <Link to="/product">
          <img src={item.image} alt={item.name} />
        </Link>
      </div>

      <div className="product-card-body">
        <h5 className="product-name">
          <Link to="/product">{item.name}</Link>
        </h5>

        <div className="d-flex justify-content-between align-items-center product-meta">
          <div className="product-price">
            <span className="old-price">₹{item.oldPrice}</span>
            <span className="current-price">₹{item.price}</span>
          </div>
          <div className="product-rating">
            <FiStar />
            <span>4.5/5</span>
          </div>
        </div>

        <button type="button" className="product-cart-btn w-100">
          <FiShoppingBag />
          Add To Cart
        </button>
      </div>
    </article>
  );
}
