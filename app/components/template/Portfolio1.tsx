import About from "./components/About";
import Carousel from "./components/Carousel";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavComponent from "./components/NavComponent";

export default function Portfolio1() {
  return (
    <div className="bg-[#141628] min-h-screen text-slate-50 relative 	">
      <NavComponent />
      <Hero />
      <Carousel />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
