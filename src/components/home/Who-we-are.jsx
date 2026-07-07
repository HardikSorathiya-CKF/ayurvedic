import { Link } from "react-router-dom";
import WhoMain from "../../assets/images/product/slide1.webp";
import WhoSub from "../../assets/images/product/slide2.webp";

export default function WhoWeAre() {
  return (
    <section className="who-we-are py-5">
      <div className="container">
        <div className="row align-items-center g-4 g-lg-5">
          <div className="col-lg-6">
            <div className="who-visual">
              <span className="who-dots who-dots--top" aria-hidden="true" />
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
    </section>
  );
}
