import React from "react";

interface Props {
  skillOne: string;
  skillTwo: string;
  skillThree: string;
  levelOne: string;
  levelTwo: string;
  levelThree: string;
}

const SkillLanguage = ({
  skillOne,
  skillTwo,
  skillThree,
  levelOne,
  levelTwo,
  levelThree,
}: Props) => {
  return (
    <div>
      <div className="relative mb-[3rem]">
        <h1 className="p-5 w-[100%] uppercase bg-gray-800 rounded-sm text-white text-[20px] font-bold">
          {skillOne}
        </h1>
        <span
          className={`${levelOne} bottom-0 h-[6px] absolute bg-secondary-500`}
        ></span>
      </div>
      <div className="relative mb-[3rem]">
        <h1 className="p-5 w-[100%] uppercase bg-gray-800 rounded-sm text-white text-[20px] font-bold">
          {skillTwo}
        </h1>
        <span
          className={`${levelTwo} bottom-0 h-[6px] absolute bg-secondary-500`}
        ></span>
      </div>
      <div className="relative mb-[3rem]">
        <h1 className="p-5 w-[100%] uppercase bg-gray-800 rounded-sm text-white text-[20px] font-bold">
          {skillThree}
        </h1>
        <span
          className={`${levelThree} bottom-0 h-[6px] absolute bg-secondary-500`}
        ></span>
      </div>
    </div>
  );
};

export default SkillLanguage;
