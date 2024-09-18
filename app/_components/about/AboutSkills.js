import Link from "next/link";
import Image from "next/image";

import SkillBar from "./SkillBar";
import certificate from "@/public/certificate.jpg";

export default function AboutSkills({ addBorder }) {
  return (
    <div
      className={`w-full ${
        addBorder ? "flex" : "flex-col"
      } align-center justify-center overflow-hidden relative h-full rounded-2xl p-10 text-l md:text-sm text-textColor dark:text-textColorDark  bg-bgColor dark:bg-bgColorDark ${
        addBorder
          ? "border-4 border-solid border-secondaryColor dark:border-secondaryColorDark"
          : ""
      }
          
       `}
    >
      <div className={` ${addBorder ? "w-1/2" : "f-full"}`}>
        <p className='mb-5  text-justify'>
          Rough overview of technologies I&apos;m most comfortable with. The
          most hours I spent in vanilla JavaScript environment, folowed by React
          and NextJS. I also gained experience with NodeJS, ExpressJS and
          SocketIO while working on my online multiplayer game projects.
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
      <div className={` ${addBorder} ? "w-1/2" : "f-full"`}>
        <div className='flex flex-col items-end'>
          <div className={` ${addBorder} ? "w-[80%]" : "f-full"`}>
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
          <p
            className={`${addBorder ? "w-[80%]" : "w-full"} mb-5 text-justify`}
          >
            While I tried to learn as much as possible from practice,I took few
            courses that served as starting points when getting into unknown
            territories.
          </p>
          <p className={`${addBorder ? "w-[80%]" : "w-full"} text-justify`}>
            This is the certificate from the course that helped me in getting to
            understand React and NextJS frameworks better.
          </p>
        </div>
      </div>
    </div>
  );
}
