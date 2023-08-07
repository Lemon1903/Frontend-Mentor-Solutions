import { useEffect, useState } from "react";
import menuClose from "../assets/images/icon-menu-close.svg";
import menuOpen from "../assets/images/icon-menu.svg";
import logo from "../assets/images/logo.svg";

const navlinks = ["Home", "New", "Popular", "Trending", "Categories"];

export default function Header() {
  const [isNavOpen, setNavOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isNavOpen ? "hidden" : "scroll";
  }, [isNavOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`${
          isNavOpen ? "opacity-100" : "opacity-0"
        } absolute inset-0 bg-neutral-darkest/40 duration-200`}
      />

      <header className="flex items-center justify-between py-8 lg:py-12 xl:pt-20">
        <img className="max-sm:w-12" src={logo} alt="logo" />

        {/* Menu Button */}
        <button
          className="z-20 h-8 lg:hidden"
          onClick={() => setNavOpen(!isNavOpen)}
        >
          <img src={isNavOpen ? menuClose : menuOpen} alt="menu icon" />
        </button>

        {/* Menu */}
        <nav
          className={`${
            isNavOpen ? "max-lg:w-64" : "max-lg:w-0"
          } inset-y-0 right-0 bg-neutral-light duration-200 max-lg:fixed`}
        >
          <ul className="flex gap-6 px-5 py-36 text-neutral-dark max-lg:flex-col lg:gap-10 lg:p-0">
            {navlinks.map((link, idx) => (
              <li key={idx}>
                <a href="#" className="font-bold hover:text-primary">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
