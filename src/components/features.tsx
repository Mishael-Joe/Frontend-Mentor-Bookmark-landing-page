"use client";

import Image from "next/image";
import React, { Fragment, useState } from "react";

const SimpleBookmarking: React.FC = () => (
  <div className=" text-center md:text-left pt-20 md:pt-10 flex flex-col items-center gap-4 md:gap-10 md:justify-between md:flex-row">
    <div className="flex justify-center md:w-1/2">
      <Image
        src={`/illustration-features-tab-1.svg`}
        className="22screen:w-[80%] md:w-[95%]"
        width={300}
        height={200}
        alt="illustration-hero"
      />
    </div>

    <div className="pt-20 md:pt-0 md:w-[40%]">
      <h1 className=" text-2xl font-semibold ">Bookmark in one click</h1>

      <p className=" text-Grayish-Blue py-6">
        Organize your bookmarks however you like. Our simple drag-and-drop
        interface gives you complete control over how you manage your favourite
        sites.
      </p>

      <button className="cursor-pointer bg-Soft-Blue hover:text-Soft-Blue hover:bg-white hover:border hover:border-Soft-Blue transition-all delay-100 p-2 px-4 text-white rounded">
        More Info
      </button>
    </div>
  </div>
);

const SpeedySearching: React.FC = () => (
  <div className=" text-center md:text-left pt-20 md:pt-10 flex flex-col items-center gap-4 md:gap-10 md:justify-between md:flex-row">
    <div className="flex justify-center md:w-1/2">
      <Image
        src={`/illustration-features-tab-2.svg`}
        className="22screen:w-[80%] md:w-[95%]"
        width={300}
        height={200}
        alt="illustration-hero"
      />
    </div>

    <div className="pt-20 md:pt-0 md:w-[40%]">
      <h1 className="text-2xl font-semibold">Intelligent search</h1>

      <p className=" text-Grayish-Blue py-6">
        Our powerful search feature will help you find saved sites in no time at
        all. No need to trawl through all of your bookmarks.
      </p>

      <button className="cursor-pointer bg-Soft-Blue hover:text-Soft-Blue hover:bg-white hover:border hover:border-Soft-Blue transition-all delay-10 p-2 px-4 text-white rounded">
        More Info
      </button>
    </div>
  </div>
);

const EasySharing: React.FC = () => (
  <div className=" text-center md:text-left pt-20 md:pt-10 flex flex-col items-center gap-4 md:gap-10 md:justify-between md:flex-row">
    <div className="flex justify-center md:w-1/2">
      <Image
        src={`/illustration-features-tab-3.svg`}
        className="22screen:w-[80%] md:w-[95%]"
        width={300}
        height={200}
        alt="illustration-hero"
      />
    </div>

    <div className="pt-20 md:pt-0 md:w-[40%]">
      <h1 className="text-2xl font-semibold">Share your bookmarks</h1>

      <p className=" text-Grayish-Blue py-6">
        Easily share your bookmarks and collections with others. Create a
        shareable link that you can send at the click of a button.
      </p>

      <button className="cursor-pointer bg-Soft-Blue hover:text-Soft-Blue hover:bg-white hover:border hover:border-Soft-Blue transition-all delay-100 p-2 px-4 text-white rounded">
        More Info
      </button>
    </div>
  </div>
);

const FeaturesTabs: React.FC = () => {
  const [switchTab, setSwitchTab] = useState<number>(0);

  const handleSwitch = (state: number) => {
    setSwitchTab(state);
  };

  return (
    <Fragment>
      <div className="w-full">
        <ul className="w-full flex flex-col items-center md:flex-row">
          <li
            className={`${
              switchTab === 0 && `md:border-b-[3px] md:border-Soft-Red`
            } w-full border-t md:border-t-transparent md:border-b border-Grayish-Blue text-center`}
          >
            <button
              className={
                switchTab === 0
                  ? `border-b-[3px] border-Soft-Red md:border-b-transparent md h-14 font-semibold hover:text-Soft-Red transition-all delay-100`
                  : `h-14 text-Grayish-Blue hover:text-Soft-Red transition-all delay-100`
              }
              onClick={() => handleSwitch(0)}
            >
              Simple Bookmarking
            </button>
          </li>

          <li
            className={`${
              switchTab === 1 && `md:border-b-[3px] md:border-Soft-Red`
            } w-full border-t md:border-t-transparent md:border-b border-Grayish-Blue text-center`}
          >
            <button
              className={
                switchTab === 1
                  ? `border-b-[3px] border-Soft-Red md:border-b-transparent h-14 font-semibold hover:text-Soft-Red transition-all delay-100`
                  : `h-14 text-Grayish-Blue hover:text-Soft-Red transition-all delay-100`
              }
              onClick={() => handleSwitch(1)}
            >
              Speedy Searching
            </button>
          </li>

          <li
            className={`${
              switchTab === 2 && `md:border-b-[3px] md:border-Soft-Red`
            } w-full border-t md:border-t-transparent border-Grayish-Blue border-b text-center`}
          >
            <button
              className={
                switchTab === 2
                  ? `border-b-[3px] border-Soft-Red md:border-b-transparent h-14 font-semibold hover:text-Soft-Red transition-all delay-100`
                  : `h-14 text-Grayish-Blue hover:text-Soft-Red transition-all delay-100`
              }
              onClick={() => handleSwitch(2)}
            >
              Easy Sharing
            </button>
          </li>
        </ul>
      </div>

      {switchTab === 0 && <SimpleBookmarking />}
      {switchTab === 1 && <SpeedySearching />}
      {switchTab === 2 && <EasySharing />}
    </Fragment>
  );
};

function Features() {
  return (
    <section className="relative">
      <div className="max-w-5xl mx-auto px-6">
        <div className=" text-center">
          <h1 className=" text-2xl font-semibold pt-20">Features</h1>

          <p className=" text-Grayish-Blue py-6 lg:w-[28rem] mx-auto">
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
        </div>

        <FeaturesTabs />
      </div>

      <div className="h-[20%] left-0 bottom-52 33screen:w-[60%] 33screen:h-[25%] 55screen: 66screen: w-[80vw] md:w-[40%] bg-Soft-Blue rounded-br-[8rem] -z-10 absolute md:-bottom-14 md:h-[50%]" />
    </section>
  );
}

export default Features;
