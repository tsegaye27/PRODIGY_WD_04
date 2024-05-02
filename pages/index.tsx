import About from "@/components/About";
import Hero from "@/components/Hero";
import MobileNav from "@/components/MobileNav";
import Nav from "@/components/Nav";
import Services from "@/components/Services";
import React, { useState } from "react";

const HomePage = () => {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  return (
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
        </div>
      </div>
    </div>
  );
};

export default HomePage;
