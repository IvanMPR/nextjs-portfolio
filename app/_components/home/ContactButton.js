import Link from "next/link";

export default function ContactButton() {
  return (
    <Link
      href={"/contact"}
      className=' text-xl uppercase text-center  transition-all max-w-[75%] lg:max-w-[45%] rounded-full bg-primaryColor py-[.5em]  lg:py-[.6em] hover:text-textColorDark hover:dark:text-textColor'
    >
      Contact me
    </Link>
  );
}
