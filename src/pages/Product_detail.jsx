import Breadcrumb from "../components/common/Breadcrumb";
import Gallery from "../components/product/Gallery";
import Info from "../components/product/Info";
import Tabs from "../components/product/Tabs";
import Reviews from "../components/product/Reviews";
import Related from "../components/product/Related";
import Faqs from "../components/product/Faqs";
import ProductImg1 from "../assets/images/product/product2.webp";
import ProductImg2 from "../assets/images/product/product3.webp";
import ProductImg3 from "../assets/images/product/product4.webp";
import ProductImg4 from "../assets/images/product/product5.webp";

const product = {
  name: "Ashwagandha Organic Capsules",
  price: 549,
  oldPrice: 699,
  reviews: 24,
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Pure Ayurvedic supplement crafted for daily wellness and vitality.",
  images: [ProductImg1, ProductImg2, ProductImg3, ProductImg4],
};

const ingredients = [
  { name: "Ashwagandha Root", image: ProductImg1, text: "Boosts energy & reduces stress" },
  { name: "Black Pepper", image: ProductImg2, text: "Enhances absorption naturally" },
  { name: "Tulsi Leaf", image: ProductImg3, text: "Supports immunity & wellness" },
  { name: "Turmeric", image: ProductImg4, text: "Natural anti-inflammatory" },
];

const tabContent = {
  overview: (
    <>
      <p>
        Praesent ultricies luctus sapien quis vulputate. Praesent molestie, diam
        vel sagittis venenatis, augue enim lacinia ex, sit amet aliquam massa
        eros ac felis. Nulla elementum dignissim ipsum, vel dignissim nibh
        pharetra vel. Quisque ac nisi nec nulla blandit scelerisque eu ut arcu.
      </p>
      <p className="mb-0">
        Proin eu tempus magna. Quisque suscipit nunc eget consequat placerat.
        Fusce eleifend placerat massa, mollis congue lorem eleifend in. Morbi
        porttitor interdum lacus.
      </p>
    </>
  ),
  ingredients: (
    <div className="row g-3 g-md-4">
      {ingredients.map((item) => (
        <div className="col-6 col-lg-3" key={item.name}>
          <article className="pd-ingredient-card text-center h-100">
            <div className="pd-ingredient-image">
              <img src={item.image} alt={item.name} />
            </div>
            <h5 className="pd-ingredient-name">{item.name}</h5>
            <p className="pd-ingredient-text mb-0">{item.text}</p>
          </article>
        </div>
      ))}
    </div>
  ),
  review: <Reviews />,
};

export default function Product_detail() {
  return (
    <main className="product-detail-page">
      <Breadcrumb page="productDetail" />

      <div className="container py-5">
        <div className="row g-4 g-lg-5">
          <div className="col-lg-6">
            <Gallery images={product.images} />
          </div>
          <div className="col-lg-6">
            <Info product={product} />
          </div>
        </div>

        <Tabs content={tabContent} />

        <Related />

        <Faqs />
      </div>
    </main>
  );
}
