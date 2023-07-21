"use client";

import Link from "next/link";

export interface ILinkMenu {
  path: string; // url should be follow Link href attribute style ex) "/about"
  item: React.ReactNode;  
}

export interface NavProps {
  linkMenus: ILinkMenu[];
  className?: string;
}

const Nav = ({
  linkMenus,
  className,
}: NavProps) => {
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

export default Nav;
