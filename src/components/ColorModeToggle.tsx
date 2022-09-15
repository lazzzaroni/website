import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "next-themes";

const ColorModeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="flex items-center justify-center transition-all rounded-full w-9 h-9 bg-transparent hover:bg-slate-200 dark:hover:bg-zinc-800 ring-zinc-300"
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
    >
      {theme === "dark" ? <FaSun size={18} /> : <FaMoon size={16} />}
    </button>
  );
};

export default ColorModeToggle;
