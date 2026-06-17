import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import PurpleSection from "../layout/PurpleSection";
import SectionHeading from "../layout/SectionHeading";
import { imgTestimonial } from "./assets";

const testimonials = [
  {
    name: "Ann Lubin",
    role: "Co-Founder",
    quote:
      "Appolly turned complicated money tasks into something our users actually enjoy. The interface is clear, fast, and built for real everyday habits.",
  },
  {
    name: "Maria Chen",
    role: "Premium User",
    quote:
      "I can check recent transactions, filter spending, and stay on top of payments without switching between apps. It saves me time every single day.",
  },
  {
    name: "James Porter",
    role: "Small Business Owner",
    quote:
      "The dashboard and profile tools make it easy to track activity and stay organized. Appolly feels polished, simple, and dependable.",
  },
];

export default function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selectedIndex, setSelectedIndex] = useState(0);

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
    <PurpleSection id="testimonials">
      <SectionHeading
        light
        title="Our Happy Customers"
        description="See why people love using Appolly for payments, spending insights, and a mobile experience that feels effortless from day one."
      />

      <div className="mt-10 overflow-hidden sm:mt-14" ref={emblaRef}>
        <div className="flex">
          {testimonials.map((item, index) => {
            const isActive = index === selectedIndex;
            return (
              <div
                key={`${item.name}-${index}`}
                className="min-w-0 shrink-0 grow-0 basis-full px-2 sm:basis-[85%] md:basis-[70%] lg:basis-[55%]"
              >
                <article
                  className={`mx-auto rounded-[10px] bg-white px-6 py-8 text-center shadow-[0_10px_100px_rgba(0,0,0,0.24)] transition-all duration-500 sm:px-10 sm:py-10 ${
                    isActive ? "scale-100 opacity-100" : "scale-95 opacity-70"
                  }`}
                >
                  <img
                    src={imgTestimonial}
                    alt={item.name}
                    className="mx-auto size-20 rounded-full object-cover sm:size-24"
                  />
                  <h3 className="mt-5 font-['Josefin_Sans',sans-serif] text-2xl font-bold uppercase text-[#232233] sm:text-[31.25px]">
                    {item.name}
                  </h3>
                  <p className="mt-2 font-['Josefin_Sans',sans-serif] text-lg font-semibold uppercase text-[#232233]">
                    {item.role}
                  </p>
                  <p className="mt-4 font-['Josefin_Sans',sans-serif] text-base leading-6 text-[#6c6c72]">
                    {item.quote}
                  </p>
                </article>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => emblaApi?.scrollTo(index)}
            aria-label={`Go to testimonial ${index + 1}`}
            className="relative flex size-5 items-center justify-center"
          >
            <span
              className={`block size-4 rounded-full bg-white transition-opacity ${
                index === selectedIndex ? "opacity-100" : "opacity-40"
              }`}
            />
            {index === selectedIndex && (
              <span className="absolute inset-0 rounded-full border border-white" />
            )}
          </button>
        ))}
      </div>
    </PurpleSection>
  );
}
