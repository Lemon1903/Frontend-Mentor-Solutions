import { ReactComponent as BrandRecognition } from "../assets/icon-brand-recognition.svg";
import { ReactComponent as DetailedRecords } from "../assets/icon-detailed-records.svg";
import { ReactComponent as FullyCustomizable } from "../assets/icon-fully-customizable.svg";
import Feature from "./ui/Feature";

const metadata = [
  {
    icon: <BrandRecognition />,
    title: "Brand Recognition",
    description:
      "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content.",
  },
  {
    icon: <DetailedRecords />,
    title: "Detailed Records",
    description:
      "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
  },
  {
    icon: <FullyCustomizable />,
    title: "Fully Customizable",
    description:
      "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
  },
];

export default function Features() {
  return (
    <section className="container py-px md:px-16 md:py-8">
      <div className="mx-auto max-w-xl space-y-2 text-center">
        <h2 className="text-[1.7rem] font-bold text-neutral-dark sm:text-[2.45rem]">Advanced Statistics</h2>
        <p className="px-4 sm:text-lg">
          Track how your links are performing across the web with our advanced statistics dashboard.
        </p>
      </div>
      <div className="relative mb-24 mt-20 flex gap-24 max-lg:flex-col lg:mb-44 lg:gap-8">
        {metadata.map((data, idx) => (
          <Feature key={data.title} position={idx} {...data} />
        ))}
        <div className="absolute inset-0 m-auto h-full w-2 bg-primary lg:h-2 lg:w-full lg:translate-y-6" />
      </div>
    </section>
  );
}
