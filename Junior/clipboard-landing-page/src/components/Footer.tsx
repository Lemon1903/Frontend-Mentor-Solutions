import FacebookSVG from "./logos/FacebookSVG";
import InstagramSVG from "./logos/InstagramSVG";
import LogoSVG from "./logos/LogoSVG";
import TwitterSVG from "./logos/TwitterSVG";

const footerLinks = [
  "FAQs",
  "Contact Us",
  "Privacy Policy",
  "Press Kit",
  "Install Guide",
];
const socialLogos = [<FacebookSVG />, <TwitterSVG />, <InstagramSVG />];

export default function Footer() {
  return (
    <footer className="overflow-hidden flex gap-10 bg-neutral/20 py-12 text-lg max-lg:flex-col lg:gap-16 lg:px-16 xl:gap-36 xl:px-36">
      <LogoSVG size={56} />
      <ul className="flex flex-1 flex-col flex-wrap gap-5 text-neutral-dark max-lg:justify-center max-lg:text-center lg:h-16 lg:gap-2">
        {footerLinks.map((link, idx) => (
          <li key={idx}>
            <a className="hover:text-primary" href="#">
              {link}
            </a>
          </li>
        ))}
      </ul>
      <ul className="flex items-center justify-center gap-10 py-2 lg:gap-6">
        {socialLogos.map((logo, idx) => (
          <li key={idx}>
            <a className="fill-neutral-dark hover:fill-primary" href="#">
              {logo}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
