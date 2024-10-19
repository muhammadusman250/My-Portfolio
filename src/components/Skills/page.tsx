import Image from "next/image";

export default function Skills() {
  return (
    <section className="relative bg-[url('/Image/bg-03.jpg')] w-full bg-cover py-32 px-56 border-y-2 max-lg:px-12 max-sm:py-10 max-xl:px-24" id="Skills">
      <div className="absolute bg-black-1 opacity-85 inset-0"></div>
      <div>
        <p className="relative text-color-01 text-center text-5xl pb-10 max-sm:pb-2 max-sm:text-4xl" >
          <strong>Skills</strong>
        </p>
        <div className="relative brightness-125 flex justify-center py-10">
          <div className="grid grid-cols-4 gap-32 max-sm:gap-8 max-sm:grid-cols-3 max-lg:gap-16 max-xl:gap-20">
            <Image
              src="/Image/icon1.png"
              alt="HTML icon"
              width={120}
              height={120}
              className="rounded-full object-cover hover:scale-125 duration-300"
            />
            <Image
              src="/Image/icon2.png"
              alt="CSS icon"
              width={120}
              height={120}
              className="rounded-full object-cover hover:scale-125 duration-300"
            />
            <Image
              src="/Image/icon3.png"
              alt="JavaScript icon"
              width={120}
              height={120}
              className="rounded-full object-cover hover:scale-125 duration-300"
            />
            <Image
              src="/Image/icon4.png"
              alt="React icon"
              width={120}
              height={120}
              className="rounded-full object-cover hover:scale-125 duration-300"
            />
            <Image
              src="/Image/icon5.png"
              alt="Next.js icon"
              width={120}
              height={120}
              className="rounded-full object-cover hover:scale-125 duration-300"
            />
            <Image
              src="/Image/icon6.png"
              alt="Tailwind icon"
              width={120}
              height={120}
              className="rounded-full object-cover hover:scale-125 duration-300"
            />
            <Image
              src="/Image/icon7.png"
              alt="TypeScript icon"
              width={120}
              height={120}
              className="rounded-full object-cover hover:scale-125 duration-300"
            />
            <Image
              src="/Image/icon8.png"
              alt="Bootstrap icon"
              width={120}
              height={120}
              className="rounded-full object-cover hover:scale-125 duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
