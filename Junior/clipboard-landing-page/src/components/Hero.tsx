import LogoSVG from "./logos/LogoSVG";
import DownloadButton from "./ui/DownloadButton";
import SectionHeader from "./ui/SectionHeader";

export default function Hero() {
  return (
    <div className="bg-mobile bg-[length:100%_363px] bg-no-repeat md:bg-desktop">
      <header className="container space-y-14 py-32 text-center max-sm:px-8">
        <LogoSVG size={125} />
        <SectionHeader
          theme="large"
          heading="A history of everything you copy"
          text="Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices."
        >
          <div className="flex justify-center gap-4 max-sm:flex-col">
            <DownloadButton device="iOS" theme="primary" />
            <DownloadButton device="Mac" theme="secondary" />
          </div>
        </SectionHeader>
      </header>
    </div>
  );
}
