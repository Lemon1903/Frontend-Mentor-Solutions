import { formActions } from "../../redux/formSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { IPlanOption } from "../../types";
import PlanOption from "../PlanOption";

const options = [
  { name: "Arcade", price: 9, monthsFree: 2 },
  { name: "Advanced", price: 12, monthsFree: 2 },
  { name: "Pro", price: 15, monthsFree: 2 },
] satisfies IPlanOption[];

export default function PlanForm() {
  const formState = useAppSelector((state) => state.form);
  const dispatch = useAppDispatch();
  const overflow = formState.period === "Yearly" ? "overflow-y-scroll" : "";

  function handleToggleClick(e: React.MouseEvent) {
    e.preventDefault();
    dispatch(formActions.togglePeriod());
  }

  function getTextColor(period: string) {
    return period === formState.period ? "text-primary-dark" : "";
  }

  function getMargin() {
    return formState.period === "Yearly" ? "ml-auto" : "mr-auto";
  }

  return (
    <>
      <div
        className={`${overflow} plans my-5 grid max-h-[233px] gap-3 lg:mb-8 lg:mt-10 lg:grid-cols-3 lg:gap-5`}
      >
        {options.map((option, index) => (
          <PlanOption key={index} {...option} />
        ))}
      </div>
      <div className="flex justify-center gap-6 rounded-md bg-neutral-100 p-3 text-sm font-medium">
        <span className={getTextColor("Monthly")}>Monthly</span>
        <button
          className="h-6 w-11 rounded-full bg-primary-dark px-1.5"
          onClick={handleToggleClick}
        >
          <div className={`${getMargin()} h-3.5 w-3.5 rounded-full bg-white`} />
        </button>
        <span className={getTextColor("Yearly")}>Yearly</span>
      </div>
    </>
  );
}
