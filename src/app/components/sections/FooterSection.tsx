import { Facebook, Instagram, Send, Twitter, Youtube } from "lucide-react";
import SectionContainer from "../layout/SectionContainer";
import { imgLogo } from "./assets";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "Screenshots", href: "#screenshots" },
  { label: "Blog", href: "#blog" },
];

export default function FooterSection() {
  return (
    <footer className="w-full bg-[#232233] pt-24 text-white sm:pt-28">
      <SectionContainer className="pb-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div>
            <img src={imgLogo} alt="Appolly" className="h-7 w-auto brightness-0 invert" />
            <p className="mt-5 font-['Josefin_Sans',sans-serif] text-base leading-6 text-white/80">
              Appolly helps you manage payments, track activity, and stay connected through a
              beautiful mobile app built for everyday life.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <Facebook className="size-5 cursor-pointer text-[#5956E9] hover:opacity-80" />
              <Instagram className="size-5 cursor-pointer hover:opacity-80" />
              <Twitter className="size-5 cursor-pointer hover:opacity-80" />
              <Youtube className="size-5 cursor-pointer hover:opacity-80" />
            </div>
          </div>

          <div>
            <h3 className="font-['Josefin_Sans',sans-serif] text-xl font-semibold uppercase sm:text-[25px]">
              Quick Link
            </h3>
            <ul className="mt-5 space-y-3 font-['Josefin_Sans',sans-serif] text-base text-white/80">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="font-['Josefin_Sans',sans-serif] text-xl font-semibold uppercase sm:text-[25px]">
              Newsletter
            </h3>
            <p className="mt-5 font-['Josefin_Sans',sans-serif] text-base leading-6 text-white/80">
              Subscribe to our newsletter for Appolly updates, feature releases, and helpful tips.
            </p>
            <form
              className="mt-5 flex overflow-hidden rounded-[4px] bg-white"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Your email address"
                className="min-w-0 flex-1 px-4 py-3 font-['Josefin_Sans',sans-serif] text-base text-[#6c6c72] outline-none"
              />
              <button
                type="submit"
                className="flex size-12 shrink-0 items-center justify-center bg-[#5956E9] text-white"
                aria-label="Subscribe"
              >
                <Send className="size-5" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-white/20 pt-6 text-center">
          <p className="font-['Josefin_Sans',sans-serif] text-base text-white/80">
            Copyright 2026 Appolly. All Rights Reserved.
          </p>
        </div>
      </SectionContainer>
    </footer>
  );
}
