import React from "react";
import hero from "../../assets/hero.webp";

const Hero = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 md:mb-8 text-4xl text-[#333333] font-bold tracking-tight leading-15 md:leading-20 md:text-5xl xl:text-6xl dark:text-white">
              COMPLETE WEB DESIGN & DEVELOPMENT
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Say goodbye to sleepless nights over counterproductive
              communications between service providers, and no more
              overbilling-related nightmares for services you’re not sure you
              need but you’re sure you have to pay for.
            </p>
            <div className="flex gap-2">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 text-base text-white font-medium bg-[#00645f] text-center  rounded-4xl focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                view pricing
                <svg
                  className="w-5 h-5 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 text-base text-white font-medium bg-[#ec4f28] text-center  rounded-4xl focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                book a free consultation
              </a>
            </div>
          </div>
          <div className=" lg:mt-0 lg:col-span-5 lg:flex">
            <img src={hero} alt="mockup" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
