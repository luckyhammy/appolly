import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import SectionContainer from "../layout/SectionContainer";
import SectionHeading from "../layout/SectionHeading";
import { imgAboutPhone } from "./assets";

const features = [
  {
    title: "Creative design",
    description:
      "A clean interface with thoughtful purple accents keeps every screen easy to read and enjoyable to use.",
  },
  {
    title: "Easy to use",
    description:
      "Set up your account in minutes, review recent activity instantly, and complete payments with just a few taps.",
  },
  {
    title: "Best user experience",
    description:
      "Smooth navigation, clear layouts, and helpful details make managing money feel simple from the first login.",
  },
];

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" ref={ref} className="w-full bg-white py-14 sm:py-20">
      <SectionContainer>
        <SectionHeading
          title="About Our App"
          description="Appolly was built to make everyday money management feel effortless. From quick payments to clear spending insights, everything you need lives in one polished mobile experience."
        />

        <div className="mt-12 flex flex-col items-center gap-10 lg:mt-16 lg:flex-row lg:items-start lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 40, rotate: -6 }}
            animate={inView ? { opacity: 1, y: 0, rotate: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex w-full justify-center lg:w-2/5"
          >
            <motion.img
              src={imgAboutPhone}
              alt="Appolly on Android smartphone"
              animate={inView ? { y: [0, -12, 0] } : {}}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="w-full max-w-[280px] object-contain sm:max-w-[340px] lg:max-w-[386px]"
            />
            <div
              className="absolute -bottom-4 left-1/2 h-8 w-40 -translate-x-1/2 rounded-full bg-black/10 blur-md"
              aria-hidden
            />
          </motion.div>

          <div className="flex w-full flex-col gap-5 lg:w-3/5">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 * index }}
                className="rounded-[10px] bg-white p-5 shadow-[0_1px_10px_rgba(0,0,0,0.1)] sm:p-6"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 size-6 shrink-0 text-[#5956E9]" />
                  <div>
                    <h3 className="font-['Josefin_Sans',sans-serif] text-lg font-semibold uppercase text-[#232233] sm:text-xl">
                      {feature.title}
                    </h3>
                    <p className="mt-2 font-['Josefin_Sans',sans-serif] text-base leading-6 text-[#6c6c72]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
