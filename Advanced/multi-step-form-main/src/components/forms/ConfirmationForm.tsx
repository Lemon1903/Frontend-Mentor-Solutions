import { formActions } from "../../redux/formSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import getPrice from "../../utils/getPrice";

export default function ConfirmationForm() {
  const formState = useAppSelector((state) => state.form);
  const dispatch = useAppDispatch();

  function getTotal() {
    const sum = formState.addOns.reduce((sum, addOn) => addOn.price + sum, 0);
    return sum + formState.plan.price;
  }

  return (
    <div className="mt-5 space-y-5 text-sm lg:mt-10">
      <div className="grid gap-3 rounded-lg bg-neutral-100 p-4 font-medium lg:gap-4 lg:px-6 lg:py-5">
        <div className="flex items-center justify-between font-bold text-primary-dark lg:text-[1.05rem]">
          <h2>
            {formState.plan.name} ({formState.period})
            <span
              className="block cursor-pointer text-sm font-medium text-neutral-400 underline hover:text-primary lg:my-1"
              onClick={() => dispatch(formActions.backToStep(2))}
            >
              Change
            </span>
          </h2>
          <p>{getPrice(formState.plan.price, formState.period)}</p>
        </div>
        <hr className="h-px border-none bg-neutral-300 lg:my-1.5" />
        {formState.addOns.map((addOn, index) => (
          <div className="flex justify-between" key={index}>
            <p className="text-neutral-400">{addOn.heading}</p>
            <p className="text-primary-dark">
              +{getPrice(addOn.price, formState.period)}
            </p>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between px-4 lg:px-6">
        <p className="font-medium">
          Total (per {formState.period === "Monthly" ? "month" : "year"})
        </p>
        <p className="text-base font-bold text-primary lg:text-xl">
          +{getPrice(getTotal(), formState.period)}
        </p>
      </div>
    </div>
  );
}
