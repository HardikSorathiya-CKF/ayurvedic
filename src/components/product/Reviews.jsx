import { useState } from "react";
import { FiStar } from "react-icons/fi";

const reviews = [
  {
    name: "Marion Alvarado",
    date: "12.04.24",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.",
    rating: 5,
  },
  {
    name: "Steffi Smith",
    date: "23.04.24",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.",
    rating: 5,
  },
];

function Stars({ count }) {
  return (
    <span className="pd-review-stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <FiStar key={i} className={i < count ? "is-filled" : ""} />
      ))}
    </span>
  );
}

export default function Reviews() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="pd-reviews">
      <div className="pd-review-list">
        {reviews.map((item) => (
          <div className="pd-review-item d-flex" key={item.name}>
            <img src={item.image} alt={item.name} className="pd-review-avatar" />
            <div className="pd-review-body">
              <h5 className="pd-review-name mb-1">
                {item.name} <span>({item.date})</span>
              </h5>
              <p className="pd-review-text mb-0">{item.text}</p>
            </div>
            <Stars count={item.rating} />
          </div>
        ))}
      </div>

      <div className="pd-review-form">
        <h4 className="pd-review-form-title">Add A Review</h4>

        <div className="pd-rate d-flex align-items-center gap-2 mb-4">
          <span>Rate This Product</span>
          <span className="pd-rate-stars">
            {Array.from({ length: 5 }).map((_, i) => (
              <button
                type="button"
                key={i}
                className={i < (hover || rating) ? "is-active" : ""}
                onClick={() => setRating(i + 1)}
                onMouseEnter={() => setHover(i + 1)}
                onMouseLeave={() => setHover(0)}
                aria-label={`Rate ${i + 1} stars`}
              >
                <FiStar />
              </button>
            ))}
          </span>
        </div>

        <form onSubmit={(e) => e.preventDefault()}>
          <div className="row g-3 mb-3">
            <div className="col-md-6">
              <input type="text" className="pd-review-input" placeholder="Enter Your Name" required />
            </div>
            <div className="col-md-6">
              <input type="email" className="pd-review-input" placeholder="Enter Your Email" required />
            </div>
          </div>
          <textarea className="pd-review-input" rows="5" placeholder="Enter Your Message..." />
          <button type="submit" className="pd-review-submit">
            Post Review
          </button>
        </form>
      </div>
    </div>
  );
}
