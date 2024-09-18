import Link from "next/link";

export default function PersonalInfo() {
  return (
    <div className='flex justify-between'>
      <div className='flex flex-col'>
        <p className='mb-4'>
          <span>&bull;</span> from 1996 to 2014 I was a professional basketball
          <Link
            href='https://basketball.eurobasket.com/player/Ivan-Miceta/Romania/BC-CSU-Sibiu/28677'
            target='_blank'
            className='text-primaryColor underline  dark:text-primaryColorDark mx-1'
          >
            player
          </Link>
          in many teams and countries.
        </p>
        <p className='mb-4'>
          <span>&bull;</span> I was a
          <Link
            href='https://archive.fiba.com/pages/eng/fa/team/p/sid/2311/tid/390/_/1997_European_Championship_for_Cadets/index.html'
            target='_blank'
            className='text-primaryColor underline  dark:text-primaryColorDark mx-1'
          >
            member
          </Link>
          of the U16 National team of Yugoslavia, winner of the European
          Championship in 1997 in Belgium.
        </p>
        <p className='mb-4'>
          <span>&bull;</span> in 2010, after graduating in
          <Link
            href='https://www.spak.edu.rs/english/'
            target='_blank'
            className='text-primaryColor underline dark:text-primaryColorDark mx-2'
          >
            Sportska Akademija
          </Link>
          I acquired the professional title of basketball
          <Link
            href='https://www.fiba.basketball/wabc/find-a-member'
            target='_blank'
            className='text-primaryColor underline dark:text-primaryColorDark mx-2'
          >
            coach
          </Link>
          with associated FIBA license.
        </p>
        <p className='mb-4'>
          <span>&bull;</span> somewhere along the way, I learned to work in
          <Link
            href='https://www.shutterstock.com/g/Ivsanmas'
            target='_blank'
            className='text-primaryColor underline dark:text-primaryColorDark mx-2'
          >
            Adobe Illustrator
          </Link>
          as a hobby. I find it very useful now in web development, almost all
          of the projects I created contains my graphic resources.
        </p>
        <p className='mb-4'>
          <span>&bull;</span> from 2015 I work at
          <Link
            href='https://synergysports.com/'
            target='_blank'
            className='text-primaryColor underline dark:text-primaryColorDark mx-2'
          >
            Synergy Sports
          </Link>
          an American based company that provides high quality, advanced
          basketball statistic, game and players analyses.
        </p>
        <p className='mb-4'>
          <span>&bull;</span> my current position is Phase II Logger, with
          responsibilities to recognize and organize above mentioned basketball
          information, and not related to web development.
        </p>
        <p className='mb-4'>
          <span>&bull;</span> from 2007 married to Aleksandra, father of two
          children, daughter Maša and son Miloš.
        </p>
        <p className='mb-4'>
          <span>&bull;</span> my hobbies are reading, cycling, skiing,
          snorkeling, swimming, and of course basketball.
        </p>
      </div>
    </div>
  );
}
