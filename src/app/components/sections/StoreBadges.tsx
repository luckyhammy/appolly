import { cn } from "../ui/utils";
import { imgAppStore, imgGooglePlay } from "./assets";

type StoreBadgesProps = {
  className?: string;
};

export default function StoreBadges({ className }: StoreBadgesProps) {
  return (
    <div className={cn("flex flex-wrap items-center gap-4", className)}>
      <a
        href="#download"
        className="relative block h-[47px] w-[149px] shrink-0 overflow-hidden"
        aria-label="Get it on Google Play"
      >
        <img
          src={imgGooglePlay}
          alt=""
          className="pointer-events-none absolute top-0 left-0 h-[210.64%] w-[100.33%] max-w-none"
        />
      </a>
      <a
        href="#download"
        className="relative block h-[45px] w-[151px] shrink-0 overflow-hidden"
        aria-label="Download on the App Store"
      >
        <img
          src={imgAppStore}
          alt=""
          className="pointer-events-none absolute top-[-88.64%] left-[-116.62%] h-[188.64%] w-[217.17%] max-w-none"
        />
      </a>
    </div>
  );
}
