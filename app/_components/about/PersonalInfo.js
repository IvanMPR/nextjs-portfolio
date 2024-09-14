import {
  FaCheck,
  FaCheckDouble,
  FaCheckSquare,
  FaRegCheckSquare,
} from "react-icons/fa";
import Link from "next/link";

export default function PersonalInfo() {
  return (
    <ul className='list-disc text-base'>
      <p className='text-justify flex items-center'>
        <span className='text-secondaryColor mr-2'>
          <FaCheck />
        </span>
        from 1996 to 2014 I was a professional basketball
        <span
          title='Link to EuroBasket profile page'
          className=' text-primaryColor underline italic dark:text-primaryColorDark ml-1'
        >
          <Link
            href='https://basketball.eurobasket.com/player/Ivan-Miceta/Romania/BC-CSU-Sibiu/28677'
            target='_blank'
          >
            player
          </Link>
        </span>
      </p>
      {/* <li className=' text-textColor dark:text-textColorDark text-justify'>
        from 1996 to 2014 I was a professional basketball
        <a
          rel='noopener noreferrer'
          href='https://basketball.eurobasket.com/player/Ivan-Miceta/Romania/BC-CSU-Sibiu/28677'
          title='Link to EuroBasket profile page'
          target='_blank'
          className='underline italic text-primaryColor  dark:text-primaryColorDark mr-1'
        >
          player
        </a>
        in many teams and countries
      </li> */}
      <li className=''>
        I was a
        <a
          rel='noopener noreferrer'
          href='https://archive.fiba.com/pages/eng/fa/team/p/sid/2311/tid/390/_/1997_European_Championship_for_Cadets/index.html'
          target='_blank'
          title='Link to Fiba archive website'
        >
          member
        </a>
        of the U16 National team of Yugoslavia, winner of the European
        Championship in 1997 in Belgium
      </li>
      <li className=''>
        in 2010, after graduating in
        <a
          rel='noopener noreferrer'
          href='https://www.spak.edu.rs/english/'
          target='_blank'
          title='Link to Sportska Akademija'
        >
          Sportska Akademija
        </a>
        I acquired the professional title of basketball
        <a
          rel='noopener noreferrer'
          href='https://www.fiba.basketball/wabc/find-a-member'
          title='Link to FIBA coach license, type Ivan Miceta in search bar'
          target='_blank'
        >
          coach
        </a>
        , with associated FIBA license
      </li>

      <li className=''>
        somewhere along the way, I learned to
        <a
          rel='noopener noreferrer'
          href='https://www.shutterstock.com/g/Ivsanmas'
          target='_blank'
          title='Link to my Illustrator Portfolio'
        >
          work in Adobe Illustrator
        </a>
        , as a hobby. I find it very useful now in web development, almost all
        of the projects I created contains my graphic resources
      </li>
      <li className=''>
        from 2015 I work at
        <a
          rel='noopener noreferrer'
          href='https://synergysports.com/'
          target='_blank'
          title='Link to Synergy Sports'
        >
          Synergy Sports
        </a>
        , an American based company that provides high quality, advanced
        basketball statistic, game and players analyses
      </li>
      <li className=''>
        my current position is Phase II Logger, with responsibilities to
        recognize and organize above mentioned basketball information, and not
        related to web development
      </li>

      <li className=''>
        from 2007 married to Aleksandra, father of two children, daughter Maša
        and son Miloš
      </li>
      <li className=''>
        my hobbies are reading, cycling, skiing, snorkeling, swimming, and of
        course basketball
      </li>
    </ul>
  );
}
