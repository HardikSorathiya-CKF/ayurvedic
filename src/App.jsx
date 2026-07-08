import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Product_detail from "./pages/Product_detail";

const breadcrumbPages = ["/shop", "/about", "/contact", "/product"];

function AppLayout() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const isOverlay = isHome || breadcrumbPages.includes(pathname);

  return (
    <>
      <header className={`site-header${isOverlay ? " site-header--hero" : ""}`}>
        <Topbar />
        <Navbar />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product" element={<Product_detail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
