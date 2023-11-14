import React from "react";

interface IFeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
  position: number;
}

export default function Feature({ icon, title, description, position }: IFeatureProps) {
  const style = { "--pos": `calc(40px * ${position})` } as React.CSSProperties;

  return (
    <div
      className="z-10 mx-auto max-w-lg rounded bg-white px-6 max-lg:text-center md:px-8 lg:translate-y-[var(--pos)]"
      style={style}
    >
      <div className="-mb-2 grid aspect-square w-20 -translate-y-1/2 place-items-center rounded-full bg-secondary max-lg:mx-auto">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-neutral-dark">{title}</h3>
      <p className="mb-8 mt-4">{description}</p>
    </div>
  );
}
