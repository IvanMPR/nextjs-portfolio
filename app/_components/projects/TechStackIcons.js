import { staticIconPath } from "./static-paths";

export default function TechStackIcons({ project }) {
  const { techStack, projectNum } = project;
  return (
    <div
      className={` flex ${projectNum % 2 ? "justify-end" : "justify-start"} `}
    >
      {techStack.map((icon, index) => (
        <div className='w-6 h-6 mr-3' key={index}>
          {staticIconPath(icon)}
        </div>
      ))}
    </div>
  );
}
