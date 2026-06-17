import { Play } from "lucide-react";
import PurpleSection from "../layout/PurpleSection";
import SectionHeading from "../layout/SectionHeading";
import { imgVideoThumb } from "./assets";

export default function HowToUseSection() {
  return (
    <PurpleSection id="video">
      <SectionHeading
        light
        title="How to Use the App Perfectly"
        description="Watch a quick walkthrough to learn how to set up Appolly, review transactions, send payments, and get the most from every feature."
      />

      <div className="relative mx-auto mt-8 w-full max-w-[770px] overflow-hidden rounded-[10px] shadow-[0_10px_100px_rgba(0,0,0,0.24)] sm:mt-12">
        <img
          src={imgVideoThumb}
          alt="Appolly app tutorial video thumbnail"
          className="aspect-[770/319] w-full object-cover sm:aspect-video"
        />
        <div className="absolute inset-0 bg-[rgba(88,81,234,0.4)]" />
        <button
          type="button"
          aria-label="Play video"
          className="absolute left-1/2 top-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition-transform hover:scale-105 sm:size-[70px]"
        >
          <span className="flex size-12 items-center justify-center rounded-full bg-white/80 sm:size-[60px]">
            <span className="flex size-10 items-center justify-center rounded-full bg-white sm:size-[50px]">
              <Play className="ml-1 size-6 fill-[#5956E9] text-[#5956E9]" />
            </span>
          </span>
        </button>
      </div>
    </PurpleSection>
  );
}
