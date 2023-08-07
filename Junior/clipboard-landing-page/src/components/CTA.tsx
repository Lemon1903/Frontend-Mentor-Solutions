import DownloadButton from "./ui/DownloadButton";
import SectionHeader from "./ui/SectionHeader";

export default function CTA() {
  return (
    <section className="container py-28 max-sm:px-8">
      <SectionHeader
        theme="small"
        heading="Clipboard for iOS and Mac OS"
        text="Available for free on the App Store. Download for Mac or iOS, sync with iCloud and you're ready to start adding to your clipboard."
      >
        <div className="flex justify-center gap-4 max-sm:flex-col">
          <DownloadButton device="iOS" theme="primary" />
          <DownloadButton device="Mac" theme="secondary" />
        </div>
      </SectionHeader>
    </section>
  );
}
