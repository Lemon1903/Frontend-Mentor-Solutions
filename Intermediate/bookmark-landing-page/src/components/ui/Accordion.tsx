import * as AccordionPrimitive from "@radix-ui/react-accordion";
import * as React from "react";
import { twMerge } from "tailwind-merge";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={twMerge("border-b border-neutral-light/50 first:border-t", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={twMerge(
        "flex flex-1 items-center justify-between py-4 transition-all data-[state=open]:font-medium data-[state=closed]:hover:text-secondary lg:text-lg [&[data-state=open]>svg]:-rotate-180 [&[data-state=open]>svg]:stroke-secondary",
        className
      )}
      {...props}
    >
      {children}
      <svg
        className="h-4 w-4 shrink-0 stroke-primary transition-transform duration-200"
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="12"
      >
        <path fill="none" strokeWidth="3" d="M1 1l8 8 8-8" />
      </svg>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={twMerge(
      "overflow-hidden py-4 leading-loose transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
      className
    )}
    {...props}
  >
    <div className="pb-4 pt-0">{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
