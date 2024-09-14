"use client";

import Image from "next/image";
import Link from "next/link";

import { Tabs } from "./ui/Tabs";
import PersonalInfo from "./about/PersonalInfo";
import codewars2 from "../../public/codewars2.jpg";
import CodewarsBadge from "./about/CodewarsBadge";
import certificate from "@/public/certificate.jpg";
import SkillBar from "./about/SkillBar";
import CVButton from "./about/CVButton";
export function TabsDemo() {
  const tabs = [
    {
      title: "General",
      value: "general",
      content: (
        <div className='w-full overflow-hidden relative h-full rounded-2xl p-10 text-l md:text-sm  text-textColor dark:text-textColorDark bg-gradient-to-br bg-bgColor dark:bg-bgColorDark border-4 border-solid border-primaryColor dark:border-primaryColorDark'>
          {/* <h3>General</h3> */}
          <p className=' w-[45%] text-justify mb-5'>
            Hello and welcome, I&apos;m Ivan Miceta, self taught web developer,
            located in Belgrade, Serbia. In this section you can get familiar
            with my developer skills, resources I used while learning and
            detailed biography.
          </p>
          <p className=' w-[45%] text-justify mb-5'>
            In the spring of 2020, I decided to invest time end effort to start
            learning web development. That road was hard, sometimes painful, and
            just one simple thing kept me moving forward.
          </p>
          <p className=' w-[45%] text-justify mb-5'>
            I fell in love with coding.
          </p>
          <p className=' w-[45%] text-justify mb-5'>
            The joy and satisfaction felt when I solved &apos;FizzBuzz&apos;
            challenge, when my first project appeared &apos;live&apos; on
            Github, or when I solved first CodeWars &apos;kata&apos;, was
            overwhelming and contagious.
          </p>
          <p className=' w-[45%] text-justify mb-5'>
            It superseded, by far, all frustrations, disappointments, doubts and
            obstacles that are present and inevitable when trying to learn such
            a complex and vast topic such as a programming language.
          </p>
          <p className=' w-[45%] text-justify mb-8'>
            I sincerely hope that after reviewing this portfolio, you will find
            my time well spent and my current skills level adequate for your
            needs. Looking forward to hear from you...
          </p>
          {/* <DummyContent /> */}
          {/* from-purple-700 to-violet-900 */}
          <div className='w-[45%]'>
            <CVButton />
          </div>
        </div>
      ),
    },
    {
      title: "Skills",
      value: "skills",
      content: (
        <div className='w-full overflow-hidden relative h-full rounded-2xl p-10 text-l md:text-sm text-textColor dark:text-textColorDark bg-gradient-to-br bg-bgColor dark:bg-bgColorDark border-4 border-solid border-secondaryColor dark:border-secondaryColorDark flex align-center justify-center'>
          <div className=' w-1/2'>
            <p className='mb-5  text-justify'>
              Rough overview of technologies I&apos;m most comfortable with. The
              most hours I spent in vanilla JavaScript environment, folowed by
              React and NextJS. I also gained experience with NodeJS, ExpressJS
              and SocketIO while working on my online multiplayer game projects.
            </p>
            <div className=''>
              <SkillBar src='html5' percent='80' />
              <SkillBar src='css3' percent='70' />
              <SkillBar src='sass' percent='60' />
              <SkillBar src='js' percent='85' />
              <SkillBar src='react' percent='80' />
              <SkillBar src='nextjs' percent='60' />
              <SkillBar src='nodejs' percent='50' />
              <SkillBar src='express' percent='50' />
              <SkillBar src='socketio' percent='50' />
              <SkillBar src='illustrator' percent='80' />
            </div>
          </div>
          <div className='w-1/2'>
            <div className='flex flex-col items-end'>
              <div className='w-[80%]'>
                <span title='Course certificate'>
                  <Link
                    href='https://udemy-certificate.s3.amazonaws.com/image/UC-9f0c20db-099e-4aed-8968-df17cee7ad03.jpg'
                    target='_blank'
                  >
                    <Image
                      src={certificate}
                      alt='React and NextJS course certificate'
                      placeholder='blur'
                    />
                  </Link>
                </span>
              </div>
              <p className='my-5'>
                <span className='text-secondaryColor'>React</span> and{" "}
                <span className=' text-secondaryColor'> NextJS</span> course
                certificate
              </p>
              <p className='w-[80%] mb-5 text-justify'>
                While I tried to learn as much as possible from practice,I took
                few courses that served as starting points when getting into
                unknown territories.
              </p>
              <p className='w-[80%] text-justify'>
                This is the certificate from the course that helped me in
                getting to understand React and NextJS frameworks better.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Personal & bio",
      value: "personal",
      content: (
        <div className='w-full overflow-hidden relative h-full rounded-2xl p-10 text-l md:text-sm text-textColor dark:text-textColorDark bg-gradient-to-br bg-bgColor dark:bg-bgColorDark border-4 border-solid border-primaryColor dark:border-primaryColorDark'>
          <div className='flex w-1/2 text-justify text-l md:text-sm'>
            <PersonalInfo />
          </div>
        </div>
      ),
    },
    {
      title: "Codewars",
      value: "codewars",
      content: (
        <div className='w-full overflow-hidden relative h-full rounded-2xl p-10 text-l md:text-normal  text-textColor dark:text-textColorDark bg-gradient-to-br bg-bgColor dark:bg-bgColorDark border-4 border-solid border-secondaryColor dark:border-secondaryColorDark'>
          <div className='flex justify-between mb-4'>
            <p className='text-normal'>
              Codewars homepage with my current rank and achievements
            </p>
            <CodewarsBadge />
          </div>
          <Image src={codewars2} alt='codewars' />
        </div>
      ),
    },
  ];

  return (
    <div className='h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-6xl mx-auto w-full items-start justify-start mt-5 mb-10 '>
      <Tabs tabs={tabs} />
    </div>
  );
  //   my-20 md:h-[40rem] max-w-5xl
}

// const DummyContent = () => {
//   return (
//     <Image
//       src='/linear.webp'
//       alt='dummy image'
//       width='1000'
//       height='1000'
//       className='object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto'
//     />
//   );
// };
