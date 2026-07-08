import { TbYoga, TbFlower, TbHandStop, TbBellRinging } from "react-icons/tb";

const features = [
  {
    title: "Meditation",
    text: "Dui sapien eget mi proin sed libero. Sit amet massa vitae tortor condimentum.",
    icon: TbYoga,
  },
  {
    title: "Aromatherapy",
    text: "Turpis egestas maecenas pharetra sagittis orci a scelerisque convallis.",
    icon: TbFlower,
  },
  {
    title: "Yoga Asanas",
    text: "Augue eget arcu dictum varius duis at aliquam eleifend consectetur lorem.",
    icon: TbHandStop,
  },
  {
    title: "Sound Theraphy",
    text: "Ut enim blandit volutpat maecenas ultrices eros volutpat blandit.",
    icon: TbBellRinging,
  },
];

export default function Feature() {
  return (
    <section className="feature-section py-5">
      <div className="container">
        <div className="row g-4 g-lg-5 text-center">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div className="col-md-6 col-lg-3" key={item.title}>
                <div className="feature-box">
                  <span className="feature-box-icon">
                    <Icon />
                  </span>
                  <h5 className="feature-box-title">{item.title}</h5>
                  <p className="feature-box-text mb-0">{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
