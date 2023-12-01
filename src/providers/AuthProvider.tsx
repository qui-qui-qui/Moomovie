import { useState, createContext } from "react";
import { MainPage } from "../pages/MainPage";

type FavsFilms = {
    favs: string[];
    setFavs: (c: string[]) => void;
};
const Favs = createContext<FavsFilms>({
    favs: [],
    setFavs: () => {},
});
export default function AuthProvider() {
    const [favs, setFavs] = useState<string[]>([""]);
    return (
        <Favs.Provider value={{ favs, setFavs }}>
            <MainPage />
        </Favs.Provider>
    );
}
