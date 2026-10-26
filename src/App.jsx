import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Menu from "./components/Menu";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Visit from "./components/Visit";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function App() {
  return (
    <div className="bg-ink font-sans text-cream antialiased">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Menu />
        <Gallery />
        <Testimonials />
        <Visit />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
