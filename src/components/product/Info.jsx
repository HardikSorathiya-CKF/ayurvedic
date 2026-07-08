import { useState } from "react";
import { FiMinus, FiPlus, FiShoppingBag, FiStar } from "react-icons/fi";

export default function Info({ product }) {
  const [qty, setQty] = useState(1);

  const decrease = () => setQty((q) => Math.max(1, q - 1));
  const increase = () => setQty((q) => q + 1);

  return (
    <div className="pd-info">
      <h1 className="pd-title">{product.name}</h1>

      <div className="pd-rating">
        {Array.from({ length: 5 }).map((_, i) => (
          <FiStar key={i} />
        ))}
        <span>({product.reviews} Reviews)</span>
      </div>

      <div className="pd-price">
        {product.oldPrice && <span className="old-price">₹{product.oldPrice}</span>}
        <span className="current-price">₹{product.price}</span>
      </div>

      <p className="pd-description">{product.description}</p>

      <div className="pd-actions">
        <div className="pd-qty">
          <button type="button" onClick={decrease} aria-label="Decrease quantity">
            <FiMinus />
          </button>
          <span>{qty}</span>
          <button type="button" onClick={increase} aria-label="Increase quantity">
            <FiPlus />
          </button>
        </div>

        <button type="button" className="pd-add-cart">
          <FiShoppingBag />
          Add To Cart
        </button>

        <button type="button" className="pd-buy-now">
          Buy Now
        </button>
      </div>
    </div>
  );
}
