export default function PageTitle({ title, icon }) {
  return (
    <div className='flex items-center justify-center mt-8'>
      <h2 className='text-2xl text-textColor dark:text-textColorDark mr-4 font-semibold'>
        {title}
      </h2>
      <span className='text-primaryColor dark:text-primaryColorDark text-2xl'>
        {icon}
      </span>
    </div>
  );
}
