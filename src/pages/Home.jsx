import Hero from "../components/home/Hero";
import Category from "../components/home/Category";
import MarqueeFeature from "../components/home/Marquee-feature";
import ProductSection from "../components/home/Product-section";
import WhoWeAre from "../components/home/Who-we-are";
import Number from "../components/home/Number";
import TrendingProduct from "../components/home/Treanding-product";
import Why from "../components/home/Why";
import Testimonial from "../components/home/Testimonial";
import Feature from "../components/home/Feture";
import Contact from "../components/home/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Category />
      <MarqueeFeature />
      <ProductSection />
      <WhoWeAre />
      <Number />
      <TrendingProduct />
      <Why />
      <Testimonial />
      <Feature />
      <Contact />
    </main>
  );
}
