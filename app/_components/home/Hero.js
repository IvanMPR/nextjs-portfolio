import ContactButton from "./ContactButton";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <main className='flex flex-col lg:flex-row items-center justify-between'>
      <div className=' flex flex-col justify-between mb-16 lg:mb-0'>
        <h1 className='   text-textColor dark:text-textColorDark pb-10 lg:pb-20'>
          <span className='  text-xl uppercase block text-primaryColor dark:text-primaryColorDark pb-10'>
            Hello, my name is Ivan Miceta
          </span>
          <span className=' text-6xl'>I&apos;m a web developer</span>
        </h1>
        <ContactButton />
      </div>
      <div className=' w-[80%] mr-auto lg:w-[35%] md:mr-0 lg:mr-0 '>
        <HeroImage />
      </div>
    </main>
  );
}
