import { FilmItem } from "./FilmItem";
import { MovieInfo } from "../models/Movie";
import { useSelector } from "react-redux";
import { getFavorites } from "../redux/slices/favoritesSlice";

type Props = {
    search: MovieInfo[] | undefined;
};

function FilmsList({ search }: Props) {
    const favorites = useSelector(getFavorites);
    const isFavoriteCheck = (id: string | undefined): boolean => {
        return !!favorites.find((item) => item.imdbID === id);
    };

    return (
        <div className="bg-gray-100  py-10 px-12 dark:bg-slate-400">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {search ? (
                    search.map((film: MovieInfo) => {
                        return (
                            <FilmItem
                                key={film.imdbID}
                                film={film}
                                isFavorite={isFavoriteCheck(film.imdbID)}
                            />
                        );
                    })
                ) : (
                    <div className="grid place-items-center py-10 bg-slate-50 px-4">
                        <h1>No data</h1>
                    </div>
                )}
            </div>
        </div>
    );
}

export { FilmsList };
