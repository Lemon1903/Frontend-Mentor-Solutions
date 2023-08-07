import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type Theme = "primary" | "secondary" | "muted";

interface IButtonProps {
  theme: Theme;
  children?: ReactNode;
  className?: string;
}

export default function Button(props: IButtonProps) {
  const { className, children, theme } = props;
  const styles: { [key: string]: string } = {
    primary: "bg-primary hover:text-primary hover:border-primary",
    secondary: "bg-secondary hover:text-secondary hover:border-secondary",
    muted: "bg-neutral-light/10 text-neutral-dark hover:border-neutral-dark",
  };

  return (
    <button
      className={twMerge(
        "rounded border-2 border-transparent px-3.5 py-3 font-medium text-neutral-lighest shadow-md transition-colors hover:bg-neutral-lighest",
        styles[theme],
        className
      )}
    >
      {children}
    </button>
  );
}
