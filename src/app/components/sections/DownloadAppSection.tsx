import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Download, Star, ThumbsUp } from "lucide-react";
import SectionContainer from "../layout/SectionContainer";
import SectionHeading from "../layout/SectionHeading";
import StoreBadges from "./StoreBadges";
import { imgDownloadPhones } from "./assets";

const stats = [
  { icon: Download, value: 59865, label: "Download" },
  { icon: ThumbsUp, value: 29852, label: "Like" },
  { icon: Star, value: 1500, label: "5 star rating" },
];

function useCountUp(target: number, active: boolean, duration = 1.8) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;

    let startTime: number | null = null;
    let frame: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [target, active, duration]);

  return count;
}

function StatCard({
  icon: Icon,
  value,
  label,
  index,
  active,
}: {
  icon: typeof Download;
  value: number;
  label: string;
  index: number;
  active: boolean;
}) {
  const count = useCountUp(value, active);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={active ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
      className="flex h-[176px] w-full flex-col items-center justify-center rounded-[10px] bg-[#5851ea] px-3 py-6 shadow-[0_1px_10px_rgba(0,0,0,0.1)]"
    >
      <Icon className="mb-3 size-8 text-white sm:mb-4 sm:size-9" strokeWidth={1.5} />
      <p className="font-['Josefin_Sans',sans-serif] text-xl font-semibold text-white uppercase sm:text-[25px]">
        {count.toLocaleString()}
      </p>
      <p className="mt-1 text-center font-['Josefin_Sans',sans-serif] text-sm font-semibold uppercase leading-tight text-white sm:mt-2 sm:text-base">
        {label}
      </p>
    </motion.div>
  );
}

export default function DownloadAppSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.25 });

  return (
    <section
      id="download"
      ref={sectionRef}
      className="w-full bg-white py-10 sm:py-16"
      aria-label="Download app"
    >
      <SectionContainer>
        <div className="flex flex-col items-center gap-10 xl:flex-row xl:items-center xl:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full text-center xl:max-w-[570px] xl:text-left"
          >
            <SectionHeading
              align="center"
              className="xl:text-left xl:[&_p]:mx-0 xl:[&_p]:max-w-none"
              title="Download App Now"
              description="Get Appolly on your phone today and start tracking spending, sending payments, and managing your daily finances with confidence."
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex justify-center xl:justify-start"
            >
              <StoreBadges />
            </motion.div>

            <div className="mx-auto mt-8 grid w-full max-w-[534px] grid-cols-3 gap-3 sm:mt-10 sm:gap-4">
              {stats.map((stat, index) => (
                <StatCard key={stat.label} {...stat} index={index} active={isInView} />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative flex w-full justify-center xl:w-auto xl:flex-1"
          >
            <motion.div
              animate={isInView ? { y: [0, -14, 0] } : {}}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 mx-auto"
            >
              <img
                src={imgDownloadPhones}
                alt="Appolly on iPhone and Android"
                className="mx-auto w-full max-w-[300px] object-contain sm:max-w-[400px] xl:max-w-[516px]"
              />
            </motion.div>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute bottom-4 left-1/2 h-16 w-52 -translate-x-1/2 rounded-full bg-white/80 blur-sm sm:bottom-8"
              aria-hidden
            />
          </motion.div>
        </div>
      </SectionContainer>
    </section>
  );
}
