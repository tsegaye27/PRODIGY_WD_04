import React from "react";
import SkillsItem from "@/pages/SkillsItem";
import SkillLanguage from "@/pages/SkillLanguage";

const Skills = () => {
  return (
    <div className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]">
      <h1 className="heading">
        Education & <span className="text-primary-400">Skills</span>
      </h1>
      <div className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center">
        <div>
          <SkillsItem title="React Developer" year="2022-Present" />
          <SkillsItem title="MERN Stack Developer" year="2023-Present" />
          <SkillLanguage
            skillOne="HTML"
            skillTwo="CSS"
            skillThree="JavaScript"
            levelOne="w-[91%]"
            levelTwo="w-[88%]"
            levelThree="w-[80%]"
          />
        </div>
        <div>
          <SkillsItem title="Next Js Developer" year="2023-Present" />
          <SkillsItem title="Node Js Developer" year="2022-Present" />
          <SkillLanguage
            skillOne="React Js"
            skillTwo="Next Js"
            skillThree="TypeScript"
            levelOne="w-[81%]"
            levelTwo="w-[78%]"
            levelThree="w-[65%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
