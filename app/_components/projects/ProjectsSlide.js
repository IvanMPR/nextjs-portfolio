import Link from "next/link";
import TechStackIcons from "./TechStackIcons";
import { staticImagePath } from "./static-paths";

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
    techStack,
    staticPathImportName,
  } = project;

  return (
    <div className='flex flex-col lg:flex-row items-center'>
      <div className=' mb-2 pr-2'>{staticImagePath(staticPathImportName)}</div>
      <div className=''>
        <div className='max-w-[70ch] flex flex-col justify-between mb-5'>
          <h3 className=' font-semibold text-end text-lg mb-3'>{fullTitle}</h3>
          <TechStackIcons techStack={techStack} />
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
