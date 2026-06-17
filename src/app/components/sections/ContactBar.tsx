import { Mail, Phone } from "lucide-react";
import SectionContainer from "../layout/SectionContainer";

export default function ContactBar() {
  return (
    <section className="relative z-10 -mb-16 w-full sm:-mb-20">
      <SectionContainer>
        <div className="grid gap-6 rounded-[30px] bg-white p-6 shadow-[0_1px_10px_rgba(0,0,0,0.1)] sm:grid-cols-2 sm:p-8 lg:gap-0 lg:divide-x lg:divide-[#6c6c72]/30">
          <div className="flex items-center gap-5 lg:pr-10">
            <div className="flex size-16 shrink-0 items-center justify-center rounded-full bg-[#5956E9] sm:size-20">
              <Mail className="size-8 text-white sm:size-9" />
            </div>
            <a
              href="mailto:Info@youremail.com"
              className="font-['Josefin_Sans',sans-serif] text-lg font-semibold text-[#232233] sm:text-[25px]"
            >
              Info@youremail.com
            </a>
          </div>

          <div className="flex items-center gap-5 lg:pl-10">
            <div className="flex size-16 shrink-0 items-center justify-center rounded-full bg-[#5956E9] sm:size-20">
              <Phone className="size-8 text-white sm:size-9" />
            </div>
            <a
              href="tel:+14805550103"
              className="font-['Josefin_Sans',sans-serif] text-lg font-semibold text-[#232233] sm:text-[25px]"
            >
              (480) 555-0103
            </a>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
