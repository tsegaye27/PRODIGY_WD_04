import React from "react";

const Nav = () => {
  return (
    <div className="w-[100%] top-0 h-[12vh] bg-[#141c27] shadow-md">
      <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
        <h1 className="flex-[0.6] cursor-pointer text-[25px] text-white font-bold">
          WEB
          <span className="text-yellow-300">DEV</span>
        </h1>
        <div className="nav-link">Home</div>
        <div className="nav-link">Services</div>
        <div className="nav-link">About</div>
        <div className="nav-link">Project</div>
        <div className="nav-link">Contact</div>
      </div>
    </div>
  );
};

export default Nav;
