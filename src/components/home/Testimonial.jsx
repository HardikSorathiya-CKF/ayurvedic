import { useRef } from "react";
import ReactSlick from "react-slick";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import { ImQuotesRight } from "react-icons/im";

const Slider = ReactSlick.default?.default ?? ReactSlick.default ?? ReactSlick;

const testimonials = [
  {
    name: "Leslie Alexander",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua as dolor do amet, officia consequat duis enim velit mollit. Exercitation it's veam consequat sunt nostrud amet.",
  },
  {
    name: "Jenny Wilson",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua as dolor do amet, officia consequat duis enim velit mollit. Exercitation it's veam consequat sunt nostrud amet.",
  },
  {
    name: "Robert Fox",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua as dolor do amet, officia consequat duis enim velit mollit. Exercitation it's veam consequat sunt nostrud amet.",
  },
  {
    name: "Courtney Henry",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua as dolor do amet, officia consequat duis enim velit mollit. Exercitation it's veam consequat sunt nostrud amet.",
  },
];

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 600,
  autoplay: true,
  autoplaySpeed: 4000,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [{ breakpoint: 768, settings: { slidesToShow: 1 } }],
};

export default function Testimonial() {
  const sliderRef = useRef(null);

  return (
    <section className="testimonial-section py-5">
      <div className="container">
        <div className="text-center mb-4 mb-md-5">
          <span className="section-label">Our Testimonial</span>
          <h2 className="section-title mb-0">What Our Client's Say</h2>
        </div>

        <div className="testimonial-slider">
          <button
            type="button"
            className="testimonial-arrow testimonial-arrow--prev"
            onClick={() => sliderRef.current?.slickPrev()}
            aria-label="Previous testimonial"
          >
            <HiArrowLongLeft />
          </button>

          <Slider ref={sliderRef} {...settings}>
            {testimonials.map((item) => (
              <div key={item.name} className="testimonial-slide">
                <article className="testimonial-card">
                  <p className="testimonial-text">{item.text}</p>
                  <div className="testimonial-footer d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center gap-3">
                      <img src={item.image} alt={item.name} className="testimonial-avatar" />
                      <h5 className="testimonial-name mb-0">{item.name}</h5>
                    </div>
                    <ImQuotesRight className="testimonial-quote" />
                  </div>
                </article>
              </div>
            ))}
          </Slider>

          <button
            type="button"
            className="testimonial-arrow testimonial-arrow--next"
            onClick={() => sliderRef.current?.slickNext()}
            aria-label="Next testimonial"
          >
            <HiArrowLongRight />
          </button>
        </div>
      </div>
    </section>
  );
}
