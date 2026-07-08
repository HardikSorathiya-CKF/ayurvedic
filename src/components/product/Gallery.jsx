import { useState } from "react";

export default function Gallery({ images }) {
  const [active, setActive] = useState(0);

  return (
    <div className="pd-gallery">
      <div className="pd-gallery-main">
        <img src={images[active]} alt="Product" />
      </div>
      <div className="pd-gallery-thumbs">
        {images.map((img, index) => (
          <button
            type="button"
            key={index}
            className={`pd-thumb${index === active ? " is-active" : ""}`}
            onClick={() => setActive(index)}
            aria-label={`View image ${index + 1}`}
          >
            <img src={img} alt={`Thumbnail ${index + 1}`} />
          </button>
        ))}
      </div>
    </div>
  );
}
