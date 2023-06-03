interface IDetailFieldProps {
  field: string;
  value: string;
}

export default function DetailField({ field, value }: IDetailFieldProps) {
  return (
    <div className="flex gap-2 xl:max-w-[280px]">
      <p className="min-w-max">{field}:</p>
      <p className="font-normal">{value}</p>
    </div>
  );
}
