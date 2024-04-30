import React from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

type Props = VariantProps<typeof variants> & {
  className?: string;
  wrapperClassName?: string;
};

const variants = cva(
  "animate-spin inline-block border-[3px] border-current border-t-transparent rounded-full",
  {
    variants: {
      size: {
        extra_small: "w-4 h-4 border-[2px]",
        small: "w-6 h-6",
        middle: "w-8 h-8",
        large: "w-12 h-12",
      },
      spinnerColor: {
        default: "text-primary",
        white: "text-white",
      },
    },
    defaultVariants: {
      size: "middle",
      spinnerColor: "default",
    },
  },
);

const Spinner = ({
  size,
  className,
  wrapperClassName,
  spinnerColor,
}: Props) => {
  return (
    <div
      className={cn(
        "w-full h-full flex items-center justify-center",
        wrapperClassName,
      )}>
      <div
        className={cn([variants({ size, spinnerColor }), className])}
        aria-label="loading">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
