import { useState } from "react";
import {
  Facebook,
  Instagram,
  Mail,
  Menu,
  Phone,
  Twitter,
  X,
  Youtube,
} from "lucide-react";
import { imgLogo } from "./assets";
import { cn } from "../ui/utils";

const navLinksLeft = [
  { label: "Home", href: "#home", active: true },
  { label: "About", href: "#about" },
  { label: "Features", href: "#features" },
];

const navLinksRight = [
  { label: "Screenshots", href: "#screenshots" },
  { label: "Blog", href: "#blog" },
];

const navLinkClass = (active?: boolean) =>
  cn(
    "font-['Josefin_Sans',sans-serif] font-semibold uppercase whitespace-nowrap transition-colors",
    "text-[16px] lg:text-[16px] xl:text-[17px] 2xl:text-[20px]",
    active
      ? "text-[#5956e9] underline underline-offset-4"
      : "text-[#232233] hover:text-[#5956e9]",
  );

function DownloadButton({ className }: { className?: string }) {
  return (
    <a
      href="#download"
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-[5px] bg-[#5956e9] font-['Josefin_Sans',sans-serif] font-semibold uppercase leading-none text-white transition-opacity hover:opacity-90",
        className,
      )}
    >
      Download
    </a>
  );
}

function LogoBadge({
  className,
  imgClassName,
}: {
  className?: string;
  imgClassName?: string;
}) {
  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center rounded-[5px] bg-white shadow-[0_1px_10px_rgba(0,0,0,0.1)]",
        className,
      )}
    >
      <img
        src={imgLogo}
        alt="Appolly"
        className={cn("max-w-none object-contain", imgClassName)}
      />
    </div>
  );
}

/** Compact sizes only below 768px (extra-small at 320px and below). */
const mobileLogoClass =
  "max-md:h-[42px] max-md:min-h-[42px] max-md:w-[94px] max-md:min-w-[94px] max-[320px]:h-[34px] max-[320px]:min-h-[34px] max-[320px]:w-[76px] max-[320px]:min-w-[76px] md:h-[90px] md:min-h-[90px] md:w-[200px] md:min-w-[200px]";

const mobileLogoImgClass =
  "max-md:h-4 max-md:min-h-4 max-md:w-[78px] max-md:min-w-[78px] max-[320px]:h-3.5 max-[320px]:min-h-3.5 max-[320px]:w-[64px] max-[320px]:min-w-[64px] md:h-7 md:min-h-7 md:w-[167px] md:min-w-[167px]";

const mobileDownloadClass =
  "ml-auto max-md:h-[26px] max-md:min-h-[26px] max-md:w-[76px] max-md:min-w-[76px] max-md:text-[10px] max-[320px]:h-[22px] max-[320px]:min-h-[22px] max-[320px]:w-[64px] max-[320px]:min-w-[64px] max-[320px]:text-[9px] md:h-[50px] md:min-h-[50px] md:w-[158px] md:min-w-[158px] md:text-[20px]";

const desktopLogoClass =
  "h-[90px] min-h-[90px] w-[200px] min-w-[200px]";

const desktopLogoImgClass =
  "h-7 min-h-7 w-[167px] min-w-[167px]";

const desktopDownloadClass =
  "h-[40px] min-h-[40px] w-[118px] min-w-[118px] text-[15px] xl:h-[44px] xl:min-h-[44px] xl:w-[132px] xl:min-w-[132px] xl:text-[17px] 2xl:h-[50px] 2xl:min-h-[50px] 2xl:w-[158px] 2xl:min-w-[158px] 2xl:text-[20px]";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-50 w-full text-white">
      <div className="hidden w-full border-b border-white/10 lg:block">
        <div className="flex w-full items-center justify-between py-2 text-base">
          <div className="flex flex-wrap items-center gap-6">
            <a
              href="mailto:Info@youremail.com"
              className="flex items-center gap-2 hover:opacity-80"
            >
              <Mail className="size-[18px] shrink-0" />
              <span>Info@youremail.com</span>
            </a>
            <a
              href="tel:+14805550103"
              className="flex items-center gap-2 hover:opacity-80"
            >
              <Phone className="size-[18px] shrink-0" />
              <span>(480) 555-0103</span>
            </a>
          </div>
          <div className="flex items-center gap-12">
            <Facebook className="size-[18px] cursor-pointer hover:opacity-80" />
            <Instagram className="size-[18px] cursor-pointer hover:opacity-80" />
            <Twitter className="size-[18px] cursor-pointer hover:opacity-80" />
            <Youtube className="size-[18px] cursor-pointer hover:opacity-80" />
          </div>
        </div>
      </div>

      <div className="w-full py-2 md:py-4 lg:pb-10 lg:pt-4">
        {/* Below 768px: compact. 768px–1023px: hamburger with full design sizes. */}
        <div className="relative flex flex-col gap-2 max-md:gap-2 md:gap-3 lg:hidden">
          <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2">
            <LogoBadge className={mobileLogoClass} imgClassName={mobileLogoImgClass} />
          </div>

          <div className="mt-0 flex max-md:h-[34px] w-full items-center rounded-[5px] bg-white px-2 shadow-[0_1px_10px_rgba(0,0,0,0.1)] max-md:px-2 sm:px-3 md:mt-[15px] md:h-[60px] md:px-4">
            <button
              type="button"
              className="flex max-md:size-7 shrink-0 items-center justify-center text-[#232233] md:size-10"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? (
                <X className="max-md:size-4 md:size-6" />
              ) : (
                <Menu className="max-md:size-4 md:size-6" />
              )}
            </button>

            <DownloadButton className={mobileDownloadClass} />
          </div>

          {open && (
            <nav className="flex flex-col gap-2 rounded-[5px] bg-white p-4 shadow-[0_1px_10px_rgba(0,0,0,0.1)]">
              {[...navLinksLeft, ...navLinksRight].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded px-3 py-2 font-['Josefin_Sans',sans-serif] text-[20px] font-semibold uppercase",
                    "active" in link && link.active
                      ? "bg-[#5956e9]/10 text-[#5956e9]"
                      : "text-[#232233]",
                  )}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          )}
        </div>

        {/* Desktop — left / center logo / right groups with tighter gaps at 1024–1440 */}
        <div className="relative mx-auto hidden h-[90px] w-full max-w-[1170px] lg:block">
          <div className="absolute left-1/2 top-0 z-20 -translate-x-1/2">
            <LogoBadge className={desktopLogoClass} imgClassName={desktopLogoImgClass} />
          </div>

          <div className="absolute inset-x-0 top-1/2 z-10 -translate-y-1/2">
            <div className="flex h-[60px] items-center rounded-[5px] bg-white shadow-[0_1px_10px_rgba(0,0,0,0.1)]">
              <nav className="flex min-w-0 flex-1 items-center justify-start gap-3 pl-4 lg:gap-3 lg:pl-5 xl:gap-4 xl:pl-6 2xl:gap-8 2xl:pl-8">
                {navLinksLeft.map((link) => (
                  <a key={link.label} href={link.href} className={navLinkClass(link.active)}>
                    {link.label}
                  </a>
                ))}
              </nav>

              <div className="w-[160px] shrink-0 xl:w-[180px] 2xl:w-[200px]" aria-hidden />

              <div className="flex min-w-0 flex-1 items-center justify-end gap-3 pr-4 lg:gap-3 lg:pr-5 xl:gap-4 xl:pr-6 2xl:gap-8 2xl:pr-8">
                {navLinksRight.map((link) => (
                  <a key={link.label} href={link.href} className={navLinkClass()}>
                    {link.label}
                  </a>
                ))}
                <DownloadButton className={desktopDownloadClass} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
