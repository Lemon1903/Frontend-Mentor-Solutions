import Contact from "./components/Contact";
import Download from "./components/Download";
import FAQ from "./components/FAQ";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        <Hero />
        <Features />
        <Download />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
