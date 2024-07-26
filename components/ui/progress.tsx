"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-4 w-full overflow-hidden bg-[#adcaf5]",
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="absolute top-0 h-full left-0 w-full bg-blue-600 transition-all ease-in-out"
      style={{
        transform: `translateY(-${100 - (value || 0)}%)`,
        transition: "transform 5s ease-in-out",
      }}
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
