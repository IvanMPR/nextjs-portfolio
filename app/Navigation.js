"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();
  // pb-2 border-b-4
  return (
    <nav className='  '>
      <ul className=' flex'>
        <li className={`mr-8   `}>
          <Link
            href={"/"}
            className={` ${pathname === "/" ? " text-rose-500" : ""}`}
          >
            <span className=' '>01</span> Home
          </Link>
        </li>
        <li className={`mr-8   `}>
          <Link
            href={"/about"}
            className={` ${pathname === "/about" ? " text-rose-500" : ""}`}
          >
            <span className=' '>02</span> About
          </Link>
        </li>
        <li className={`mr-8 `}>
          <Link
            href={"/projects"}
            className={`${pathname === "/projects" ? " text-rose-500" : ""}`}
          >
            <span className=' '>03</span> Projects
          </Link>
        </li>
        <li className={`mr-8   `}>
          <Link
            href={"/contact"}
            className={`${pathname === "/contact" ? " text-rose-500" : ""}`}
          >
            <span className=''>04</span> Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
{
  /* <li className={`mr-8   ${pathname === "/contact" ? "active" : ""}`}>
<Link href={"/contact"}>
  <span className=''>04</span> Contact
</Link>
</li> */
}
