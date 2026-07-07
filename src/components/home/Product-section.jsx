import { Link } from "react-router-dom";
import { FiHeart, FiShoppingBag, FiStar } from "react-icons/fi";
import ProductImg1 from "../../assets/images/product/product2.webp";
import ProductImg2 from "../../assets/images/product/product3.webp";
import ProductImg3 from "../../assets/images/product/product4.webp";
import ProductImg4 from "../../assets/images/product/product5.webp";
import ProductImg5 from "../../assets/images/product/slide1.webp";
import ProductImg6 from "../../assets/images/product/slide2.webp";

const products = [
  {
    name: "Black Organic Tea",
    image: ProductImg1,
    oldPrice: 499,
    price: 349,
    badge: "Sale",
    badgeType: "sale",
  },
  {
    name: "Loose Leaf Tea",
    image: ProductImg2,
    oldPrice: 599,
    price: 419,
    badge: "30% Off",
    badgeType: "off",
  },
  {
    name: "Oolong Tea",
    image: ProductImg3,
    oldPrice: 450,
    price: 399,
  },
  {
    name: "Ashwagandha Capsules",
    image: ProductImg4,
    oldPrice: 699,
    price: 549,
    badge: "Sale",
    badgeType: "sale",
  },
  {
    name: "Turmeric Powder",
    image: ProductImg5,
    oldPrice: 299,
    price: 249,
    badge: "30% Off",
    badgeType: "off",
  },
  {
    name: "Triphala Churna",
    image: ProductImg6,
    oldPrice: 399,
    price: 329,
  },
];
export default function ProductSection() {
  return (
    <section className="product-section py-5">
      <div className="container">
        <div className="text-center mb-4 mb-md-5">
          <span className="section-label">Medicine</span>
          <h2 className="section-title mb-0">Our Top Products</h2>
        </div>

        <div className="row g-3 g-md-4">
          {products.map((item) => (
            <div className="col-6 col-lg-4" key={item.name}>
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

        <div className="text-center mt-4 mt-md-5">
          <Link to="/shop" className="btn-view-all">
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}
