import Image from "next/image";

import CVButton from "./CVButton";
import ResumePunchline from "./ResumePunchline";

import IvanCLP from "@/public/IvanCLP.png";
export default function AboutGeneral({ addBorder }) {
  return (
    <div
      className={`w-full overflow-hidden relative h-full rounded-2xl p-5 text-l md:text-sm  text-textColor dark:text-textColorDark  bg-bgColor dark:bg-bgColorDark ${
        addBorder
          ? "flex border-4 border-solid border-primaryColor dark:border-primaryColorDark"
          : ""
      }
          
      `}
      // p-10
    >
      <div className={`${addBorder ? "w-1/2" : "w-full"}`}>
        <div className='w-full'>
          <p className='  text-justify mb-5'>
            Hello and welcome, I&apos;m Ivan Miceta, self taught web developer,
            located in Belgrade, Serbia. In this section you can get familiar
            with my developer skills, resources I used while learning and
            detailed biography.
          </p>
          <p className='  text-justify mb-5'>
            In the spring of 2020, I decided to invest time end effort to start
            learning web development. That road was hard, sometimes painful, and
            just one simple thing kept me moving forward.
          </p>
          <p className='  text-justify mb-5'>I fell in love with coding.</p>
          <p className='  text-justify mb-5'>
            The joy and satisfaction felt when I solved &apos;FizzBuzz&apos;
            challenge, when my first project appeared &apos;live&apos; on
            Github, or when I solved first CodeWars &apos;kata&apos;, was
            overwhelming and contagious.
          </p>
          <p className='  text-justify mb-5'>
            It superseded, by far, all frustrations, disappointments, doubts and
            obstacles that are present and inevitable when trying to learn such
            a complex and vast topic such as a programming language.
          </p>
          <p className='  text-justify mb-8'>
            I sincerely hope that after reviewing this portfolio, you will find
            my time well spent and my current skills level adequate for your
            needs. Looking forward to hear from you...
          </p>
        </div>
        <div className='w-full'>
          <CVButton />
        </div>
      </div>
      <div
        className={`flex flex-col ${
          addBorder ? "w-1/2" : "w-full"
        } items-center`}
      >
        <div className={`${addBorder ? "w-1/2" : "w-full mt-5"} `}>
          <span title="Ivan's photo" className='inline-block mb-4'>
            <Image src={IvanCLP} alt="Ivan's photo" placeholder='blur' />
          </span>
        </div>
        <div className='border-2 border-solid  border-secondaryColor p-3 rounded-2xl ml-3'>
          <ResumePunchline />
        </div>
      </div>
    </div>
  );
}
