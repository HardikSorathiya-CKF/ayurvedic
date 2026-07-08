import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import ReactSlick from "react-slick";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImgHero1 from "../../assets/images/product/slide1.webp";
import ImgHero2 from "../../assets/images/product/slide2.webp";
import ImgHero3 from "../../assets/images/product/slide3.webp";
import ImgTopHero from "../../assets/images/leafleft.webp";
import ImgBottomHero from "../../assets/images/leafright.webp";

const Slider = ReactSlick.default?.default ?? ReactSlick.default ?? ReactSlick;

const slides = [
    {
        title: "We Are Here To Give You The Best",
        highlight: "Herb Products",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non lorem sit lorem gem.",
        image: ImgHero1,
    },
    {
        title: "Pure Nature For Your",
        highlight: "Healthy Life",
        text: "Discover authentic ayurvedic herbs crafted with care for your daily wellness.",
        image: ImgHero2,
    },
    {
        title: "Shop The Finest",
        highlight: "Aushadhi Care",
        text: "Natural ingredients, trusted quality, and products made for every home.",
        image: ImgHero3,
    },
];

export default function Hero() {
    const sliderRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [leaving, setLeaving] = useState(false);

    const slide = slides[activeIndex];

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 6000,
        speed: 1600,
        cssEase: "ease-in-out",
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        beforeChange: () => setLeaving(true),
        afterChange: (index) => {
            setActiveIndex(index);
            setLeaving(false);
        },
    };

    return (
        <section className="hero">
            <img src={ImgTopHero} alt="" className="hero-top-image" aria-hidden="true" />
            <div
                className={`hero-content text-center${leaving ? " is-leaving" : ""}`}
            >
                <h1 className="hero-title">
                    {slide.title}{" "}
                    <span className="hero-highlight">{slide.highlight}</span>
                </h1>
                <p className="hero-text">{slide.text}</p>
                <Link to="/shop" className="btn-primary">
                    Shop Now
                </Link>
            </div>

            <div className="hero-visual">
                <div className="hero-image-wrap">
                    <Slider ref={sliderRef} {...settings}>
                        {slides.map((item) => (
                            <div key={item.highlight}>
                                <img src={item.image} alt={item.highlight} />
                            </div>
                        ))}
                    </Slider>

                    <button
                        type="button"
                        className="hero-arrow hero-arrow--prev"
                        onClick={() => sliderRef.current?.slickPrev()}
                        aria-label="Previous slide"
                    >
                        <HiArrowLongLeft />
                    </button>
                    <button
                        type="button"
                        className="hero-arrow hero-arrow--next"
                        onClick={() => sliderRef.current?.slickNext()}
                        aria-label="Next slide"
                    >
                        <HiArrowLongRight />
                    </button>
                </div>
            </div>
            <img src={ImgBottomHero} alt="" className="hero-bottom-image" aria-hidden="true" />
        </section>
    );
}
