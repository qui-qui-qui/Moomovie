import { useContext, createContext, useState } from "react";

type Theme = {
    darkMode: boolean;
    toggleTheme: () => void;
};

const ThemeContext = createContext<Theme | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <ThemeContext.Provider
            value={{
                darkMode,
                toggleTheme: () => setDarkMode(!darkMode),
            }}
        >
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
