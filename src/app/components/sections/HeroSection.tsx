import type { ReactNode } from "react";
import PurpleSection from "../layout/PurpleSection";
import SiteHeader from "./SiteHeader";
import StoreBadges from "./StoreBadges";
import { imgHeroPhone } from "./assets";
import { cn } from "../ui/utils";

/** Source PNG: phone body on the left, drop shadow on the right. */
const IMG_W = 1056;
const IMG_H = 1187;
const PHONE_BODY_RATIO = 0.62;
const IMG_ASPECT = IMG_W / IMG_H;

function HeroBorderFrame({
  children,
  className,
  contentClassName,
}: {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
}) {
  return (
    <div className={cn("relative w-full", className)}>
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute z-0 border-solid border-[#7572ff] bg-transparent",
          "border-[8px] -top-[10%] left-[9%] -right-[9%] -bottom-[11%]",
          "sm:border-[10px] sm:-top-[11%] sm:left-[9%] sm:-right-[9%] sm:-bottom-[12%]",
          "md:border-[12px]",
          "lg:border-[14px] lg:-top-[11.8%] lg:left-[8.8%] lg:-right-[8.8%] lg:-bottom-[12%]",
          "xl:border-[16px] 2xl:border-[18px]",
        )}
      />
      <div className={cn("relative z-10 bg-white", contentClassName)}>{children}</div>
    </div>
  );
}

function HeroCardContent({ compact = false }: { compact?: boolean }) {
  return (
    <>
      <h1
        className={cn(
          "font-['Josefin_Sans',sans-serif] font-bold uppercase text-[#5956e9]",
          compact
            ? "text-2xl leading-[130%] sm:text-[28px]"
            : "text-[22px] leading-[1.25] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 2xl:leading-[1.3]",
        )}
      >
        A Great App Makes
        <br />
        Your Life Better
      </h1>
      <p
        className={cn(
          "font-['Josefin_Sans',sans-serif] text-[#6c6c72]",
          compact
            ? "mt-4 text-sm leading-6 sm:text-base"
            : "mt-3 max-w-[487px] text-[12px] leading-5 xl:text-[13px] xl:leading-6 2xl:mt-4 2xl:text-sm",
        )}
      >
        Appolly helps you track transactions, send payments, and stay connected with the
        people who matter—all from one beautifully simple mobile app.
      </p>
      <p
        className={cn(
          "font-['Josefin_Sans',sans-serif] font-semibold uppercase text-[#232233]",
          compact
            ? "mt-5 text-xl sm:text-[25px]"
            : "mt-3 text-sm xl:mt-4 xl:text-lg 2xl:text-xl",
        )}
      >
        Download App Now
      </p>
      <StoreBadges className="mt-4" />
    </>
  );
}

function HeroTextCard() {
  return (
    <>
      <HeroBorderFrame
        className="hidden lg:block lg:self-center"
        contentClassName="flex min-h-[360px] flex-col justify-center px-5 py-6 lg:px-6 lg:py-6 xl:min-h-[400px] xl:px-7 xl:py-8 2xl:min-h-[432px] 2xl:px-[30px] 2xl:py-10"
      >
        <HeroCardContent />
      </HeroBorderFrame>

      <HeroBorderFrame
        className="mx-auto max-w-[620px] lg:hidden"
        contentClassName="px-6 py-8 sm:px-8"
      >
        <HeroCardContent compact />
      </HeroBorderFrame>
    </>
  );
}

function HeroPhone() {
  const mobileClipWidth = `calc(var(--hero-phone-h) * ${IMG_ASPECT} * ${PHONE_BODY_RATIO})`;
  const mobileImageWidth = `calc(var(--hero-phone-h) * ${IMG_ASPECT})`;

  return (
    <div className="hidden lg:flex w-full min-w-0 items-center justify-center lg:items-center lg:justify-end">
      <div
        className="relative overflow-hidden lg:hidden"
        style={{
          height: "var(--hero-phone-h)",
          width: mobileClipWidth,
        }}
      >
        <img
          src={imgHeroPhone}
          alt="Appolly app preview on smartphone"
          className="absolute top-0 left-0 block h-full max-w-none"
          style={{ width: mobileImageWidth }}
        />
      </div>

      {/* Width-driven sizing: phone pushed toward the right edge */}
      <div className="hidden min-w-0 translate-x-4 lg:flex lg:items-center lg:justify-end xl:translate-x-8 2xl:translate-x-12">
        <img
          src={imgHeroPhone}
          alt="Appolly app preview on smartphone"
          className="h-auto w-full max-h-[min(680px,calc(100vw-18rem))] max-w-[min(620px,100%)] object-contain object-right"
        />
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <PurpleSection
      id="home"
      className="flex flex-col pb-0 lg:min-h-[820px] xl:min-h-[880px] 2xl:min-h-[920px]"
      containerClassName="relative flex min-h-0 flex-1 flex-col pt-0 pb-12 sm:pb-14 lg:pb-16 xl:pb-20 2xl:pb-[83px]"
    >
      <SiteHeader />

      <div
        className={cn(
          "mt-8 flex flex-col gap-8 sm:mt-9 sm:gap-9",
          "lg:mt-10 lg:flex-1 lg:grid lg:items-center lg:gap-2",
          "lg:grid-cols-[minmax(0,38%)_minmax(0,62%)]",
          "xl:mt-12 xl:grid-cols-[minmax(0,40%)_minmax(0,60%)] xl:gap-4",
          "2xl:mt-[67px] 2xl:grid-cols-[minmax(0,520px)_1fr] 2xl:gap-6",
          "py-4 sm:py-6 lg:py-0",
          "[--hero-phone-h:280px] sm:[--hero-phone-h:340px] md:[--hero-phone-h:380px]",
        )}
      >
        <HeroTextCard />
        <HeroPhone />
      </div>
    </PurpleSection>
  );
}
