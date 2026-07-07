import ReactSlick from "react-slick";

const Slider = ReactSlick.default?.default ?? ReactSlick.default ?? ReactSlick;

const categories = [
  {
    title: "Ayurvedic Supplement Kits",
    image:
      "https://images.unsplash.com/photo-1612531386530-97286d97c2d2?w=500&q=80",
  },
  {
    title: "Ayurvedic Essential Oils",
    image:
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=500&q=80",
    isNew: true,
  },
  {
    title: "Bundle & Save!",
    image:
      "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=500&q=80",
  },
];

const settings = {
  dots: false,
  arrows: false,
  infinite: false,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  draggable: false,
  swipe: false,
  touchMove: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2600,
        draggable: true,
        swipe: true,
        touchMove: true,
      },
    },
  ],
};

export default function Category() {
  return (
    <section className="home-category">
      <div className="container">
        <Slider {...settings}>
          {categories.map((item) => (
            <div className="category-item-wrap" key={item.title}>
              <article className="category-item text-center">
                <div className="category-image">
                  {item.isNew && (
                    <span className="category-badge" aria-label="New">
                      New
                    </span>
                  )}
                  <div className="category-image-inner">
                    <img src={item.image} alt={item.title} />
                    <span className="category-overlay">
                      <span>View More</span>
                    </span>
                  </div>
                </div>
                <h5 className="category-title">{item.title}</h5>
              </article>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
