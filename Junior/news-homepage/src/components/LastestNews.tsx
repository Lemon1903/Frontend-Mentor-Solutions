const latestNews = [
  {
    title: "Hydrogen VS Electric Cars",
    description: "Will hydrogen-fueled cars ever catch up to EVs?",
  },
  {
    title: "The Downsides of AI Artistry",
    description:
      "What are the possible adverse effects of on-demand AI image generation?",
  },
  {
    title: "Is VC Funding Drying Up?",
    description:
      "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
  },
];

export default function LatestNews() {
  return (
    <section className="bg-neutral-darkest px-5">
      <h2 className="pt-8 text-3xl font-bold text-primary lg:text-4xl">New</h2>
      <div className="divide-y divide-neutral/80 text-neutral-light">
        {latestNews.map((news, idx) => (
          <div className="space-y-2 py-8" key={idx}>
            <a href="#" className="text-xl font-bold hover:text-primary">
              {news.title}
            </a>
            <p className="text-neutral">{news.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
