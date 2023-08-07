import { useEffect, useState } from "react";
import web3Desktop from "../assets/images/image-web-3-desktop.jpg";
import web3Mobile from "../assets/images/image-web-3-mobile.jpg";

export default function NewsStory() {
  const [newsImage, setNewsImage] = useState(getNewsImage());

  useEffect(() => {
    window.addEventListener("resize", () => setNewsImage(getNewsImage()));
  }, []);

  function getNewsImage() {
    return innerWidth >= 1024 ? web3Desktop : web3Mobile;
  }

  return (
    <section className="grid space-y-4 lg:space-y-8">
      <img className="h-full w-full" src={newsImage} alt="web3 image" />
      <div className="grid max-lg:gap-6 lg:grid-cols-2">
        <h1 className="text-[2.5rem] font-extra-bold leading-none text-neutral-darkest lg:max-w-xs lg:text-5xl xl:text-[3.5rem]">
          The Bright Future of Web 3.0?
        </h1>
        <div className="flex flex-col items-start justify-between max-lg:gap-4 lg:px-3">
          <p className="text-neutral-dark">
            We dive into the next evolution of the web that claims to put the
            power of the platform back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className="bg-secondary px-8 py-3 font-bold tracking-[4px] text-neutral-light hover:bg-neutral-darkest">
            READ MORE
          </button>
        </div>
      </div>
    </section>
  );
}
