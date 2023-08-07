import { useState } from "react";
import { twMerge } from "tailwind-merge";
import errorIcon from "../assets/icon-error.svg";
import Button from "./ui/Button";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  function resetError(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
    setError(false);
  }

  function handleEmailSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) setError(true);
  }

  return (
    <section className="bg-primary text-neutral-lighest">
      <div className="mx-auto max-w-lg space-y-8 px-8 py-16 lg:px-4">
        <div className="space-y-2 text-center lg:space-y-8">
          <p className="tracking-[0.25em] max-md:text-sm lg:tracking-[0.35em]">35,000+ ALREADY JOINED</p>
          <p className="text-2xl font-medium md:text-4xl">Stay up-to-date with what we’re doing</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <form className="relative flex-1" onSubmit={handleEmailSubmit}>
            <input
              className={twMerge(
                "w-full rounded border-2 border-transparent px-6 py-3 text-neutral-dark outline-none",
                error && "rounded-b-none border-secondary"
              )}
              value={email}
              onChange={resetError}
              placeholder="Enter your email address"
            />
            {error && (
              <>
                <span className="absolute inset-x-0 top-full rounded-b bg-secondary px-4 py-1 text-sm font-medium italic">
                  Whoops, make sure its an email
                </span>
                <img className="absolute inset-y-0 right-4 my-auto" src={errorIcon} alt="error icon" />
              </>
            )}
          </form>
          <Button theme="secondary" className="px-5 max-lg:w-full">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
