import { useEffect, useRef } from "react";
import ReactCountUp from "react-countup";
import { TbAward, TbPlant, TbShieldCheck, TbUsers } from "react-icons/tb";

const CountUp = ReactCountUp.default?.default ?? ReactCountUp.default ?? ReactCountUp;
const stats = [
  { end: 25, suffix: "+", label: "Years Experience", icon: TbAward },
  { end: 60, suffix: "+", label: "Happy Customers", icon: TbUsers },
  { end: 800, suffix: "+", label: "Our Products", icon: TbPlant },
  { end: 100, suffix: "%", label: "Product Purity", icon: TbShieldCheck },
];

export default function Number() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="number-section" ref={sectionRef}>      <div className="container">
        <div className="row g-4 g-lg-5 align-items-center">
          <div className="col-lg-5">
            <span className="section-label">Our Recent Achievements</span>
            <h2 className="number-title mb-0">Benefit From Choosing The Best</h2>
          </div>

          <div className="col-lg-7">
            <div className="row g-4">
              {stats.map((item) => {
                const Icon = item.icon;
                return (
                  <div className="col-sm-6" key={item.label}>
                    <div className="number-card d-flex align-items-center">
                      <span className="number-icon">
                        <Icon />
                      </span>
                      <span className="number-divider" />
                      <div>
                        <h3 className="number-count mb-1">
                          <CountUp
                            end={item.end}
                            suffix={item.suffix}
                            duration={2.5}
                            enableScrollSpy
                            scrollSpyOnce
                          />
                        </h3>
                        <p className="number-label mb-0">{item.label}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
