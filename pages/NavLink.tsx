import React from "react";
import Link from "next/link";

interface Props {
  href: string;
  children: React.ReactNode;
}

const NavLink = ({ href, children }: Props) => {
  return (
    <div className="nav-link">
      <Link href={href}>{children}</Link>
    </div>
  );
};

export default NavLink;
