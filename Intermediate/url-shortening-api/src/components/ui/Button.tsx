import React from "react";
import { twMerge } from "tailwind-merge";

const Button = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, ...props }, ref) => {
    return (
      <button
        className={twMerge(
          "relative overflow-hidden rounded-full bg-primary px-10 py-3 text-lg text-white after:absolute after:inset-0 after:bg-transparent after:transition-colors after:content-[''] hover:after:bg-white/50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export default Button;
