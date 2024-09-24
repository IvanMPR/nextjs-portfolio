import PageTitle from "../_components/utils/PageTitle";
import EmblaCarousel from "../_components/projects/EmblaCarousel";
import { FaUser } from "react-icons/fa";
import { projectsLength } from "../_components/projects/projects";

export const metadata = {
  title: "Projects",
  description: "Projects page of Ivan Miceta's portfolio",
  keywords: "projects, page, Ivan Miceta",
};
const OPTIONS = { loop: false, axis: "y" };
const SLIDE_COUNT = projectsLength;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function Projects() {
  return (
    <div className='flex flex-col items-center flex-1 w-full max-w-6xl mx-auto px-4 '>
      <PageTitle title={"Projects"} icon={<FaUser />} />
      <div className=' mt-16 w-full'>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
    </div>
  );
}
