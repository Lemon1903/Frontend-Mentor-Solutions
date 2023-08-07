import SectionHeader, { IHeader } from "./SectionHeader";

interface IFeatureProps extends IHeader {
  image: string;
}

export default function Feature({ image, heading, text }: IFeatureProps) {
  return (
    <div className="space-y-8 lg:px-4">
      <div className="grid h-10 place-items-center">
        <img src={image} alt="Feature icon" />
      </div>
      <SectionHeader theme="xsmall" heading={heading} text={text} />
    </div>
  );
}
