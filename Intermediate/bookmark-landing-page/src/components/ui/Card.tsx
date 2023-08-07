import dots from "../../assets/bg-dots.svg";
import Button from "./Button";

interface ICardProps {
  logo: string;
  platform: string;
  version: number;
  position: number;
}

export default function Card({ logo, platform, version, position }: ICardProps) {
  const positions = ["translate-y-0", "md:translate-y-[40px]", "md:translate-y-[80px]"];

  return (
    <div className={`${positions[position]} flex w-72 flex-col rounded-xl text-center shadow-lg md:w-80`}>
      <div className="px-6 pb-8 pt-10">
        <img className="mx-auto" src={logo} alt="platform logo" />
        <h3 className="mt-8 text-xl font-medium sm:text-[1.35rem]">Add to {platform}</h3>
        <p className="text-neutral-light">Minimum version {version}</p>
      </div>
      <img src={dots} alt="dashed dots" />
      <Button theme="primary" className="m-6">
        Add & Install Extension
      </Button>
    </div>
  );
}
