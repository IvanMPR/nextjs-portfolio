import Link from "next/link";

export default function ContactButton() {
  return (
    <button
      type='button'
      className='max-w-[75%] lg:max-w-[45%] rounded-full bg-primaryColor py-[.6em]  lg:py-[.7em] '
    >
      <Link
        href={"/contact"}
        className=' text-xl uppercase hover:text-textColorDark hover:dark:text-textColor transition-all '
      >
        Contact me
      </Link>
    </button>
  );
}
