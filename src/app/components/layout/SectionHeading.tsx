import { cn } from "../ui/utils";

type SectionHeadingProps = {
  title: string;
  description?: string;
  light?: boolean;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  title,
  description,
  light = false,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        align === "center" ? "text-center" : "text-left",
        className,
      )}
    >
      <h2
        className={cn(
          "font-['Josefin_Sans',sans-serif] text-2xl font-bold uppercase sm:text-[31.25px] sm:leading-[47.25px]",
          light ? "text-white" : "text-[#232233]",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 font-['Josefin_Sans',sans-serif] text-base leading-6",
            align === "center" && "mx-auto max-w-[601px]",
            light ? "text-white/90" : "text-[#6c6c72]",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
