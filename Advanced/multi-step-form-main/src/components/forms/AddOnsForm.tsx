import { formActions } from "../../redux/formSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { IAddOn } from "../../types";
import findAddOnItem from "../../utils/findAddOnItem";
import getPrice from "../../utils/getPrice";

const options: IAddOn[] = [
  {
    heading: "Online service",
    description: "Access to multiplayer games",
    price: 1,
  },
  {
    heading: "Larger storage",
    description: "Extra 1TB of cloud save",
    price: 2,
  },
  {
    heading: "Customizable profile",
    description: "Custom theme on your profile",
    price: 2,
  },
];

export default function AddOnsForm() {
  const formState = useAppSelector((state) => state.form);
  const dispatch = useAppDispatch();

  function handleToggleCheck(addOn: IAddOn) {
    return () => {
      dispatch(formActions.setAddOns(addOn));
    };
  }

  function getIsChecked(heading: string) {
    return findAddOnItem(heading, formState.addOns) !== undefined;
  }

  return (
    <div className="mt-5 grid gap-3 lg:mt-10 lg:gap-4">
      {options.map((option, index) => (
        <div
          className="flex cursor-pointer items-center rounded-lg border border-neutral-300 px-4 py-3 hover:border-primary lg:px-6 lg:py-4"
          key={index}
          onClick={handleToggleCheck(option)}
        >
          <input
            className="grid h-5 w-5 cursor-pointer appearance-none place-content-center rounded border border-neutral-300 after:mb-1 checked:bg-primary checked:after:content-[url('./assets/images/icon-checkmark.svg')]"
            type="checkbox"
            checked={getIsChecked(option.heading)}
            onChange={handleToggleCheck(option)}
            onClick={(e) => e.stopPropagation()}
          />
          <div className="ml-3.5 lg:ml-6">
            <h2 className="text-[0.85rem] font-medium text-primary-dark lg:text-base">
              {option.heading}
            </h2>
            <p className="mt-0.5 text-xs lg:text-sm">{option.description}</p>
          </div>
          <p className="ml-auto text-sm text-primary">
            +{getPrice(option.price, formState.period)}
          </p>
        </div>
      ))}
    </div>
  );
}
