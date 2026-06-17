import SectionContainer from "../layout/SectionContainer";
import SectionHeading from "../layout/SectionHeading";
import { imgBlog1, imgBlog2, imgBlog3 } from "./assets";

const posts = [
  {
    image: imgBlog1,
    title: "The Snap Pixel: How It Works and How to Install",
    excerpt:
      "Learn how tracking tools can help you understand user behavior and improve your app marketing strategy.",
  },
  {
    image: imgBlog2,
    title: "Global Partner Solutions: A Partnership of Innovation",
    excerpt:
      "Discover how strong product partnerships help mobile apps scale faster and deliver better experiences worldwide.",
  },
  {
    image: imgBlog3,
    title: "2026: An Opportunity for App Users to Start Fresh",
    excerpt:
      "A new year is the perfect time to reset your budget, organize payments, and build healthier financial habits with Appolly.",
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="w-full bg-white py-14 sm:py-20">
      <SectionContainer>
        <SectionHeading
          title="Our Recent Blog"
          description="Read the latest updates, product tips, and stories about building a smarter mobile finance experience with Appolly."
        />

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="overflow-hidden rounded-[10px] bg-white shadow-[0_1px_10px_rgba(0,0,0,0.1)]"
            >
              <img
                src={post.image}
                alt={post.title}
                className="aspect-[370/228] w-full object-cover"
              />
              <div className="p-5">
                <h3 className="font-['Josefin_Sans',sans-serif] text-lg font-semibold uppercase leading-snug text-[#232233] sm:text-xl">
                  {post.title}
                </h3>
                <p className="mt-3 font-['Josefin_Sans',sans-serif] text-base leading-6 text-[#6c6c72]">
                  {post.excerpt}
                </p>
                <a
                  href="#"
                  className="mt-5 inline-block font-['Josefin_Sans',sans-serif] text-lg font-semibold uppercase text-[#5851ea] underline underline-offset-4"
                >
                  Read more
                </a>
              </div>
            </article>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
