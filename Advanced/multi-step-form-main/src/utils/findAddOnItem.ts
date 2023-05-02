import { IAddOn } from "../types";

export default function findAddOnItem(addOnName: string, addOns: IAddOn[]) {
  return addOns.find((addOn) => addOn.heading === addOnName);
}
