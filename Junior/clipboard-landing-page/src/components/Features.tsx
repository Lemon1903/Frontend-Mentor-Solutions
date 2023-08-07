import blacklist from "../assets/images/icon-blacklist.svg";
import preview from "../assets/images/icon-preview.svg";
import text from "../assets/images/icon-text.svg";
import Feature from "./ui/Feature";
import SectionHeader from "./ui/SectionHeader";

const metadata = [
  {
    image: blacklist,
    heading: "Create blacklists",
    text: "Ensure sensitive information never makes its way to your clipboard by excluding certain sources.",
  },
  {
    image: text,
    heading: "Plain text snippets",
    text: "Remove unwanted formatting from copied text for a consistent look.",
  },
  {
    image: preview,
    heading: "Sneak preview",
    text: "Quick preview of all snippets on your Clipboard for easy acess.",
  },
];

export default function Features() {
  return (
    <section className="container space-y-16 py-24 max-sm:px-6">
      <SectionHeader
        theme="small"
        heading="Supercharge your workflow"
        text="We've got the tools to boost your productivity."
      />
      <div className="grid justify-between max-lg:gap-8 md:grid-cols-3">
        {metadata.map((feature, idx) => (
          <Feature key={idx} {...feature} />
        ))}
      </div>
    </section>
  );
}
