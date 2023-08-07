import devices from "../assets/images/image-devices.png";
import SectionHeader from "./ui/SectionHeader";

export default function Accessibility() {
  return (
    <section className="container space-y-16 max-sm:px-0">
      <div className="max-sm:px-8">
        <SectionHeader
          theme="small"
          heading="Access Clipboard Anywhere"
          text="Whether you're on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks."
        />
      </div>
      <img
        className="mx-auto max-sm:px-4 max-sm:drop-shadow-2xl"
        src={devices}
        alt="a collection of devices"
      />
    </section>
  );
}
