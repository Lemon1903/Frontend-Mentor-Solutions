import { TPeriod } from "../types";

export default function getPrice(price: number, period: TPeriod) {
  const newPrice = price * (period === "Yearly" ? 10 : 1);
  const suffix = period === "Yearly" ? "yr" : "mo";
  return `$${newPrice}/${suffix}`;
}
