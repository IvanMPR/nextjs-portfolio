import PageTitle from "../_components/utils/PageTitle";
import { FaEnvelope } from "react-icons/fa";
import ContactData from "../_components/contact/ContactData";
import ContactForm from "../_components/contact/ContactForm";
export const metadata = {
  title: "Contact",
  description: "Contact page of Ivan Miceta's portfolio",
  keywords: "contact, page, Ivan Miceta",
};

export default function Contact() {
  return (
    <div className=' flex flex-col w-full max-w-6xl px-4 mx-auto flex-1 items-center'>
      <PageTitle title={"Contact"} icon={<FaEnvelope />} />
      <div className='flex flex-col lg:flex-row lg:mt-20 mt-16 w-full  justify-between'>
        <ContactData />
        <ContactForm />
      </div>
    </div>
  );
}
