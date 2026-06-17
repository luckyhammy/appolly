import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import SectionContainer from "../layout/SectionContainer";
import SectionHeading from "../layout/SectionHeading";
import imgIPhoneXMockup1 from "../../../imports/01HomePageLight/96bee98b84c3f527c840b70412bba7e38ba20e95.png";
import img000 from "../../../imports/01HomePageLight/27d8b61f751e80dbc1b668ba6b7d76c26fb88c76.png";
import img003 from "../../../imports/01HomePageLight/946df00d0462f709ba8e8c2c6c287e21a5776339.png";
import img001 from "../../../imports/01HomePageLight/b6c24549df54de5cfe864a76e99569b4d37953ab.png";
import imgApp from "../../../imports/01HomePageLight/dbf52aa45dcee540a0b5437acaaf9bd18e1f6195.png";

const slides = [
  { src: img000, alt: "Appolly home dashboard" },
  { src: img003, alt: "Appolly expense tracking screen" },
  { src: imgIPhoneXMockup1, alt: "Appolly recent transactions view", isMain: true },
  { src: img001, alt: "Appolly spending statistics" },
  { src: imgApp, alt: "Appolly profile and contacts" },
];

function ArrowLeftIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 50 50" fill="none">
      <path
        d="M28.5 12.5L17 25l11.5 12.5"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function AppInterfaceSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    containScroll: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section id="screenshots" className="w-full bg-white py-14 sm:py-20" aria-label="App interface preview">
      <SectionContainer>
        <SectionHeading
          title="Check Out Our App Interface Look"
          description="Swipe through Appolly’s core screens to see how payments, activity history, insights, and profiles come together in one seamless experience."
        />

        <div className="relative mt-10 sm:mt-14">
          <button
            type="button"
            onClick={scrollPrev}
            aria-label="Previous slide"
            className="absolute top-1/2 left-0 z-10 flex size-14 -translate-y-1/2 items-center justify-center rounded-full border-2 border-[#5956E9] bg-white text-[#5956E9] shadow-[0_1px_10px_rgba(0,0,0,0.1)] transition-transform hover:scale-105 sm:size-[84px]"
          >
            <ArrowLeftIcon className="size-6 sm:size-8" />
          </button>

          <button
            type="button"
            onClick={scrollNext}
            aria-label="Next slide"
            className="absolute top-1/2 right-0 z-10 flex size-14 -translate-y-1/2 items-center justify-center rounded-full bg-[#5956E9] text-white shadow-[0_1px_10px_rgba(0,0,0,0.1)] transition-transform hover:scale-105 sm:size-[84px]"
          >
            <ArrowLeftIcon className="size-6 rotate-180 sm:size-8" />
          </button>

          <div className="overflow-hidden px-12 sm:px-20" ref={emblaRef}>
            <div className="flex touch-pan-y">
              {slides.map((slide, index) => {
                const isActive = index === selectedIndex;
                return (
                  <div
                    key={slide.alt}
                    className="min-w-0 shrink-0 grow-0 basis-[80%] px-2 sm:basis-[55%] md:basis-[40%] lg:basis-[28%]"
                  >
                    <div
                      className={`flex items-center justify-center transition-all duration-500 ease-out ${
                        isActive
                          ? "scale-100 opacity-100"
                          : "scale-[0.82] opacity-50"
                      }`}
                    >
                      <div
                        className={`relative w-full overflow-hidden shadow-[0_1px_10px_rgba(0,0,0,0.1)] ${
                          slide.isMain
                            ? "aspect-[319/622] max-h-[420px] sm:max-h-[520px] lg:max-h-[622px]"
                            : "aspect-[246/532] max-h-[360px] rounded-[40px] sm:max-h-[460px] lg:max-h-[532px]"
                        }`}
                      >
                        <img
                          src={slide.src}
                          alt={slide.alt}
                          className="size-full object-cover"
                          draggable={false}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            {slides.map((slide, index) => (
              <button
                key={slide.alt}
                type="button"
                onClick={() => scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
                className="relative flex size-5 items-center justify-center"
              >
                <span
                  className={`block size-4 rounded-full bg-[#5956E9] transition-opacity ${
                    index === selectedIndex ? "opacity-100" : "opacity-40"
                  }`}
                />
                {index === selectedIndex && (
                  <span className="absolute inset-0 rounded-full border border-[#5956E9]" />
                )}
              </button>
            ))}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
