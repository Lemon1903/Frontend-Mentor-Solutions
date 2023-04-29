import { useToggleStates } from "../contexts/ToggleContext";

const navlinks = ["Collections", "Men", "Women", "About", "Contact"];

export default function Navbar() {
  const toggleStates = useToggleStates();
  const width = toggleStates.isNavbarOpen ? "mobile:w-64" : "mobile:w-0";

  return (
    <nav
      className={`mobile:z-30 mobile:fixed mobile:left-0 inset-y-0 overflow-hidden ${width} h-full duration-300 bg-white`}
    >
      <ul className="lg:flex gap-6 mobile:space-y-4 px-1 mobile:px-6 mobile:py-24 lg:h-full mobile:font-bold lg:text-neutral-dark">
        {navlinks.map((navlink, index) => (
          <li
            className="flex items-center h-full border-b-4 border-transparent hover:border-primary-dark hover:text-black hover:font-bold"
            key={index}
          >
            <a
              className="relative before:content-[attr(title)] before:block before:font-bold before:h-0 before:invisible"
              href="#"
              title={navlink}
            >
              {navlink}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
