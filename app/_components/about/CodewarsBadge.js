import Link from "next/link";

export default function CodewarsBadge() {
  return (
    <Link
      href='https://www.codewars.com/users/IvanMPR'
      target='_blank'
      className='pr-4'
    >
      <img
        src='https://www.codewars.com/users/IvanMPR/badges/small'
        alt='Codewars badge/link'
        title='Codewars badge/link'
      ></img>
    </Link>
  );
}
