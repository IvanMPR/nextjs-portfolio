import { FaUser } from "react-icons/fa";

import PageTitle from "../_components/utils/PageTitle";
import AboutClient from "../_components/about/AboutClient";

export const metadata = {
  title: "About",
  description: "About page of Ivan Miceta's portfolio",
  keywords: "about, page, Ivan Miceta",
};

export default function About() {
  return (
    <div className='flex flex-col items-center flex-1 w-full max-w-6xl mx-auto px-4 '>
      <PageTitle title={"About"} icon={<FaUser />} />
      <AboutClient />
    </div>
  );
}
