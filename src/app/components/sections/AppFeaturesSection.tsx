import {
  Eye,
  Headphones,
  Layout,
  MessageCircle,
  Palette,
  Smartphone,
} from "lucide-react";
import PurpleSection from "../layout/PurpleSection";
import SectionHeading from "../layout/SectionHeading";
import { imgFeaturePhone } from "./assets";

const features = [
  {
    icon: MessageCircle,
    title: "In-app chat",
    description: "Message support or connect with contacts directly whenever you need help.",
    side: "right" as const,
  },
  {
    icon: Layout,
    title: "Unlimited features",
    description: "Use budgets, transfers, insights, and activity tools without limits on essentials.",
    side: "left" as const,
  },
  {
    icon: Palette,
    title: "Awesome design",
    description: "Bold cards, crisp typography, and a consistent purple theme on every screen.",
    side: "left" as const,
  },
  {
    icon: Smartphone,
    title: "iOS & Android",
    description: "Download Appolly on your favorite platform and keep your experience in sync.",
    side: "right" as const,
  },
  {
    icon: Headphones,
    title: "24/7 support",
    description: "Real people are available around the clock to help you resolve issues quickly.",
    side: "bottom" as const,
  },
  {
    icon: Eye,
    title: "Retina-ready graphics",
    description: "Sharp icons, smooth gradients, and polished UI elements on every device.",
    side: "bottom" as const,
  },
];

function FeatureBlock({
  icon: Icon,
  title,
  description,
  align = "left",
}: {
  icon: typeof MessageCircle;
  title: string;
  description: string;
  align?: "left" | "right" | "center";
}) {
  return (
    <div
      className={
        align === "right"
          ? "text-right"
          : align === "center"
            ? "text-center"
            : "text-left"
      }
    >
      <Icon className={`mb-3 size-10 text-white ${align === "right" ? "ml-auto" : align === "center" ? "mx-auto" : ""}`} strokeWidth={1.5} />
      <h3 className="font-['Josefin_Sans',sans-serif] text-lg font-semibold uppercase text-white sm:text-[25px] sm:leading-[37.5px]">
        {title}
      </h3>
      <p className="mt-2 font-['Josefin_Sans',sans-serif] text-base leading-6 text-white/90">
        {description}
      </p>
    </div>
  );
}

export default function AppFeaturesSection() {
  const topFeatures = features.filter((f) => f.side === "left" || f.side === "right");
  const bottomFeatures = features.filter((f) => f.side === "bottom");

  return (
    <PurpleSection id="features">
      <SectionHeading
        light
        title="App features"
        description="Explore the screens that make Appolly powerful—dashboard overviews, expense tracking, analytics, and profile tools designed for everyday use."
      />

      <div className="mt-12 hidden lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-8">
        <div className="flex flex-col gap-16">
          {topFeatures
            .filter((f) => f.side === "left")
            .map((f) => (
              <FeatureBlock key={f.title} {...f} align="right" />
            ))}
        </div>

        <div className="mx-auto w-[280px] shrink-0 overflow-hidden rounded-[40px] shadow-[40px_40px_100px_rgba(24,48,63,0.5)] xl:w-[375px]">
          <img src={imgFeaturePhone} alt="Appolly features preview on iPhone" className="w-full object-cover" />
        </div>

        <div className="flex flex-col gap-16">
          {topFeatures
            .filter((f) => f.side === "right")
            .map((f) => (
              <FeatureBlock key={f.title} {...f} align="left" />
            ))}
        </div>
      </div>

      <div className="mt-10 flex justify-center lg:hidden">
        <div className="w-[220px] overflow-hidden rounded-[32px] shadow-[20px_20px_60px_rgba(24,48,63,0.4)] sm:w-[280px]">
          <img src={imgFeaturePhone} alt="Appolly features preview on iPhone" className="w-full object-cover" />
        </div>
      </div>

      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:hidden">
        {topFeatures.map((f) => (
          <FeatureBlock key={f.title} {...f} align="center" />
        ))}
      </div>

      <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:mt-16">
        {bottomFeatures.map((f) => (
          <FeatureBlock key={f.title} {...f} align="center" />
        ))}
      </div>
    </PurpleSection>
  );
}
