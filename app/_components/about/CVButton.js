// import Link from "next/link";

export default function CVButton() {
  return (
    <a
      // type='button'
      download='cv'
      href='/public/cv.pdf'
      className='block w-full rounded-full bg-secondaryColor py-[.4em]  lg:py-[.5em] mt-5 text-center dark:text-textColorDark text-textColor uppercase font-medium hover:text-textColorDark hover:dark:text-textColor transition-all'
    >
      Download CV
    </a>
  );
}
