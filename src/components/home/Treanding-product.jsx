import { Link } from "react-router-dom";
import { FiHeart, FiShoppingBag, FiStar } from "react-icons/fi";
import ProductImg1 from "../../assets/images/product/product2.webp";
import ProductImg2 from "../../assets/images/product/product3.webp";
import ProductImg3 from "../../assets/images/product/product4.webp";
import ProductImg4 from "../../assets/images/product/product5.webp";
import leftleaf from "../../assets/images/bg-shape1.webp";
import rightleaf from "../../assets/images/leaf3.webp";

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

export default function TrendingProduct() {
  return (
    <section className="product-section py-5 position-relative">
        <img src={leftleaf} alt="Ayurvedic products" className="left-product-leaf" />
      <div className="container">
        <div className="text-center mb-4 mb-md-5">
          <span className="section-label">Trending</span>
          <h2 className="section-title mb-0">Trending Products</h2>
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
                  <img src={item.image} alt={item.name} />
                </div>

                <div className="product-card-body">
                  <h5 className="product-name">{item.name}</h5>

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
      </div>
      <img src={rightleaf} alt="Ayurvedic products" className="right-product-leaf" />
    </section>
  );
}
