import PageTitle from "../_components/utils/PageTitle";
import { FaUser } from "react-icons/fa";
export const metadata = {
  title: "About",
  description: "About page of Ivan Miceta's portfolio",
  keywords: "about, page, Ivan Miceta",
};

export default function About() {
  return (
    <div className='flex items-center flex-1 justify-center'>
      <PageTitle title={"About"} icon={<FaUser />} />
    </div>
  );
}
