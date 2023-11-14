import Button from "./ui/Button";

export default function CTA() {
  return (
    <section className="bg-secondary bg-boost-mobile bg-cover py-24 sm:bg-boost-desktop sm:py-14">
      <div className="space-y-4 text-center">
        <h2 className="text-[1.7rem] font-bold text-white sm:text-[2.45rem]">Boost your link today</h2>
        <Button>Get Started</Button>
      </div>
    </section>
  );
}
