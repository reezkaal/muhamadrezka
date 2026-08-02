import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {}

function Badge({ className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-lg border border-border bg-surface px-2.5 py-1 text-[12.5px] font-medium text-muted transition-colors duration-200",
        className
      )}
      {...props}
    />
  );
}

export { Badge };
