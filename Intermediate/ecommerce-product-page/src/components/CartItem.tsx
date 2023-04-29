import { ProductImages } from "../assets";
import { ReactComponent as RemoveButton } from "../assets/icon-delete.svg";
import { useCart } from "../contexts/CartContext";

export default function CartItem(item: ICartItem) {
  const cart = useCart();

  return (
    <div className="flex items-center gap-4 m-6">
      <img
        className="rounded w-14"
        src={ProductImages.thumbnails[0]}
        alt="product-thumbnail"
      />
      <p className="text-neutral-dark flex-grow">
        {item.name}
        <br />${item.price.toFixed(2)} x {item.quantity}{" "}
        <span className="font-bold text-black">
          ${(item.price * item.quantity).toFixed(2)}
        </span>
      </p>
      <RemoveButton
        className="cursor-pointer"
        onClick={() => cart.removeItem(item.name)}
      />
    </div>
  );
}
