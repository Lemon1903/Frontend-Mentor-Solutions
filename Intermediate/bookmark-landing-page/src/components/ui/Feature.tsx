import Button from "./Button";

interface IFeatureProps {
  image: string;
  title: string;
  description: string;
}

export default function Feature({ title, image, description }: IFeatureProps) {
  return (
    <div className="grid place-items-center gap-20 lg:grid-cols-2 lg:gap-14">
      <div className="relative max-h-96 max-lg:px-4">
        <img className="lg:scale-110" src={image} alt="illustration for the tab" />
        <div className="absolute -bottom-10 right-[15vw] -z-10 h-full w-[9999px] rounded-r-full bg-gradient-to-l from-primary from-50% to-transparent to-70%  lg:-bottom-20 lg:right-20 2xl:w-[75rem]" />
      </div>
      <div className="max-lg:text-center xl:max-2xl:pl-16">
        <h3 className="text-2xl font-medium lg:text-[2rem]">{title}</h3>
        <p className="mb-6 mt-3 text-neutral-light max-lg:px-2 lg:pr-4 lg:text-lg">{description}</p>
        <Button theme="primary" className="px-6">
          More Info
        </Button>
      </div>
    </div>
  );
}
