import Image from "next/image";
import firebase from "@/public/firebase-budget-tracker.jpg";
import js from "@/public/icons/js.png";
import react from "@/public/icons/react.png";
import sass from "@/public/icons/sass.png";
import Link from "next/link";

export default function ProjectsSlide({ project }) {
  const {
    shortTitle,
    imageSrc,
    alt,
    fullTitle,
    demoHref,
    codeHref,
    description,
    projectNum,
  } = project;

  return (
    <div className='flex flex-col lg:flex-row items-center'>
      <div className=' mb-2 pr-2'>
        <Image
          alt={alt}
          placeholder='blur'
          src={imageSrc}
          className='border border-solid border-blue-950 rounded-lg'
        />
      </div>
      <div className=''>
        <div className='max-w-[70ch] flex flex-col justify-between mb-5'>
          <h3 className=' font-semibold text-end text-lg mb-3'>{fullTitle}</h3>

          <div className=' flex justify-end'>
            <div className='w-6 h-6 mr-3'>
              <Image alt='js icon' src={js} />
            </div>
            <div className='w-6 h-6 mr-3'>
              <Image alt='react icon' src={react} />
            </div>
            <div className='w-6 h-6'>
              <Image alt='sass icon' src={sass} />
            </div>
          </div>
        </div>

        <p className='max-w-[70ch] mb-5 text-end'>{description}</p>
        <div className=' flex mb-4 justify-end'>
          <Link
            href={demoHref}
            className='mr-5 underline underline-offset-4 decoration-2 decoration-primaryColor '
          >
            Demo
          </Link>
          <Link
            href={codeHref}
            className=' underline underline-offset-4 decoration-2 decoration-primaryColor '
          >
            Source code
          </Link>
        </div>
      </div>
    </div>
  );
}
