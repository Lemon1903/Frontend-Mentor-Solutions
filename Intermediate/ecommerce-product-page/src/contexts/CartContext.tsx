import { createContext, useContext, useState } from "react";

interface IContextValue {
  items: ICartItem[];
  addItem: (product: IProduct, count: number) => void;
  removeItem: (name: string) => void;
}

const CartContext = createContext<IContextValue>({
  items: [],
  addItem: () => {},
  removeItem: () => {},
});

export default function CartProvider({ children }: any) {
  const [cartItems, setCartItems] = useState<ICartItem[]>([]);

  function handleAddingCartItem(product: IProduct, count: number) {
    const item = cartItems.find((item) => item.name === product.name);

    if (item) {
      item.quantity += count;
      return setCartItems(
        cartItems.map((cartItem) =>
          cartItem.name === item.name ? item : cartItem
        )
      );
    }

    const newCartItem = {
      name: product.name,
      price: product.price * product.discount,
      quantity: count,
    };
    setCartItems([...cartItems, newCartItem]);
  }

  function handleRemovingCartItem(name: string) {
    setCartItems(cartItems.filter((cartItem) => cartItem.name !== name));
  }

  const contextValue: IContextValue = {
    items: cartItems,
    addItem: handleAddingCartItem,
    removeItem: handleRemovingCartItem,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
