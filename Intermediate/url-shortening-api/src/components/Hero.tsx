import { ReactComponent as HeroIllustration } from "../assets/illustration-working.svg";
import Button from "./ui/Button";

export default function Hero() {
  return (
    <section className="flex flex-col items-center gap-y-20 pb-44 pt-10 lg:container lg:grid lg:grid-cols-2 lg:pb-36">
      <div className="px-4 max-lg:order-2 max-lg:text-center md:px-16 lg:p-0">
        <h1 className="text-[2.5rem] font-bold leading-tight text-neutral-darkest max-sm:-mx-4 sm:text-7xl sm:leading-[1.1] xl:text-[4.75rem]">
          More than just shorter links
        </h1>
        <p className="mb-8 text-lg leading-8 max-md:mt-3 sm:text-[1.4rem]">
          Build your brand's recognition and get detailed insights on how your links are performing.
        </p>
        <Button>Get Started</Button>
      </div>
      <HeroIllustration className="translate-x-20 max-sm:scale-125 md:h-[482px] md:w-[733px] lg:translate-x-4 xl:translate-x-28" />
    </section>
  );
}
