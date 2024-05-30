import Head from "next/head";
import About from "./About";
import Footer from "./Footer";
import Hero from "./Hero";
import Nav from "./Nav";
import Projects from "./Projects";
import Services from "./Services";
import Skills from "./Skills";
import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";

type Props = {
  nav: boolean;
  onCloseNav: () => void;
};

const MobileNav = ({ nav, onCloseNav }: Props) => {
  const navAnimation = nav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div
      className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[1000000] bg-[#09101a]`}
    >
      <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
        <div className="nav-link-mobile">Home</div>
        <div className="nav-link-mobile">About</div>
        <div className="nav-link-mobile">Services</div>
        <div className="nav-link-mobile">Project</div>
        <div className="nav-link-mobile">Contact</div>
      </div>
      <div
        onClick={onCloseNav}
        className="absolute z-[1000000] cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-primary-400"
      >
        <XMarkIcon />
      </div>
    </div>
  );
};

const HomePage = () => {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  return (
    <>
      <Head>
        <title>TsegayeTalegn</title>
      </Head>
      <div className="overflow-x-hidden">
        <div>
          {/* Nav Section */}
          <MobileNav nav={nav} onCloseNav={closeNav} />
          <Nav onOpenNav={openNav} />

          {/* Hero Section */}
          <Hero />
          <div className="relative z-[30]">
            {/* About Section */}
            <About />
            {/* Services Section */}
            <Services />
            {/* Skills Section */}
            <Skills />
            {/* Projects Section */}
            <Projects />
            {/* Footer Section */}
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
