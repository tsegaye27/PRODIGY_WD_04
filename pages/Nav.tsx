import { Bars3Icon } from "@heroicons/react/20/solid";
import React from "react";
import NavLink from "./NavLink";

interface Props {
  onOpenNav: () => void;
}

const Nav = ({ onOpenNav }: Props) => {
  return (
    <div className="w-[100%] fixed z-[10000] top-0 h-[10vh] transition-all duration-300 bg-[#141c27] shadow-md">
      <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
        <h1 className="flex-[0.6] cursor-pointer text-[25px] text-white font-bold">
          Tsegaye
          <span className="text-primer-300">Talegn</span>
        </h1>
        <NavLink href="#home">Home</NavLink>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#services">Services</NavLink>
        <NavLink href="#projects">Projects</NavLink>
        <NavLink href="#contact">Contact</NavLink>
        <div onClick={onOpenNav}>
          <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-primer-300"></Bars3Icon>
        </div>
      </div>
    </div>
  );
};

export default Nav;
