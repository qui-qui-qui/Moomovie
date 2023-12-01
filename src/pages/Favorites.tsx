import { useSelector } from "react-redux";
import { getFavorites } from "../redux/slices/favoritesSlice";
import { FilmsList } from "../components/FilmsList";
import { Navbar } from "../components/Navbar";

function Favorites() {
    const favorites = useSelector(getFavorites);

    return (
        <>
            <Navbar />
            {favorites.length ? (
                <FilmsList search={favorites} />
            ) : (
                <div className="h-screen grid place-items-center py-10 bg-slate-50 px-4 dark:bg-slate-400">
                    <h1>Empty here</h1>
                </div>
            )}
        </>
    );
}

export { Favorites };
