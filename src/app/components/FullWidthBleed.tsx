import type { ComponentPropsWithoutRef } from "react";
import { cn } from "./ui/utils";

type FullWidthBleedProps = ComponentPropsWithoutRef<"div">;

export default function FullWidthBleed({
  className,
  style,
  children,
  ...props
}: FullWidthBleedProps) {
  return (
    <div
      className={cn("absolute left-1/2 -translate-x-1/2", className)}
      style={{
        width: "calc(100vw / var(--page-scale, 1))",
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}
