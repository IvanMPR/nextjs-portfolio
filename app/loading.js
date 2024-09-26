import Spinner from "./_components/utils/Spinner";

export default function Loading() {
  return (
    <div className='h-full w-full grid items-center justify-center'>
      <Spinner />
    </div>
  );
}
