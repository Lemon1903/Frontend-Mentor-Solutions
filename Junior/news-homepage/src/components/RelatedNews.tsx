import gaming from "../assets/images/image-gaming-growth.jpg";
import retroPcs from "../assets/images/image-retro-pcs.jpg";
import laptops from "../assets/images/image-top-laptops.jpg";
const relatedNews = [
  {
    title: "Reviving Retro PCs",
    image: retroPcs,
    description: "What happens when old PCs are given modern upgrades?",
  },
  {
    title: "Top 10 Laptops of 2022",
    image: laptops,
    description: "Our best picks for various needs and budgets.",
  },
  {
    title: "The Growth of Gaming",
    image: gaming,
    description: "How the pandemic has sparked fresh opportunities.",
  },
];

export default function RelatedNews() {
  return (
    <section className="grid gap-8 pb-20 pt-16 lg:grid-cols-3 lg:gap-6 xl:pb-32">
      {relatedNews.map((news, idx) => (
        <div className="flex h-32 gap-6" key={idx}>
          <img src={news.image} alt={news.title} />
          <div className="flex flex-col justify-between text-neutral-dark">
            <p className="text-3xl font-extra-bold text-neutral-dark/50">
              0{idx + 1}
            </p>
            <a
              className="text-lg font-extra-bold text-neutral-darkest hover:text-secondary"
              href="#"
            >
              {news.title}
            </a>
            <p>{news.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
