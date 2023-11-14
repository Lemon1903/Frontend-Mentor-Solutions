import CTA from "./components/CTA";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Shortener from "./components/Shortener";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        <Hero />
        <div className="bg-neutral-light/50">
          <Shortener />
          <Features />
        </div>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
