interface ISectionHeaderProps {
  title: string;
  description: string;
}

export default function SectionHeader({ description, title }: ISectionHeaderProps) {
  return (
    <div className="mx-auto max-w-xl space-y-4 px-2 text-center lg:px-2">
      <h2 className="px-2 text-2xl font-medium lg:text-[2rem]">{title}</h2>
      <p className="text-neutral-light lg:text-lg">{description}</p>
    </div>
  );
}
