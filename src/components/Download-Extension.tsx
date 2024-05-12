"use client";

import Image from "next/image";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

function DownloadExtension() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.5,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  };

  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: 100 },
  };

  // useEffect(() => {
  //     console.log("Element is in view: ", isInView)
  // }, [isInView])

  return (
    <section>
      <div className="max-w-5xl mx-auto px-6">
        <div className=" text-center">
          <h1 className=" text-2xl font-semibold pt-20">
            Download the extension
          </h1>

          <p className=" text-Grayish-Blue py-6 md:w-1/2 mx-auto">
            We’ve got more browsers in the pipeline. Please do let us know if
            you’ve got a favourite you’d like us to prioritize.
          </p>
        </div>

        <motion.div
          initial="hidden"
          animate={mainControls}
          variants={list}
          ref={ref}
          className="flex flex-col gap-10 items-center lg:grid grid-cols-3 md:pt-10"
        >
          <motion.div
            variants={item}
            className="w-64 h-[22rem] sm:w-80 sm:h-96 rounded flex flex-col items-center justify-between shadow-xl"
          >
            <div className="h-1/2 flex items-center">
              <Image
                src={`/logo-chrome.svg`}
                width={100}
                height={100}
                alt="logo-chrome"
              />
            </div>

            <div className="h-1/2 text-center flex flex-col justify-between">
              <div className=" h-[35%]">
                <h1 className=" text-xl font-semibold">Add to Chrome</h1>
                <p className=" text-sm text-Grayish-Blue pt-2">
                  Minimum version 62
                </p>
              </div>

              <div className=" h-[60%] flex flex-col justify-between items-center py-4">
                <Image
                  src={`/bg-dots.svg`}
                  width={300}
                  height={100}
                  alt="logo-chrome"
                />
                <button className="cursor-pointer w-[90%] bg-Soft-Blue py-3 rounded text-white hover:text-Soft-Blue hover:bg-white hover:border hover:border-Soft-Blue transition-all delay-100">
                  Add & Install Extension
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={item}
            className="w-64 h-[22rem] sm:w-80 sm:h-96 rounded flex flex-col items-center justify-between shadow-xl lg:relative lg:-bottom-10"
          >
            <div className="h-1/2 flex items-center">
              <Image
                src={`/logo-firefox.svg`}
                width={100}
                height={100}
                alt="logo-chrome"
              />
            </div>

            <div className="h-1/2 text-center flex flex-col justify-between">
              <div className=" h-[35%]">
                <h1 className=" text-xl font-semibold">Add to Firefox</h1>
                <p className=" text-sm text-Grayish-Blue pt-2">
                  Minimum version 55
                </p>
              </div>

              <div className=" h-[60%] flex flex-col justify-between items-center py-4">
                <Image
                  src={`/bg-dots.svg`}
                  width={300}
                  height={100}
                  alt="logo-chrome"
                />
                <button className="cursor-pointer w-[90%] bg-Soft-Blue py-3 rounded text-white hover:text-Soft-Blue hover:bg-white hover:border hover:border-Soft-Blue transition-all delay-100">
                  Add & Install Extension
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={item}
            className="w-64 h-[22rem] sm:w-80 sm:h-96  rounded flex flex-col items-center justify-between shadow-xl lg:relative lg:-bottom-20"
          >
            <div className="h-1/2 flex items-center">
              <Image
                src={`/logo-Opera.svg`}
                width={100}
                height={100}
                alt="logo-chrome"
              />
            </div>

            <div className="h-1/2 text-center flex flex-col justify-between">
              <div className=" h-[35%]">
                <h1 className=" text-xl font-semibold">Add to Opera</h1>
                <p className=" text-sm text-Grayish-Blue pt-2">
                  Minimum version 46
                </p>
              </div>

              <div className=" h-[60%] flex flex-col justify-between items-center py-4">
                <Image
                  src={`/bg-dots.svg`}
                  width={300}
                  height={100}
                  alt="logo-chrome"
                />
                <button className="cursor-pointer w-[90%] bg-Soft-Blue py-3 rounded text-white hover:text-Soft-Blue hover:bg-white hover:border hover:border-Soft-Blue transition-all delay-100">
                  Add & Install Extension
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default DownloadExtension;
