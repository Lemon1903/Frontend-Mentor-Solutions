import { motion } from "framer-motion";
import { PropsWithChildren } from "react";
import { ICountryCard } from "../../types";
import { formatNumber, joinWithComma } from "../../utils/utils";
import DetailField from "./DetailField";
import Skeleton from "./Skeleton";

function Shell({ children }: PropsWithChildren) {
  return (
    <motion.div
      className="overflow-hidden rounded-md bg-foreground text-sm font-bold shadow-lg max-sm:w-72"
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      whileHover={{ scale: 1.05 }}
    >
      {children}
    </motion.div>
  );
}

export default function Card(data: ICountryCard) {
  const { name, capital, flags, population, region } = data;

  return (
    <Shell>
      <img className="h-44 w-full" src={flags.png} alt={flags.alt} />
      <div className="h-48 space-y-4 p-8">
        <h2 className="text-xl">{name.common}</h2>
        <div className="space-y-1">
          <DetailField field="Population" value={formatNumber(population)} />
          <DetailField field="Region" value={region} />
          <DetailField field="Capital" value={joinWithComma(capital)} />
        </div>
      </div>
    </Shell>
  );
}

Card.Loading = () => {
  return (
    <Shell>
      <Skeleton className="h-44 w-full" />
      <div className="h-48 space-y-4 p-8">
        <Skeleton className="h-7 w-1/2" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-5/6" />
        </div>
      </div>
    </Shell>
  );
};
