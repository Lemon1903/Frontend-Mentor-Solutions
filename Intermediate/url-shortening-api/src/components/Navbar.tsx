import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { ReactComponent as Hamburger } from "../assets/icon-menu.svg";
import { ReactComponent as ShortlyLogo } from "../assets/logo.svg";
import Button from "./ui/Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigation = useRef<HTMLElement>(null);

  useEffect(() => {
    document.body.className = isOpen ? "overflow-hidden" : "overflow-visible";
  }, [isOpen]);

  function toggleNavigation(e: React.MouseEvent) {
    e.preventDefault();
    if (!isOpen && navigation.current) {
      navigation.current.focus();
    }
    setIsOpen(!isOpen);
  }

  return (
    <header className="container relative flex items-center gap-10 py-10 md:px-16 lg:py-8">
      <ShortlyLogo className="fill-neutral-dark" />
      <Hamburger className="ml-auto scale-150 lg:hidden" onMouseDown={toggleNavigation} />
      <nav
        ref={navigation}
        className={twMerge(
          "inset-x-0 top-[85%] z-50 mx-6 h-0 rounded-lg transition-all max-lg:absolute max-lg:overflow-hidden max-lg:text-center max-lg:text-lg max-lg:text-white md:mx-16 lg:m-0 lg:flex lg:flex-1 lg:items-center lg:justify-between",
          isOpen && "h-auto divide-y divide-neutral-light/50 bg-secondary px-6 py-10"
        )}
        onBlur={() => setIsOpen(false)}
        tabIndex={-1}
      >
        <ul className="flex gap-6 max-lg:flex-col max-lg:pb-8 lg:gap-8">
          {["Features", "Pricing", "Resources"].map((link) => (
            <li key={link}>
              <a className="font-bold transition-colors hover:text-neutral-dark" href="/">
                {link}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-6 max-lg:flex-col max-lg:pt-8 lg:items-center lg:gap-10">
          <a className="font-bold transition-colors hover:text-neutral-dark" href="/">
            Login
          </a>
          <Button className="px-6 max-lg:font-bold lg:py-1.5 lg:text-base">Sign Up</Button>
        </div>
      </nav>
    </header>
  );
}
