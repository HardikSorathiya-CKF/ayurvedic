import { Link } from "react-router-dom";
import { FiCheckCircle } from "react-icons/fi";
import { TbAward, TbHeartHandshake, TbLeaf, TbSparkles } from "react-icons/tb";

const features = [
  {
    title: "100 % Organic",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit",
    icon: TbLeaf,
  },
  {
    title: "Best Quality",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit",
    icon: TbAward,
  },
  {
    title: "Hygienic Product",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit",
    icon: TbHeartHandshake,
  },
  {
    title: "Health Care",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit",
    icon: TbSparkles,
  },
];

const points = [
  "Quis nostrud was exercitation.",
  "Quis nostrud was exercitation.",
  "Quis nostrud was exercitation.",
  "Quis nostrud was exercitation.",
];

export default function Why() {
  return (
    <section className="why-section py-5">
      <div className="container">
        <div className="text-center mb-4 mb-md-5">
          <span className="section-label">Best For You</span>
          <h2 className="section-title mb-0">Why Pure Aushadhi</h2>
        </div>

        <div className="row align-items-center g-4 g-lg-5">
          <div className="col-lg-6">
            <div className="row g-3 g-md-4">
              {features.map((item) => {
                const Icon = item.icon;
                return (
                  <div className="col-sm-6" key={item.title}>
                    <article className="why-card text-center h-100">
                      <span className="why-icon">
                        <Icon />
                      </span>
                      <h5 className="why-card-title">{item.title}</h5>
                      <p className="why-card-text mb-0">{item.text}</p>
                    </article>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="col-lg-6">
            <h3 className="why-heading">
              Solve Your Problem with The Power of Nature
            </h3>
            <p className="why-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, it's sed
              do eiusmod tempor incididunt ut labore et dolore was a magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
            </p>

            <ul className="why-list row g-2 list-unstyled">
              {points.map((point, index) => (
                <li className="col-sm-6" key={index}>
                  <FiCheckCircle className="why-check" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <p className="why-text">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            <Link to="/about" className="btn-primary">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
