import { FaEnvelope, FaMapMarked, FaPhone } from "react-icons/fa";

export default function ContactData() {
  return (
    <div className='mb-12 lg:mb-0'>
      <div className='flex flex-col lg:mb-14 mb-8'>
        <span className=' text-primaryColor mb-2'>
          <FaPhone />
        </span>
        <p className='text-textColor dark:text-textColorDark'>
          +381 63 834 9870
        </p>
      </div>
      <div className='flex flex-col lg:mb-14 mb-8'>
        <span className=' text-primaryColor mb-2'>
          <FaEnvelope />
        </span>
        <p className='text-textColor dark:text-textColorDark'>
          contact@ivanmiceta.dev
        </p>
      </div>
      <div className='flex flex-col'>
        <span className=' text-primaryColor mb-2'>
          <FaMapMarked />
        </span>
        <p className='text-textColor dark:text-textColorDark'>
          Belgrade, Serbia
        </p>
      </div>
    </div>
  );
}
