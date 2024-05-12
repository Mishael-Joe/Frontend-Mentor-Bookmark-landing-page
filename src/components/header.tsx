"use client";

import Image from "next/image";
import { motion } from "framer-motion";

function Header() {
  return (
    <header className="">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            opacity: 0,
          },
          visible: {
            opacity: 1,
          },
        }}
        className="flex flex-col-reverse gap-6 items-center md:flex-row max-w-6xl mx-auto px-6 lg:pt-10"
      >
        <motion.div
          variants={{
            visible: {
              opacity: 1,
              x: 0,
            },
            hidden: {
              opacity: 0,
              x: -100,
            },
          }}
          className="md:w-1/2 md:text-left text-center"
        >
          <h1 className=" text-3xl font-semibold lg:text-5xl">
            A Simple Bookmark Manager
          </h1>

          <p className="text-Grayish-Blue py-4 lg:pr-6">
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>

          <div className="flex flex-row gap-4 py-4 justify-center md:justify-start z-10">
            <button className="py-4 px-4 bg-Soft-Blue text-white font-semibold rounded-lg cursor-pointer shadow-md hover:text-Soft-Blue hover:border hover:border-Soft-Blue hover:bg-white transition-all delay-100">
              Get it on Chrome
            </button>
            <button className=" font-semibold py-4 px-4 bg-Grayish-Blue/20 shadow-md cursor-pointer rounded-lg hover:border hover:bg-transparent hover:border-Grayish-Blue hover:text-Very-Dark-Blue transition-all delay-100">
              Get it on Firefox
            </button>
          </div>
        </motion.div>

        <motion.div
          variants={{
            visible: {
              opacity: 1,
              x: 0,
            },
            hidden: {
              opacity: 0,
              x: 100,
            },
          }}
          className="md:w-1/2"
        >
          <Image
            src={`/illustration-hero.svg`}
            className="w-full h-full"
            width={300}
            height={200}
            alt="illustration-hero"
          />
        </motion.div>
      </motion.div>

      <div className="h-[35%] top-28 11screen:top-32 22screen:h-[40%] 44screen:h-[50%] 55screen:h-[55%] 66screen:h-[65%] w-[80vw] md:h-[40%] md:w-[40%] right-0 bg-Soft-Blue rounded-bl-[8rem] -z-10 absolute lg:h-[55%] lg:top-44" />
    </header>
  );
}

export default Header;
