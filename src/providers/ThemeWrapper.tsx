import { MainPage } from "../pages/MainPage";
import { ThemeProvider } from "./Theme/ThemeProvider";

export const ThemeWrapper = () => {
    return (
        <ThemeProvider>
            <MainPage />
        </ThemeProvider>
    );
};
