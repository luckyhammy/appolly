import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import SectionContainer from "../layout/SectionContainer";
import SectionHeading from "../layout/SectionHeading";
import { imgProfile1, imgProfile2, imgProfile3 } from "./assets";

const team = [
  {
    name: "Carla Press",
    role: "App Developer",
    image: imgProfile1,
    bio: "Carla leads mobile development and keeps Appolly fast, secure, and reliable on every device.",
  },
  {
    name: "Craig Gouse",
    role: "UI/UX Designer",
    image: imgProfile2,
    bio: "Craig shapes the visual language behind Appolly’s clean screens, icons, and user-friendly flows.",
  },
  {
    name: "Jocelyn Septimus",
    role: "Product Engineer",
    image: imgProfile3,
    bio: "Jocelyn builds the features that connect payments, profiles, and insights into one smooth experience.",
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="w-full bg-white py-14 sm:py-20">
      <SectionContainer>
        <SectionHeading
          title="Our Creative Team"
          description="Meet the people behind Appolly—the designers, developers, and product specialists bringing a smarter finance app to your pocket."
        />

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {team.map((member) => (
            <article
              key={member.name}
              className="flex flex-col items-center rounded-[10px] bg-white px-6 pb-8 pt-10 text-center shadow-[0_1px_10px_rgba(0,0,0,0.1)]"
            >
              <div className="relative mb-6">
                <div className="absolute inset-0 rounded-full border-4 border-[#5956E9]/30" />
                <img
                  src={member.image}
                  alt={member.name}
                  className="relative size-36 rounded-full object-cover sm:size-44"
                />
              </div>
              <h3 className="font-['Josefin_Sans',sans-serif] text-2xl font-bold uppercase text-[#232233] sm:text-[31.25px]">
                {member.name}
              </h3>
              <p className="mt-2 font-['Josefin_Sans',sans-serif] text-lg font-semibold uppercase text-[#6c6c72]">
                {member.role}
              </p>
              <p className="mt-4 font-['Josefin_Sans',sans-serif] text-base leading-6 text-[#6c6c72]">
                {member.bio}
              </p>
              <div className="mt-6 flex items-center gap-5 text-[#6c6c72]">
                <Facebook className="size-5 cursor-pointer hover:text-[#5956E9]" />
                <Instagram className="size-5 cursor-pointer hover:text-[#5956E9]" />
                <Twitter className="size-5 cursor-pointer hover:text-[#5956E9]" />
                <Youtube className="size-5 cursor-pointer hover:text-[#5956E9]" />
              </div>
            </article>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
