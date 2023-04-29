import { useState } from "react";
import { ReactComponent as CartButton } from "../assets/icon-cart.svg";
import { ReactComponent as DecrementButton } from "../assets/icon-minus.svg";
import { ReactComponent as IncrementButton } from "../assets/icon-plus.svg";
import { useCart } from "../contexts/CartContext";

export default function AddToCart(product: IProduct) {
  const [count, setCount] = useState(0);
  const cart = useCart();

  function handleCounterClick(value: number) {
    return () => {
      const newCount = count + value;
      if (newCount >= 0) setCount(newCount);
    };
  }

  function handleAddClick() {
    if (count > 0) {
      cart.addItem(product, count);
      setCount(0);
    }
  }

  return (
    <div className="grid lg:grid-cols-[2fr_3.5fr] gap-4 mt-2">
      <div className="flex items-center justify-between rounded-lg p-4 bg-neutral-light">
        <DecrementButton
          className="select-none hover:opacity-60 cursor-pointer"
          onClick={handleCounterClick(-1)}
        />
        <p id="counter">{count}</p>
        <IncrementButton
          className="select-none hover:opacity-60 cursor-pointer"
          onClick={handleCounterClick(1)}
        />
      </div>
      <button
        className="flex items-center justify-center gap-4 rounded-lg mb-16 lg:m-0 p-4 shadow-xl lg:w-64 shadow-primary-dark/40 bg-primary-dark text-white hover:opacity-60"
        onClick={handleAddClick}
      >
        <CartButton fill="white" /> Add to cart
      </button>
    </div>
  );
}
