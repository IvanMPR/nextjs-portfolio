"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sling as Hamburger, Sling } from "hamburger-react";

export default function Navigation() {
  const pathname = usePathname();
  // pb-2 border-b-4
  return (
    <nav className=' flex items-center'>
      <ul className='hidden sm:hidden md:hidden lg:flex'>
        <li className='mr-8'>
          <Link
            href={"/"}
            className={` font-medium ${
              pathname === "/" ? " text-primaryColor" : ""
            }`}
          >
            <span className=''>01</span> Home
          </Link>
        </li>
        <li className='mr-8'>
          <Link
            href={"/about"}
            className={` font-medium ${
              pathname === "/about" ? "text-primaryColor" : ""
            }`}
          >
            <span className=''>02</span> About
          </Link>
        </li>
        <li className='mr-8'>
          <Link
            href={"/projects"}
            className={` font-medium ${
              pathname === "/projects" ? "text-primaryColor" : ""
            }`}
          >
            <span className=' '>03</span> Projects
          </Link>
        </li>
        <li className='mr-8'>
          <Link
            href={"/contact"}
            className={` font-medium ${
              pathname === "/contact" ? "text-primaryColor" : ""
            }`}
          >
            <span className=''>04</span> Contact
          </Link>
        </li>
      </ul>
      <div className=' block bg-bgOffsetColor dark:bg-bgOffsetColorDark rounded-full'>
        <Sling size={20} rounded />
      </div>
    </nav>
  );
}
// sm:block md:block lg:hidden // sling parent
