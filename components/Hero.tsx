import { ArrowDownCircleIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="h-[88vh] bg-slate-700 bg-cover bg-center">
      <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
        <div>
          <h1 className="text-[35px] md:text-[50px] text-white font-bold">
            Hey, I am <span className="text-primary-400">Tsegaye!</span>
          </h1>
          <h2 className="text-[2rem] text-secondary-500 font-bold uppercase mt-[1rem]">
            Web Developer
          </h2>
          <p className="text-[#ffffff92] text-[18px] mt-[1.5rem]">
            I am a web developer with over 3 years of experience. I specialize
            in creating websites and web applications that are fast, responsive,
            and user-friendly. I am passionate about using the latest
            technologies to build high-quality websites that help businesses
            grow.
          </p>
          <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
            <button className="px-[2rem] hover:bg-primary-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-secondary-500 text-black flex items-center space-x-2">
              <p>Download CV</p>
              <ArrowDownCircleIcon className="w-[1.6rem] h-[1.7rem] text-black" />
            </button>
          </div>
        </div>
        <div className="w-[500px] hidden bg-secondary-500 relative lg:flex items-center rounded-full h-[500px]">
          <Image
            src="/images/u1.jpg"
            priority
            alt="user"
            layout="fill"
            sizes="500px"
            className="object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
