"use client";

import Link from "next/link";

export interface ILinkMenu {
  path: string; // url should be follow Link href attribute style ex) "/about"
  rePath: RegExp;
  item: React.ReactNode;  
}

export interface NavBarProps {
  linkMenus: ILinkMenu[];
  className?: string;
}

const NavBar = ({
  linkMenus,
  className,
}: NavBarProps) => {
  return (
    <nav className={className}>
      {
        linkMenus.map((value, index) => (
          <Link
            href={value.path}
            key={index}
          >
            {value.item}
          </Link>
        ))
      }
    </nav>
  )
}

export default NavBar;
