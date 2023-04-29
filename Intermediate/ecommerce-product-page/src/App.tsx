import AddToCart from "./components/AddToCart";
import Header from "./components/Header";
import ProductDetails from "./components/product/ProductDetails";
import ProductImage from "./components/product/ProductImage";
import ProductLightbox from "./components/product/ProductLightbox";
import CartProvider from "./contexts/CartContext";
import ToggleProvider from "./contexts/ToggleContext";

const product: IProduct = {
  name: "Fall Limited Edition Sneakers",
  company: "Sneaker Company",
  price: 250.0,
  discount: 0.5,
  description:
    "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
};

export default function App() {
  return (
    <ToggleProvider>
      <CartProvider>
        <div className="m-auto lg:max-w-5xl lg:px-4">
          <Header />
          <main className="lg:grid grid-cols-2 items-center justify-items-center gap-8 lg:my-16">
            <ProductImage />
            <ProductLightbox />
            <div className="p-6 font-bold">
              <ProductDetails {...product} />
              <AddToCart {...product} />
            </div>
          </main>
        </div>
      </CartProvider>
    </ToggleProvider>
  );
}
