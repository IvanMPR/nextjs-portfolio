export default function ContactForm() {
  return (
    <form
      action='https://formsubmit.co/contact@ivanmiceta.dev'
      method='POST'
      className='w-full md:w-2/3'
    >
      {/* <input
        type='hidden'
        name='_next'
        value='http://localhost:3000/nextjs-portfolio'
      ></input> */}
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
          required
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
          required
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
          required
          rows={8}
          maxLength={500}
          className='rounded border border-bgColorOutline p-2'
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
