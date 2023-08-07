import illustrationHero from "../assets/illustration-hero.svg";
import Button from "./ui/Button";

export default function Hero() {
  return (
    <section className="container grid place-items-center gap-14 px-4 py-8 sm:px-12 lg:grid-cols-2 lg:py-16 xl:px-16">
      <div className="max-lg:row-start-2 max-lg:text-center">
        <h1 className="text-3xl font-medium lg:text-5xl">A Simple Bookmark Manager</h1>
        <p className="mb-8 mt-6 text-neutral-light max-lg:px-4 lg:text-lg">
          A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites
          load instantly. Try it for free.
        </p>
        <div className="flex gap-4 max-lg:justify-center">
          <Button theme="primary">Get it on Chrome</Button>
          <Button theme="muted">Get it on Firefox</Button>
        </div>
      </div>
      <div className="relative">
        <img
          className="lg:translate-y-2 lg:scale-[1.2] xl:translate-x-8"
          src={illustrationHero}
          alt="hero illustration"
        />
        <div className="absolute bottom-0 left-[20vw] -z-10 h-3/4 w-[9999px] rounded-l-full bg-gradient-to-r from-primary from-50% to-transparent to-70% lg:-bottom-16 lg:left-44 2xl:w-[75rem]" />
      </div>
    </section>
  );
}
