import type { ReactNode } from "react";
import imgBackgroundImage from "../../../imports/01HomePageLight/b7089961164dd3d96eb61bd7b4822bb8e0953967.png";
import SectionContainer from "./SectionContainer";
import { cn } from "../ui/utils";

type PurpleSectionProps = {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
};

export default function PurpleSection({
  children,
  className,
  containerClassName,
  id,
}: PurpleSectionProps) {
  return (
    <section id={id} className={cn("relative w-full overflow-hidden", className)}>
      <div className="absolute inset-0" aria-hidden>
        <img
          src={imgBackgroundImage}
          alt=""
          className="size-full object-cover"
        />
      </div>
      <SectionContainer className={cn("relative py-14 sm:py-20", containerClassName)}>
        {children}
      </SectionContainer>
    </section>
  );
}
