import tab1 from "../assets/illustration-features-tab-1.svg";
import tab2 from "../assets/illustration-features-tab-2.svg";
import tab3 from "../assets/illustration-features-tab-3.svg";
import Feature from "./ui/Feature";
import SectionHeader from "./ui/SectionHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/Tabs";

const tabs = [
  {
    value: "bookmarking",
    image: tab1,
    trigger: "Simple Bookmarking",
    title: "Bookmark in one click",
    description:
      "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
  },
  {
    value: "searching",
    image: tab2,
    trigger: "Speedy Searching",
    title: "Intelligent search",
    description:
      "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
  },
  {
    value: "sharing",
    image: tab3,
    trigger: "Easy Share",
    title: "Share your bookmarks",
    description:
      "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
  },
];

export default function Features() {
  return (
    <section className="container space-y-14 px-4 py-24 sm:px-12 xl:px-16">
      <SectionHeader
        title="Features"
        description="Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go."
      />
      <Tabs defaultValue="bookmarking" className="space-y-16 lg:space-y-20">
        <TabsList className="mx-auto flex max-w-3xl px-2 max-md:flex-col">
          {tabs.map(({ value, trigger }) => (
            <TabsTrigger
              key={value}
              value={value}
              className="relative w-full py-4 after:absolute after:inset-x-0 after:bottom-0 after:mx-auto after:h-1 after:w-44 after:content-[''] data-[state=active]:after:bg-secondary max-md:first:border-t md:py-6 md:after:w-full"
            >
              {trigger}
            </TabsTrigger>
          ))}
        </TabsList>
        {tabs.map((tab) => (
          <TabsContent key={tab.value} value={tab.value} className="lg:pb-16">
            <Feature key={tab.value} {...tab} />
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
