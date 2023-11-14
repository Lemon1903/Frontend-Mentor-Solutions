const features = [
  "Product discovery and building what matters",
  "Measuring to ensure updates are a success",
  "And much more!",
];

export default function App() {
  return (
    <div className="grid max-w-4xl place-items-center bg-white shadow-2xl md:mx-4 md:grid-cols-2 md:rounded-3xl md:p-4 lg:gap-12 xl:p-6">
      <div className="h-[284px] w-full rounded-b-xl bg-[image:--mobile] bg-cover bg-center md:h-[593px] md:rounded-t-xl md:bg-[image:--desktop]" />
      <div className="space-y-8 px-6 py-10 md:col-start-1 md:row-start-1 lg:space-y-12">
        <div className="space-y-5 lg:space-y-6">
          <h1 className="text-[2.3rem] font-bold leading-none lg:text-[3.2rem]">Stay updated!</h1>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
          <div className="space-y-2">
            {features.map((feature, idx) => (
              <div key={idx} className="flex gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21">
                  <g fill="none">
                    <circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155" />
                    <path stroke="#FFF" strokeWidth="2" d="M6 11.381 8.735 14 15 8" />
                  </g>
                </svg>
                {feature}
              </div>
            ))}
          </div>
        </div>
        <form className="grid gap-5 lg:gap-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid gap-2">
            <label className="text-xs font-bold" htmlFor="email">
              Email address
            </label>
            <input
              id="email"
              type="email"
              className="border-muted focus:border-foreground hover:border-foreground rounded-md border px-5 py-3 outline-none"
              placeholder="email@company.com"
            />
          </div>
          <button className="bg-foreground hover:shadow-primary/40 rounded-md py-3 text-white hover:bg-gradient-to-l hover:from-[#FF6A3D] hover:to-[#FF527B] hover:shadow-xl">
            Subscribe to monthly newsletter
          </button>
        </form>
      </div>
    </div>
  );
}
