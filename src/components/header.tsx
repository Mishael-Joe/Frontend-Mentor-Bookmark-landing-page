"use client";

import Image from "next/image";
import { motion } from "framer-motion";

function Header() {
  return (
    <header className=" overflow-hidden">
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
          className="md:w-1/2 relative"
        >
          <Image
            src={`/illustration-hero.svg`}
            className="w-full h-full relative -z-10"
            width={300}
            height={200}
            alt="illustration-hero"
          />
          <div className="h-[80%] -right-6 lg:-right-60 w-[80%] lg:w-[120%] bottom-0 bg-Soft-Blue rounded-bl-[8rem] -z-20 absolute" />
        </motion.div>
      </motion.div>
    </header>
  );
}

export default Header;
