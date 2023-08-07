import computer from "../assets/images/image-computer.png";
import SectionHeader from "./ui/SectionHeader";

export default function Storage() {
  return (
    <section className="space-y-16 pb-48 max-sm:px-8">
      <div className="sm:container">
        <SectionHeader
          theme="small"
          heading="Keep track of your snippets"
          text="Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on all your devices. Our Mac and iOS apps will help you organize everything."
        />
      </div>
      <div className="grid place-items-center sm:max-lg:container 2xl:container max-lg:gap-16 lg:grid-cols-12 lg:text-left">
        <img
          className="w-full lg:col-span-7 lg:max-2xl:-translate-x-8 xl:col-span-6"
          src={computer}
          alt="a computer"
        />
        <div className="space-y-12 lg:col-span-4 lg:pr-4 xl:col-span-3 xl:col-start-8">
          <SectionHeader
            theme="xsmall"
            heading="Quick Search"
            text="Easily search your snippets by content, category, web address, application, and more."
          />
          <SectionHeader
            theme="xsmall"
            heading="iCloud Sync"
            text="Instantly saves and syncs snippets across all your devices."
          />
          <SectionHeader
            theme="xsmall"
            heading="Complete History"
            text="Retrieve any snippets from the first moment you started using the app."
          />
        </div>
      </div>
    </section>
  );
}
