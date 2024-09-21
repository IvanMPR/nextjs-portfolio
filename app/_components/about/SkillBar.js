import Image from "next/image";

export default function SkillBar({ src, percent }) {
  return (
    <div className='flex items-center justify-between mb-3'>
      <div className='w-5/6 h-2 bg-bgOffsetColor  rounded-full relative border'>
        <div
          className={` h-[5px] bg-primaryColor dark:bg-primaryColorDark rounded-full absolute top-[-2px] left-0 translate-y-1/2 `}
          style={{ width: `${percent}%` }}
        ></div>
      </div>
      <span
        className='flex items-center pb-2'
        title={`${src.slice(0, 1).toUpperCase() + src.slice(1)} icon`}
      >
        <Image
          className='pl-1'
          src={`/nextjs-portfolio/icons/${src}.png`}
          alt={`${src} icon`}
          width={25}
          height={25}
        />
      </span>
    </div>
  );
}
