import chromeLogo from "../assets/logo-chrome.svg";
import firefoxLogo from "../assets/logo-firefox.svg";
import operaLogo from "../assets/logo-opera.svg";
import Card from "./ui/Card";
import SectionHeader from "./ui/SectionHeader";

const metadata = [
  {
    logo: chromeLogo,
    platform: "Chrome",
    version: 62,
  },
  {
    logo: firefoxLogo,
    platform: "Firefox",
    version: 55,
  },
  {
    logo: operaLogo,
    platform: "Opera",
    version: 46,
  },
];

export default function Download() {
  return (
    <section className="container space-y-12 px-4 py-20 md:px-8 xl:px-16">
      <SectionHeader
        title="Download the extension"
        description="We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize."
      />
      <div className="flex items-center justify-center gap-6 max-md:flex-col">
        {metadata.map((data, idx) => (
          <Card key={data.platform} position={idx} {...data} />
        ))}
      </div>
    </section>
  );
}
