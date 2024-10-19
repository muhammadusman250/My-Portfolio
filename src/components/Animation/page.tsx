"use client";

import Link from "next/link";
import { ReactTyped } from "react-typed";

export default function TypingAnimation() {
  return (
    <div className="py-8 text-color-01">
      <h1 className="text-3xl px-2 font-bold max-sm:text-xl max-lg:text-2xl">Hello !!</h1>
      <h1 className="text-5xl pb-5 font-bold max-sm:text-3xl max-lg:text-4xl">
        I&apos;m <span className="text-white">Muhammad Usman</span>
      </h1>
      <span className="text-4xl font-bold max-sm:text-2xl max-lg:text-3xl">I&apos;m a Passionate </span>
      <br/>
      <ReactTyped
        strings={["Front-End Developer.", "Web Developer.", "UI/UX Designer."]}
        className="text-white text-5xl font-bold max-sm:text-3xl max-lg:text-4xl"
        typeSpeed={50}
        backSpeed={30}
        loop
      />
      <h1 className="text-white text-2xl w-3/4 py-5 font-sans max-sm:text-lg max-sm:w-full max-lg:w-full">
        I am passionate about creating stunning web applications with a focus on
        responsive design, modern UI/UX, and clean code. Let's build something
        great together!
      </h1>
      <div className="py-8">
        <Link
          href="/#Contact Us"
          className="text-color-01 text-lg border-2 rounded-3xl px-8 py-3 cursor-pointer hover:text-black hover:font-bold hover:bg-02"
        >
          Contact Me 
        </Link>
      </div>
    </div>
  );
}
