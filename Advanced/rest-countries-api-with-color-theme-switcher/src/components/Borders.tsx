import { Link } from "react-router-dom";
import useBorderNames from "../hooks/useBorderNames";
import { PrimaryButton } from "./ui/PrimaryButton";
import Skeleton from "./ui/Skeleton";

interface IBordersProps {
  borders: Array<string>;
}

export default function Borders({ borders }: IBordersProps) {
  const borderNames = useBorderNames(borders);

  return (
    <div className="flex flex-wrap gap-2.5 text-sm font-normal">
      {!borders.length && <p className="mt-0.5 self-center text-base">None</p>}
      {borderNames.length
        ? borderNames.map((border) => (
            <Link to={`/${border}`} key={border}>
              <PrimaryButton className="px-4 py-1">{border}</PrimaryButton>
            </Link>
          ))
        : borders.map((index) => <Skeleton key={index} className="h-7 w-24" />)}
    </div>
  );
}
