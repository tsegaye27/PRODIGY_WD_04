import React from "react";
import { useRouter } from "next/router";

interface Props {
  href: string;
  children: React.ReactNode;
}

const NavLink = ({ href, children }: Props) => {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    setTimeout(() => {
      router.push(href);
    }, 300);
  };

  return (
    <div className="nav-link">
      <a href={href} onClick={handleClick}>
        {children}
      </a>
    </div>
  );
};

export default NavLink;
