import { useTheme } from "../providers/Theme/ThemeProvider";

const ThemeSwitch = () => {
    const { darkMode, toggleTheme } = useTheme();

    if (darkMode) {
        document.body.classList.add("dark");
    } else {
        document.body.classList.remove("dark");
    }

    return (
        <button
            data-testid="switch-theme-btn"
            className="w-28 px-2 mr-5 rounded-lg bg-blue-200 text-white dark:bg-gray-100 dark:text-black"
            onClick={toggleTheme}
        >
            {darkMode ? "Dark Mode" : "Light Mode"}
        </button>
    );
};

export { ThemeSwitch };
