import { useDispatch } from "react-redux";
import Icons from "../assets";
import { formActions } from "../redux/formSlice";
import { useAppSelector } from "../redux/hooks/hooks";
import { IPlanOption } from "../types";
import getPrice from "../utils/getPrice";

export default function PlanOption(plan: IPlanOption) {
  const { name, price, monthsFree } = plan;
  const formState = useAppSelector((state) => state.form);
  const dispatch = useDispatch();

  function getStyle() {
    return formState.plan.name === name
      ? "border-primary bg-neutral-200"
      : "border-neutral-300";
  }

  function handleClick(e: React.MouseEvent) {
    e.preventDefault();
    dispatch(formActions.setPlan(plan));
  }

  return (
    <div
      className={`${getStyle()} flex cursor-pointer gap-3 rounded-lg border px-4 py-3 hover:border-primary lg:flex-col lg:gap-12 lg:p-4`}
      onClick={handleClick}
    >
      <img className="my-0.5 h-fit w-fit" src={Icons[name]} alt={name} />
      <div>
        <h2 className="font-medium text-primary-dark">{name}</h2>
        <p className="text-sm">{getPrice(price, formState.period)}</p>
        {formState.period === "Yearly" && (
          <p className="my-1 text-xs font-medium text-primary-dark">
            {monthsFree} months free
          </p>
        )}
      </div>
    </div>
  );
}
