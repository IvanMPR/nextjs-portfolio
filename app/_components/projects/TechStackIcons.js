import { staticIconPath } from "./static-paths";

export default function TechStackIcons({ techStack }) {
  return (
    <div className=' flex justify-end'>
      {techStack.map((icon, index) => (
        <div className='w-6 h-6 mr-3' key={index}>
          {staticIconPath(icon)}
        </div>
      ))}
    </div>
  );
}
