// "use client";
import Link from "next/link";

export default function Navigation() {
  return (
    <nav className=' bg-slate-400'>
      <ul>
        <li>
          <span>01</span> <Link href={"/home"} />
        </li>
        <li>
          <span>02</span> <Link href={"/about"} />
        </li>
        <li>
          <span>03</span> <Link href={"/projects"} />
        </li>
        <li>
          <span>04</span> <Link href={"/contact"} />
        </li>
      </ul>
    </nav>
  );
}
