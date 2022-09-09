import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "next-themes";

const ColorModeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="text-white dark:text-black bg-gray-600 dark:bg-slate-200 p-3 rounded-lg m-2 md:m-3"
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
    >
      {theme === "dark" ? <FaMoon /> : <FaSun />}
    </button>
  );
};

export default ColorModeToggle;
