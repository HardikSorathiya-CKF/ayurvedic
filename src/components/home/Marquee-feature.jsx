import ReactSlick from "react-slick";
import { TbLeaf, TbPlant, TbTriangle, TbWheatOff } from "react-icons/tb";

const Slider = ReactSlick.default?.default ?? ReactSlick.default ?? ReactSlick;

const features = [
  { title: "Dosha Balancing", icon: TbTriangle },
  { title: "100% Organic", icon: TbLeaf },
  { title: "Gluten Free", icon: TbWheatOff },
  { title: "Vegan Options", icon: TbPlant },
];

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 9000,
  cssEase: "linear",
  pauseOnHover: false,
  draggable: false,
  swipe: false,
  responsive: [
    { breakpoint: 992, settings: { slidesToShow: 2 } },
    { breakpoint: 576, settings: { slidesToShow: 1 } },
  ],
};

export default function MarqueeFeature() {
  return (
    <section className="marquee-feature py-4">
      <Slider {...settings}>
        {[...features, ...features].map((item, index) => {
          const Icon = item.icon;
          return (
            <div className="feature-slide" key={`${item.title}-${index}`}>
              <div className="feature-item d-flex align-items-center justify-content-center gap-3">
                <Icon className="feature-icon" />
                <h6 className="feature-title mb-0">{item.title}</h6>
              </div>
            </div>
          );
        })}
      </Slider>
    </section>
  );
}
