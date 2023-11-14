import { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import useLocalStorage from "../hooks/useLocalStorage";
import Button from "./ui/Button";
import ShortenedLink from "./ui/ShortenedLink";

// const links = [
//   {
//     original: "https://www.frontendmentor.io",
//     shortened: "https://rel.ink/k4lKyk",
//   },
//   {
//     original: "https://twitter.com/frontendmentor",
//     shortened: "https://rel.ink/gxOXp9",
//   },
//   {
//     original: "https://www.linkedin.com/company/frontend-mentor",
//     shortened: "https://rel.ink/gob3X9",
//   },
// ];

interface IResponseData {
  ok: boolean;
  error_code: number;
  error: string;
  result: {
    full_short_link: string;
    original_link: string;
  };
}

interface IShortenedLink {
  original: string;
  shortened: string;
}

export default function Shortener() {
  const [links, setLinks] = useLocalStorage<IShortenedLink[]>("shortenedLinks", []);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  async function handleShortenLink(e: React.FormEvent) {
    e.preventDefault();
    if (inputRef.current) {
      const inputValue = inputRef.current.value;
      if (inputValue === "") {
        setError("Please add a link");
        return;
      }

      setIsLoading(true);

      try {
        const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${inputValue}`);
        const data: IResponseData = await response.json();

        if (data.ok) {
          const shortenedLink: IShortenedLink = {
            original: data.result.original_link,
            shortened: data.result.full_short_link,
          };
          inputRef.current.value = "";
          setLinks([shortenedLink, ...links]);
          setError("");
        } else {
          setError(data.error);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
  }

  function disableScrolling() {
    setTimeout(() => {
      if (linksRef.current) {
        linksRef.current.classList.remove("overflow-y-scroll");
      }
    }, 1000);
  }

  function enableScrolling() {
    if (linksRef.current) {
      linksRef.current.classList.add("overflow-y-scroll");
    }
  }

  return (
    <section className="container md:px-16">
      {/* Shortener input */}
      <form
        className="flex -translate-y-1/2 gap-4 rounded-lg bg-secondary bg-shortener-mobile bg-right-top bg-no-repeat p-6 max-md:flex-col sm:bg-shortener-desktop sm:bg-cover md:p-10 lg:p-14"
        onSubmit={handleShortenLink}
      >
        <div className="relative grid flex-1">
          <input
            ref={inputRef}
            className={twMerge(
              "h-full w-full rounded-lg px-6 py-3 text-neutral-dark outline-none md:px-8 md:text-lg",
              error !== "" && "border-[3px] border-error placeholder:text-error/50"
            )}
            placeholder="Shorten a link here..."
          />
          {error !== "" && (
            <span className="pt-1 text-[0.8rem] italic text-error lg:absolute lg:left-0 lg:top-full lg:text-base">
              {error}
            </span>
          )}
        </div>
        <Button
          className="rounded-lg disabled:brightness-75 disabled:after:bg-transparent md:w-[175.2px] md:py-4"
          disabled={isLoading}
        >
          {isLoading ? (
            <div role="status">
              <svg
                aria-hidden="true"
                className="mx-auto h-7 w-7 animate-spin fill-neutral-darkest text-neutral"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            "Shorten it!"
          )}
        </Button>
      </form>
      {/* Shortened links */}
      <div
        ref={linksRef}
        className="links -mt-14 mb-24 max-h-[578px] space-y-6 overflow-hidden md:max-h-[266px] lg:space-y-4"
        onScroll={disableScrolling}
        onWheel={enableScrolling}
        onClick={enableScrolling}
      >
        {links.map((link, idx) => (
          <ShortenedLink key={idx} {...link} />
        ))}
      </div>
    </section>
  );
}
