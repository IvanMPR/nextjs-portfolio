"use client";
import Link from "next/link";

export default function SideMenu({ setIsOpen, pathname }) {
  return (
    <div className='relative'>
      <div className='fixed top-0 right-0 left-0 bottom-0  bg-bgColor dark:bg-bgColorDark bg-opacity-95 z-50 flex flex-col items-center justify-center lg:hidden animate-slideIn '>
        <ul className='flex flex-col items-end space-y-8 text-textColor dark:text-textColorDark text-lg'>
          <li>
            <Link
              href={"/"}
              className={`pb-[6px] font-medium ${
                pathname === "/"
                  ? "active text-primaryColor dark:text-primaryColorDark"
                  : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              <span className=''>01</span> Home
            </Link>
          </li>
          <li>
            <Link
              href={"/about"}
              className={`pb-[6px] font-medium ${
                pathname === "/about"
                  ? "active text-primaryColor dark:text-primaryColorDark"
                  : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              <span className=''>02</span> About
            </Link>
          </li>
          <li>
            <Link
              href={"/projects"}
              className={`pb-[6px] font-medium ${
                pathname === "/projects"
                  ? "active text-primaryColor dark:text-primaryColorDark"
                  : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              <span className=' '>03</span> Projects
            </Link>
          </li>
          <li>
            <Link
              href={"/contact"}
              className={`pb-[6px] font-medium ${
                pathname === "/contact"
                  ? "active text-primaryColor dark:text-primaryColorDark"
                  : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              <span className=''>04</span> Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
