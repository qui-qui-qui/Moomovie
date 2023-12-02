import {
    useContext,
    createContext,
    useState,
    useCallback,
    useMemo,
} from "react";

type Theme = {
    darkMode: boolean;
    toggleTheme: () => void;
};

const ThemeContext = createContext<Theme | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [darkMode, setDarkMode] = useState(false);
    const toggleTheme = useCallback(() => {
        setDarkMode(!darkMode);
    }, [darkMode]);

    const themeObject = useMemo(
        () => ({ darkMode, toggleTheme }),
        [darkMode, toggleTheme],
    );

    return (
        <ThemeContext.Provider value={themeObject}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === null) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}
