export default function ContactForm() {
  return (
    <form className='w-full md:w-2/3'>
      <div className=' flex flex-col mb-5'>
        <label
          htmlFor='name'
          className='mb-1 text-textColor dark:text-textColorDark'
        >
          Name
        </label>
        <input
          type='text'
          id='name'
          name='name'
          className='rounded p-2 text-l border border-bgColorOutline '
        />
      </div>
      <div className=' flex flex-col mb-5'>
        <label
          htmlFor='email'
          className='mb-1 text-textColor dark:text-textColorDark'
        >
          Email
        </label>
        <input
          type='email'
          id='email'
          name='email'
          className='rounded p-2 text-l border border-bgColorOutline '
        />
      </div>
      <div className=' flex flex-col mb-5'>
        <label
          htmlFor='message'
          className='mb-1 text-textColor dark:text-textColorDark'
        >
          Message
        </label>
        <textarea
          id='message'
          name='message'
          rows={8}
          className='rounded border border-bgColorOutline'
        ></textarea>
      </div>
      <div>
        <button
          type='submit'
          className='w-full rounded bg-primaryColor py-[.7em] uppercase hover:text-textColorDark hover:dark:text-textColor transition-all'
        >
          Send message
        </button>
      </div>
    </form>
  );
}
