"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/util/utils";

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & {
    value?: number;
    max?: number;
    barColor?: string;
    barBackground?: string;
  }
>(
  (
    {
      className,
      value = 0,
      max = 100,
      barColor = "bg-red-500",
      barBackground = "bg-gray-500",
      ...props
    },
    ref
  ) => {
    // Ensure value is within the range of 0 to max
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

    return (
      <ProgressPrimitive.Root
        ref={ref}
        className={cn(
          "relative h-4 w-full overflow-hidden rounded-full",
          barBackground,
          className
        )}
        {...props}
      >
        <ProgressPrimitive.Indicator
          className={cn("h-full transition-all", barColor)}
          style={{ width: `${percentage}%` }}
        />
      </ProgressPrimitive.Root>
    );
  }
);

Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
