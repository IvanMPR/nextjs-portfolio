import Link from "next/link";
import TechStackIcons from "./TechStackIcons";
import { staticImagePath } from "./static-paths";

export default function ProjectsSlide({ project }) {
  const {
    fullTitle,
    demoHref,
    codeHref,
    description,
    projectNum,
    staticPathImportName,
  } = project;

  return (
    <div
      className={`flex flex-col items-center ${
        projectNum % 2 ? "lg:flex-row" : "lg:flex-row-reverse"
      } `}
    >
      <div className=' '>{staticImagePath(staticPathImportName)}</div>
      <div>
        <div className='max-w-[70ch] flex flex-col justify-between mb-5'>
          <h3
            className={` font-semibold ${
              projectNum % 2 ? "text-end" : "text-start"
            }  text-lg mb-3`}
          >
            {fullTitle}
          </h3>
          <TechStackIcons project={project} />
        </div>

        <p
          className={`max-w-[70ch] mb-5 ${
            projectNum % 2 ? "text-end pl-4" : "text-start pr-4"
          }`}
        >
          {description}
        </p>
        <div
          className={`flex mb-4 ${
            projectNum % 2 ? "justify-end" : "justify-start"
          } `}
        >
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
