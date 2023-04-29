import { useCart } from "../contexts/CartContext";
import { useToggleStates } from "../contexts/ToggleContext";
import CartItem from "./CartItem";

export default function Cart() {
  const cart = useCart();
  const toggleStates = useToggleStates();
  const scale = toggleStates.isCartOpen ? "scale-100" : "scale-0";

  return (
    <div
      className={`z-10 absolute top-20 right-0 xl:-right-24 flex flex-col rounded-lg mx-1 py-6 shadow-xl shadow-black/20 max-w-sm w-[calc(100%-0.5rem)] h-64 ${scale} duration-200 origin-[80%_top] xl:origin-top bg-white`}
    >
      <h2 className="border-b-2 px-6 pb-8 font-bold leading-none">Cart</h2>
      {cart.items.length === 0 ? (
        <p className="m-auto font-bold">Your cart is empty</p>
      ) : (
        <div className="grid">
          {cart.items.map((cartItem) => (
            <CartItem key={cartItem.name} {...cartItem} />
          ))}
          <button className="rounded-lg mx-6 p-4 bg-primary-dark font-bold text-white">
            Checkout
          </button>
        </div>
      )}
    </div>
  );
}
