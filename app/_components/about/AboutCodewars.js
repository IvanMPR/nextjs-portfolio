import Image from "next/image";
import CodewarsBadge from "./CodewarsBadge";
import codewars2 from "@/public/codewars2.jpg";

export default function AboutCodewars({ addBorder }) {
  return (
    <div
      className={`w-full overflow-hidden relative h-full rounded-2xl  text-l md:text-normal  text-textColor dark:text-textColorDark  bg-bgColor dark:bg-bgColorDark ${
        addBorder
          ? "border-4 border-solid border-secondaryColor dark:border-secondaryColorDark p-5"
          : "p-2"
      }
          
      `}
      // p-10
    >
      <div
        className={` ${addBorder ? "flex" : "flex-col"} justify-between mb-4`}
      >
        <p className={`${addBorder ? "" : "mb-3"} text-normal`}>
          Codewars homepage with my current rank and achievements
        </p>
        <span className={`${addBorder ? "mr-14" : ""}`}>
          <CodewarsBadge />
        </span>
      </div>
      <Image src={codewars2} alt='codewars' />
    </div>
  );
}
