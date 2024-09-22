import Image from "next/image";
import PersonalInfo from "./PersonalInfo";
import mix from "@/public/mix.jpg";

export default function AboutPersonal({ addBorder }) {
  return (
    <div
      className={`w-full overflow-hidden relative h-full rounded-2xl  text-l md:text-sm text-textColor dark:text-textColorDark  bg-bgColor dark:bg-bgColorDark ${
        addBorder
          ? "border-4 border-solid border-primaryColor dark:border-primaryColorDark p-5"
          : ""
      }
          
       `}
      //  p-10
    >
      <div
        className={`${addBorder ? "flex" : "flex-col"} flex justify-between`}
      >
        <div
          className={`flex ${
            addBorder ? "w-1/2" : "w-full"
          } text-justify text-l md:text-sm`}
        >
          <PersonalInfo />
        </div>
        <div
          className={`${
            addBorder ? "w-[45%]" : "w-full"
          }  p-5 items-center justify-center `}
        >
          <Image src={mix} alt='mix' placeholder='blur' />
        </div>
      </div>
    </div>
  );
}
