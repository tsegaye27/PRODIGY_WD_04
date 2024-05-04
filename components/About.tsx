import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ArrowDownCircleIcon, ArrowDownIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="about" className="bg-[#121121] pb-[3rem] pt-[4rem] md:pt-[8rem]">
      <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
        <div>
          <h1 className="text-[20px] font-bold uppercase text-secondary-500 mb-[1rem]">
            About Me
          </h1>
          <h2 className="text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-white">
            Getting to know <span className="text-primary-400">Me</span>
          </h2>
          <div className="mb-[3rem] flex items-center md:space-x-10">
            <span className="w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm"></span>
            <p className="text-[19px] text-slate-300">
              I am Tsegaye Talegngeta, a 4th-year software engineering student
              at Bahirdar Institute of Technology. As a web developer, I am
              passionate about creating robust and dynamic web applications.
              With a focus on continuous learning, I stay up-to-date with the
              latest trends and technologies in the field. I have a keen eye for
              design and user experience, and I believe in the power of
              well-crafted interfaces. Let us connect and collaborate on
              exciting projects.
            </p>
          </div>
          <div className="flex justify-center gap-[2rem]">
            <a href="https://github.com/tsegaye27" target="_blank">
              <Image
                src="/icons/github.svg"
                alt="github"
                priority
                width={50}
                height={50}
                className="w-[40px] h-[40px] text-white bg-primary-400 rounded-full p-[0.5rem] cursor-pointer"
              />
            </a>
            <a
              href="https://linkedin.com/in/tsegaye-talegngeta27"
              target="_blank"
            >
              <Image
                src="/icons/linkedin.svg"
                alt="github"
                priority
                width={50}
                height={50}
                className="w-[40px] h-[40px] text-white bg-primary-400 rounded-full p-[0.5rem] cursor-pointer"
              />
            </a>
          </div>
        </div>
        <div className="lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative">
          <Image
            src="/images/about.jpg"
            alt="user"
            priority
            layout="fill"
            objectFit="contain"
            className="relative z-[11] w-[100%] h-[100%]"
          />
          <div className="absolute w-[100%] h-[100%] z-[10] bg-secondary-500 top-[-2rem] right-[-2rem]"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
