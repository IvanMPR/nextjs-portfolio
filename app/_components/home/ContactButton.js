import Link from "next/link";

export default function ContactButton() {
  return (
    <button className='max-w-[45%] rounded-full bg-primaryColor  py-[.7em] '>
      <Link
        href={"/contact"}
        className=' text-xl uppercase hover:text-textColorDark hover:dark:text-textColor transition-all '
      >
        Contact me
      </Link>
    </button>
  );
}
