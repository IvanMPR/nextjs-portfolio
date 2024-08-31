import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeSwitch({ selectedTheme }) {
  return (
    <div>
      <FaMoon
        size={15}
        className=' hover:cursor-pointer'
        // alt='Change color theme'
      />
    </div>
  );
}
