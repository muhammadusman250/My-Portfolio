import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <section
      className="relative bg-[url('/Image/bg-04.png')] w-full bg-cover"
      id="Projects"
    >
      <div className="absolute bg-black-1 opacity-85 inset-0"></div>
      <div className="relative py-20 max-sm:px-0 max-lg:py-10 mx-auto">
        <div className="text-center text-color-01 text-5xl font-bold max-sm:text-4xl">
          My Projects
        </div>
        <div className="justify-center flex py-20">
          <div className="grid grid-cols-3 gap-24 max-2xl:grid-cols-2 max-xl:gap-20 max-lg:grid-cols-1">
            <div className="border-4 border-l-cyan-400 border-r-sky-600 border-t-green-700 border-b-teal-700 w-96 rounded-3xl hover:scale-110 duration-300 max-lg:w-3/5 max-lg:mx-auto max-sm:w-full max-sm:border-l-0 max-sm:border-r-0 max-sm:rounded-none max-lg:p-3">
              <Image
                src="/Image/My-project-01.png"
                width="2500"
                height="2500"
                alt="My Project"
                className="object-cover opacity-90 rounded-t-3xl"
              />
              <div className="text-center font-bold text-2xl py-4 text-white drop-shadow-lg">
                Landing Page
              </div>
              <div className="text-center text-sm text-white drop-shadow-lg px-5 max-sm:px-1">
                <span className="font-bold text-lg">Description:</span>
                <br /> This project is a sleek and responsive landing page
                crafted to capture user interest and effectively present
                essential information about a product or service. It features a
                compelling hero section with an attention-grabbing
                call-to-action button, visually engaging images, and smooth
                scrolling effects. Utilizing modern web technologies such as
                HTML, CSS, and JavaScript, this landing page ensures a seamless
                user experience across all devices, making it a perfect showcase
                for any product or service.
              </div>
              <div className="py-8 text-center ">
                <Link
                  href="https://prodigy-wd-01-topaz.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-color-01 text-lg border-2 rounded-3xl px-8 py-3 cursor-pointer hover:text-black hover:font-bold hover:bg-02"
                >
                  Visit Site
                </Link>
              </div>
            </div>

            <div className="border-4 border-l-cyan-400 border-r-sky-600 border-t-green-700 border-b-teal-700 w-96 rounded-3xl hover:scale-110 duration-300 max-lg:w-3/5 max-lg:mx-auto max-sm:w-full max-sm:border-l-0 max-sm:border-t-0 max-sm:border-r-0 max-sm:rounded-none max-lg:p-3">
              <Image
                src="/Image/My-project-02.png"
                width="2500"
                height="2500"
                alt="My Project"
                className="object-cover opacity-90 rounded-t-3xl"
              />
              <div className="text-center font-bold text-2xl py-4 text-white drop-shadow-lg">
                Resume Builder
              </div>
              <div className="text-center text-sm text-white drop-shadow-lg px-5 max-sm:px-1">
                <span className="font-bold text-lg">Description:</span>
                <br /> The Resume Generator is an intuitive web application that
                streamlines the process of creating professional resumes. Users
                can easily input their personal details, education, work
                experience, and skills through a user-friendly interface. The
                application dynamically generates a polished resume that can be
                downloaded in PDF format, offering a hassle-free solution for
                job seekers. This project highlights my skills in form handling,
                data manipulation, and output generation while delivering a
                clean and efficient user experience.
              </div>
              <div className="py-8 text-center ">
                <Link
                  href="https://giaic-hackathon-project.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-color-01 text-lg border-2 rounded-3xl px-8 py-3 cursor-pointer hover:text-black hover:font-bold hover:bg-02"
                >
                  Visit Site
                </Link>
              </div>
            </div>

            <div className="border-4 border-l-cyan-400 border-r-sky-600 border-t-green-700 border-b-teal-700 w-96 rounded-3xl hover:scale-110 duration-300 max-lg:w-3/5 max-lg:mx-auto max-sm:w-full max-sm:border-l-0 max-sm:border-r-0 max-sm:border-t-0 max-sm:border-b-0 max-sm:rounded-none max-lg:p-3">
              <Image
                src="/Image/My-project-03.png"
                width="2500"
                height="2500"
                alt="My Project"
                className="object-cover opacity-90 rounded-t-3xl"
              />
              <div className="text-center font-bold text-2xl py-4 text-white drop-shadow-lg">
                Tic-Tac-Toe Game
              </div>
              <div className="text-center text-sm text-white drop-shadow-lg px-5 max-sm:px-1">
                <span className="font-bold text-lg">Description:</span>
                <br />
                This project features a classic Tic-Tac-Toe game developed as a
                web application, allowing users to play against a computer
                opponent. The game includes an interactive grid and smooth
                animation effects for an immersive experience. Built with
                JavaScript, this project showcases my ability to implement game
                logic, manage application state, and create an engaging user
                experience that is both fun and challenging.
              </div>
              <div className="py-8 text-center ">
                <Link
                  href="https://tic-tac-toe-game-blond-pi.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-color-01 text-lg border-2 rounded-3xl px-8 py-3 cursor-pointer hover:text-black hover:font-bold hover:bg-02"
                >
                  Visit Site
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
