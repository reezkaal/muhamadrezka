import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-200 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-foreground text-white hover:bg-[#1F2937] shadow-subtle active:scale-[0.98]",
        outline:
          "border border-border bg-surface text-foreground hover:border-[#D1D5DB] hover:bg-[#FAFAFA] active:scale-[0.98]",
        ghost: "text-muted hover:text-foreground hover:bg-[#F3F4F6]",
      },
      size: {
        default: "h-11 px-5 py-2",
        sm: "h-9 px-4 text-[13px]",
        lg: "h-12 px-7 text-[15px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
