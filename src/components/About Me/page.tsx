import Link from "next/link";

export default function AboutMe() {
  return (
    <section className="relative border-y-2 bg-cover bg-[url('/Image/bg-02.jpg')] w-full text-center py-20 px-64 max-lg:px-0 max-sm:py-14 ">
      <div className="absolute bg-black-1 inset-0 opacity-85"></div>
      <div>
        <div className="relative text-center text-color-01 text-5xl pb-16 max-sm:pb-8 max-sm:text-4xl">
          <strong>About Me</strong>
        </div>
        <div className="relative text-start leading-8 text-white text-xl px-20 pb-8 max-sm:px-12 max-sm:text-lg max-lg:px-14 max-xl:px-0">
          <ul className="list-disc">
            <li className="pl-4 max-sm:pl-2">
              I am a dedicated front-end developer with a passion for crafting
              sleek and interactive web experiences. I have a strong command of
              HTML, CSS, JavaScript, TypeScript, and popular frameworks like
              Bootstrap, Tailwind, and Next.js. I thrive on bringing creative
              ideas to life, creating applications that not only look amazing
              but also perform flawlessly.
            </li>
            <br />
            <li className="pl-4 max-sm:pl-2">
              Currently, I&apos;m pursuing Pre-Engineering at Adamjee Government
              Science College. I constantly hone my development skills through
              personal projects and hands-on learning. Whether it&apos;s building
              responsive, eye-catching interfaces or deploying optimized apps on
              platforms like Vercel, I always aim to deliver clean, efficient,
              high-quality code in everything I do.
            </li>
          </ul>
        </div>
        <div className="relative py-8 text-center ">
          <Link
            href="/#Contact Us"
            className="text-color-01 text-lg border-2 rounded-3xl px-8 py-3 cursor-pointer hover:text-black hover:font-bold hover:bg-02"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}
