import Header from "./components/Header";
import LatestNews from "./components/LastestNews";
import NewsStory from "./components/NewsStory";
import RelatedNews from "./components/RelatedNews";

export default function App() {
  return (
    <div className="mx-auto max-w-[1164px] px-4 sm:px-8">
      <Header />
      <main>
        <div className="grid gap-16 lg:grid-cols-[1fr,22rem] lg:gap-6">
          <NewsStory />
          <LatestNews />
        </div>
        <RelatedNews />
      </main>
    </div>
  );
}
