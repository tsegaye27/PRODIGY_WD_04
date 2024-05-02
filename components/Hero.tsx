import React from "react";

const Hero = () => {
  return (
    <div className="h-[88vh] bg-slate-700 bg-cover bg-center">
      <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
        <h1 className="text-[35px] md:text-[50px] text-white font-bold">
          Hey, I am <span className="text-yellow-400">Tsegaye!</span>
        </h1>
      </div>
    </div>
  );
};

export default Hero;
