import { ReactComponent as CartButton } from "../assets/icon-cart.svg";
import { ReactComponent as CloseButton } from "../assets/icon-close.svg";
import { ReactComponent as MenuButton } from "../assets/icon-menu.svg";
import { Avatar, Logo } from "../assets/index";
import { useCart } from "../contexts/CartContext";
import { useToggleDispatch, useToggleStates } from "../contexts/ToggleContext";
import Cart from "./Cart";
import Navbar from "./Navbar";

export default function Header() {
  const cart = useCart();
  const toggleStates = useToggleStates();
  const toggleDispatch = useToggleDispatch();

  return (
    <header className="relative flex items-center gap-4 lg:gap-8 p-6 lg:p-0 lg:h-24 lg:border-b lg:border-neutral">
      <div className="z-40 lg:hidden">
        {toggleStates.isNavbarOpen ? (
          <CloseButton
            className="fill-neutral-dark"
            onClick={() => toggleDispatch({ type: "toggleNavbar" })}
          />
        ) : (
          <MenuButton
            className="fill-neutral-dark"
            onClick={() => toggleDispatch({ type: "toggleNavbar" })}
          />
        )}
      </div>
      <img className="mobile:mb-1 lg:mr-4" src={Logo} alt="sneaker logo" />
      <Navbar />
      <div className="grid place-items-center  ml-auto px-2">
        <button
          className="relative text-[0.5rem] text-white after:content-[attr(data-items-size)] after:absolute after:-top-1 after:rounded-2xl after:bg-primary-dark after:px-1.5"
          onClick={() => toggleDispatch({ type: "toggleCart" })}
          data-items-size={cart.items.length === 0 ? "" : cart.items.length}
        >
          <CartButton className="fill-neutral-dark" />
        </button>
        <Cart />
      </div>
      <img
        className="w-6 lg:w-12 border-2 hover:border-primary-dark rounded-full"
        src={Avatar}
        alt="avatar"
      />
    </header>
  );
}
