import type { ReactNode } from "react";
import { cn } from "../ui/utils";

type SectionContainerProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section";
};

export default function SectionContainer({
  children,
  className,
  as: Tag = "div",
}: SectionContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-[135px]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
