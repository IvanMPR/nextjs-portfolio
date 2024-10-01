"use client";

import Link from "next/link";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Sling as Hamburger } from "hamburger-react";
import SideMenu from "./SideMenu";

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=' flex items-center justify-center min-h-12'>
      <ul className='hidden sm:hidden md:hidden lg:flex'>
        <li className='mr-8 '>
          <Link
            href={"/"}
            className={` pb-[5px] font-medium ${
              pathname === "/" ? " active" : ""
            }`}
          >
            <span className=''>01</span> Home
          </Link>
        </li>
        <li className='mr-8'>
          <Link
            href={"/about"}
            className={` pb-[5px] font-medium ${
              pathname === "/about" ? "active" : ""
            }`}
          >
            <span className=''>02</span> About
          </Link>
        </li>
        <li className='mr-8'>
          <Link
            href={"/projects"}
            className={` pb-[5px] font-medium ${
              pathname === "/projects" ? "active" : ""
            }`}
          >
            <span className=' '>03</span> Projects
          </Link>
        </li>
        <li>
          <Link
            href={"/contact"}
            className={` pb-[5px] font-medium ${
              pathname === "/contact" ? "active" : ""
            }`}
          >
            <span className=''>04</span> Contact
          </Link>
        </li>
      </ul>
      <div className=' rounded-full sm:block md:block lg:hidden hover:bg-bgOffsetColor hover:dark:bg-bgOffsetColorDark cursor-pointer transition-all'>
        <Hamburger
          size={20}
          rounded
          onToggle={toggled => setIsOpen(toggled)}
          toggled={isOpen}
        />
      </div>
      {isOpen && <SideMenu setIsOpen={setIsOpen} pathname={pathname} />}
    </nav>
  );
}
