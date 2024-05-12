"use client";

import { useState } from "react";

function Contact() {
  const [email, setEmail] = useState<string>("");
  const [errmsg, setErrmsg] = useState<boolean>(false);

  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (!email.includes("@")) {
      setErrmsg(true);
    } else {
      setErrmsg(false);
    }
  };

  return (
    <section className=" bg-Soft-Blue h-80 flex flex-col items-center justify-center w-full">
      <div className=" text-white flex flex-col items-center max-w-5xl mx-auto px-6">
        <p>35,000+ already joined</p>
        <p className=" text-xl text-center pt-3 font-semibold lg:text-4xl lg:w-96">
          Stay up-to-date with what we&apos;re doing
        </p>

        <div className="w-full flex flex-col gap-4 mt-5 sm:flex-row">
          <div
            className={`${
              errmsg &&
              `h-[70px] bg-Soft-Red outline outline-Soft-Red rounded-md`
            } relative`}
          >
            <input
              type="email"
              placeholder="Enter your Email Address"
              className="w-full rounded h-12 px-4 py-2 outline-none text-Very-Dark-Blue sm:w-80 focus:border focus:border-Soft-Red"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />

            {errmsg && (
              <div className=" absolute right-3 top-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                  <g fill="none" fill-rule="evenodd">
                    <circle cx="10" cy="10" r="10" fill="#FA5959" />
                    <g fill="#FFF" transform="translate(9 5)">
                      <rect width="2" height="7" rx="1" />
                      <rect width="2" height="2" y="8" rx="1" />
                    </g>
                  </g>
                </svg>
              </div>
            )}

            {errmsg && (
              <p className=" italic pl-4 text-sm font-semibold">
                whoops, make sure it&apos;s an email
              </p>
            )}
          </div>

          <button
            type="submit"
            className=" cursor-pointer bg-Soft-Red p-3 rounded w-full sm:w-28 hover:text-Soft-Red hover:bg-white hover:border-Soft-Red hover:border h-12"
            onClick={(e: any) => handleSubmit(e)}
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
