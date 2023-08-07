import Accessibility from "./components/Accessibility";
import Brands from "./components/Brands";
import CTA from "./components/CTA";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Storage from "./components/Storage";

export default function App() {
  return (
    <>
      <Hero />
      <main className="my-12 text-center">
        <Storage />
        <Accessibility />
        <Features />
        <Brands />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
