import Image from "next/image";
import Skills from "../components/Skills/page";
import AboutMe from "@/components/About Me/page";
import TypingAnimation from "@/components/Animation/page";
import Header from "@/components/Header/Header";
import Projects from "@/components/Projects/page";
import ContactForm from "@/components/Contact Us/page";

export default function Page() {
  return (
    <div>
      <section className="relative bg-[url('/Image/bg-01.png')] w-full bg-cover h-4/5 max-lg:h-auto">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <Header />
        <div className="flex justify-between items-center w-full p-9 max-lg:flex-col">
          <div className="flex justify-center w-3/4 h-full pl-10 pb-16 max-sm:p-0 max-lg:pb-0">
            <div className="relative w-96 h-96 max-sm:w-52 max-sm:h-52 max-lg:h-56 max-lg:w-56 max-xl:w-60 max-xl:h-60">
              <Image
                src="/Image/image dp.jpg"
                alt="Profile picture"
                fill
                className="rounded-full object-cover"
              />
            </div>
          </div>

          <div className="w-full relative my-20 max-xl:mx-auto max-lg:my-10">
            <TypingAnimation />
          </div>
        </div>
      </section>
      <AboutMe />
      <Skills />
      <Projects />
      <ContactForm />
    </div>
  );
}
