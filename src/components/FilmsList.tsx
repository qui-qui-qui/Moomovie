import { FilmItem } from "./FilmItem";
import { MovieInfo } from "../models/Movie";
import { useFavoritesCheck } from "../hooks/useFavoritesCheck";

type Props = {
    search: MovieInfo[] | undefined;
};

function FilmsList({ search }: Props) {
    const isFavoriteCheck = useFavoritesCheck;

    return (
        <div className="bg-gray-100  py-10 px-12">
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
