import { useRef } from "react";
import { Link } from "react-router-dom";
import WhoMain from "../../assets/images/product/slide1.webp";
import WhoSub from "../../assets/images/product/slide2.webp";
import rightleaf from "../../assets/images/leaf2.webp";

export default function WhoWeAre() {
  const visualRef = useRef(null);

  const handleMove = (e) => {
    const box = visualRef.current;
    if (!box) return;
    const { left, top, width, height } = box.getBoundingClientRect();
    const x = ((e.clientX - left) / width - 0.5) * 14;
    const y = ((e.clientY - top) / height - 0.5) * 14;
    box.style.setProperty("--move-x", `${x}px`);
    box.style.setProperty("--move-y", `${y}px`);
    box.style.setProperty("--move-x-sub", `${x * 1.4}px`);
    box.style.setProperty("--move-y-sub", `${y * 1.4}px`);
  };

  const handleLeave = () => {
    const box = visualRef.current;
    if (!box) return;
    box.style.setProperty("--move-x", "0px");
    box.style.setProperty("--move-y", "0px");
    box.style.setProperty("--move-x-sub", "0px");
    box.style.setProperty("--move-y-sub", "0px");
  };

  return (
    <section className="who-we-are py-5 position-relative">
      <div className="container">
        <div className="row align-items-center g-4 g-lg-5">
          <div className="col-lg-6">
            <div
              className="who-visual"
              ref={visualRef}
              onMouseMove={handleMove}
              onMouseLeave={handleLeave}
            >              <span className="who-dots who-dots--top" aria-hidden="true" />
              <span className="who-dots who-dots--bottom" aria-hidden="true" />
              <img src={WhoMain} alt="Ayurvedic products" className="who-img-main" />
              <img src={WhoSub} alt="Wellness therapy" className="who-img-sub" />
            </div>
            <div className="who-exp d-flex align-items-center gap-3">
              <strong>10</strong>
              <span>Years of Experience</span>
            </div>
          </div>

          <div className="col-lg-6">
            <span className="section-label">Who We Are</span>
            <h2 className="who-title">
              The Natural Way To Achieving Balance And Optimal Health
            </h2>
            <p className="who-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <Link to="/about" className="btn-primary">
              Know More
            </Link>
          </div>
        </div>
      </div>
      <img src={rightleaf} alt="Ayurvedic products" className="right-who-leaf" />
    </section>
  );
}
