import PageTitle from "../_components/utils/PageTitle";
import { FaUser } from "react-icons/fa";
import CVButton from "../_components/about/CVButton";
import { TabsDemo } from "../_components/Tabs";

export const metadata = {
  title: "About",
  description: "About page of Ivan Miceta's portfolio",
  keywords: "about, page, Ivan Miceta",
};

export default function About() {
  return (
    <div className='flex flex-col items-center flex-1 w-full max-w-6xl mx-auto px-4 '>
      <PageTitle title={"About"} icon={<FaUser />} />
      {/* <CVButton /> */}
      <TabsDemo />
    </div>
  );
}
