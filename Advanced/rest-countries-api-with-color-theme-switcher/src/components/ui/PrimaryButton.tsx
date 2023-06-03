import { HTMLAttributes, forwardRef } from "react";

export const PrimaryButton = forwardRef<
  HTMLButtonElement,
  HTMLAttributes<HTMLButtonElement>
>(({ children, className, ...props }, ref) => (
  <button
    ref={ref}
    className={`flex items-center rounded-md bg-foreground shadow-md hover:brightness-hover ${className}`}
    {...props}
  >
    {children}
  </button>
));
