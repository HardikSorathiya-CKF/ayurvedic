import { Link } from "react-router-dom";
import { FiHeart, FiShoppingBag, FiStar } from "react-icons/fi";
import ProductImg1 from "../../assets/images/product/product2.webp";
import ProductImg2 from "../../assets/images/product/product3.webp";
import ProductImg3 from "../../assets/images/product/product4.webp";
import ProductImg4 from "../../assets/images/product/product5.webp";

const products = [
  {
    name: "Ashwagandha Capsules",
    image: ProductImg1,
    oldPrice: 699,
    price: 549,
    badge: "Sale",
    badgeType: "sale",
  },
  {
    name: "Turmeric Powder",
    image: ProductImg2,
    oldPrice: 299,
    price: 249,
    badge: "30% Off",
    badgeType: "off",
  },
  {
    name: "Triphala Churna",
    image: ProductImg3,
    oldPrice: 399,
    price: 329,
  },
  {
    name: "Herbal Green Tea",
    image: ProductImg4,
    oldPrice: 499,
    price: 399,
    badge: "Sale",
    badgeType: "sale",
  },
];

export default function Related() {
  return (
    <section className="product-section pt-5">
      <div className="text-center mb-4 mb-md-5">
        <span className="section-label">You May Also Like</span>
        <h2 className="section-title mb-0">Related Products</h2>
      </div>

      <div className="row g-3 g-md-4">
        {products.map((item) => (
          <div className="col-6 col-lg-3" key={item.name}>
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
          </div>
        ))}
      </div>
    </section>
  );
}
