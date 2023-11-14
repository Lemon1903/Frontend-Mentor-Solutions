import { useState } from "react";
import { twMerge } from "tailwind-merge";
import Button from "./Button";

interface IShortenedLinkProps {
  original: string;
  shortened: string;
}

export default function ShortenedLink({ original, shortened }: IShortenedLinkProps) {
  const [isCopied, setIsCopied] = useState(false);

  function handleCopyToClipboard() {
    navigator.clipboard.writeText(shortened);
    setIsCopied(true);
  }

  return (
    <div className="divide-y divide-neutral-light/50 overflow-hidden rounded-lg bg-white md:grid md:grid-cols-2 md:items-center md:gap-4 lg:px-2">
      {/* Original link */}
      <div className="p-4">
        <a href={original} target="_blank">
          <p className="overflow-hidden text-ellipsis whitespace-nowrap text-neutral-dark lg:text-lg">{original}</p>
        </a>
      </div>
      {/* Shortened link */}
      <div className="flex gap-4 p-4 max-md:flex-col md:items-center md:justify-self-end lg:gap-6">
        <a href={shortened} target="_blank">
          <p className="overflow-hidden text-ellipsis whitespace-nowrap text-primary lg:text-lg">{shortened}</p>
        </a>
        <Button
          className={twMerge("w-full rounded-lg text-base md:py-2 lg:w-[125px] lg:px-0", isCopied && "bg-secondary")}
          onClick={handleCopyToClipboard}
        >
          {isCopied ? "Copied!" : "Copy"}
        </Button>
      </div>
    </div>
  );
}
