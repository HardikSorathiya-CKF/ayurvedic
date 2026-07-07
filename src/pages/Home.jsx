import Hero from "../components/home/Hero";
import Category from "../components/home/Category";
import MarqueeFeature from "../components/home/Marquee-feature";
import ProductSection from "../components/home/Product-section";
import WhoWeAre from "../components/home/Who-we-are";

export default function Home() {
  return (
    <main>
      <Hero />
      <Category />
      <MarqueeFeature />
      <ProductSection />
      <WhoWeAre />
    </main>
  );
}
