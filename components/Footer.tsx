import {
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  MapIcon,
} from "@heroicons/react/20/solid";
import React from "react";

const Footer = () => {
  return (
    <div id="contact" className="pt-[8rem] pb-[4rem] bg-[#02050a]">
      <div className="grid border-b-[1px] pb-[6rem] border-gray-400 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 w-[80%] mx-auto gap-[3rem]">
        <div className="flex items-center space-x-6">
          <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-primary-400">
            <MapIcon className="md:w-[5rem] md:h-[5rem] w-[3rem] h-[3rem] text-black" />
          </div>
          <div>
            <h1 className="text-[25px] mb-[0.2rem] font-semibold text-white">
              Address
            </h1>
            <p className="text-[16px] text-white opacity-60">
              Addis Ababa, Ethiopia
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-primary-400">
            <DevicePhoneMobileIcon className="md:w-[5rem] md:h-[5rem] w-[3rem] h-[3rem] text-black" />
          </div>
          <div>
            <h1 className="text-[25px] mb-[0.2rem] font-semibold text-white">
              Phone
            </h1>
            <p className="text-[16px] text-white opacity-60">+251 991859000</p>
            <p className="text-[16px] text-white opacity-60">+251 799129041</p>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-primary-400">
            <EnvelopeIcon className="md:w-[5rem] md:h-[5rem] w-[3rem] h-[3rem] text-black" />
          </div>
          <div>
            <h1 className="text-[25px] mb-[0.2rem] font-semibold text-white">
              Social Media
            </h1>
            <a
              href="https://github.com/tsegaye27"
              target="_blank"
              className="text-[16px] text-white opacity-60 block"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/tsegaye-talegngeta27"
              target="_blank"
              className="text-[16px] text-white opacity-60 block"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="w-[80%] mt-[2rem] mx-auto flex items-center justify-center">
        <div className="text-[18px] mb-[2rem] md:mb-0 text-white opacity-20">
          Tsegaye Talegngeta | All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
