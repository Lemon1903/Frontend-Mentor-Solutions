import { ReactComponent as FacebookLogo } from "../assets/icon-facebook.svg";
import { ReactComponent as InstagramLogo } from "../assets/icon-instagram.svg";
import { ReactComponent as PinterestLogo } from "../assets/icon-pinterest.svg";
import { ReactComponent as TwitterLogo } from "../assets/icon-twitter.svg";
import { ReactComponent as ShortlyLogo } from "../assets/logo.svg";

const footerLinks = [
  {
    heading: "Features",
    sublinks: ["Link Shortening", "Branded Links", "Analytics"],
  },
  {
    heading: "Resources",
    sublinks: ["Blog", "Developers", "Support"],
  },
  {
    heading: "Company",
    sublinks: ["About", "Our Team", "Careers", "Contact"],
  },
];

const socialLinks = [
  <FacebookLogo className="fill-white transition-colors hover:fill-primary" />,
  <TwitterLogo className="fill-white transition-colors hover:fill-primary" />,
  <PinterestLogo className="fill-white transition-colors hover:fill-primary" />,
  <InstagramLogo className="fill-white transition-colors hover:fill-primary" />,
];

export default function Footer() {
  return (
    <footer className="bg-neutral-darkest py-16">
      <div className="container flex justify-between gap-12 px-16 max-lg:flex-col max-lg:items-center xl:gap-28">
        <ShortlyLogo className="fill-white xl:flex-1" />
        <div className="flex gap-10 px-4 max-lg:flex-col lg:gap-20">
          {footerLinks.map(({ heading, sublinks }) => (
            <div key={heading} className="space-y-4 max-lg:text-center">
              <h4 className="font-bold text-white">{heading}</h4>
              <ul className="space-y-2">
                {sublinks.map((link) => (
                  <li key={link}>
                    <a className="transition-colors hover:text-primary" href="/">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <ul className="flex items-center gap-6 lg:self-start ">
          {socialLinks.map((logo, idx) => (
            <li key={idx}>
              <a href="/">{logo}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
