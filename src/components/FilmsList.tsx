import { FilmItem } from "./FilmItem";
import { MovieInfo } from "../models/Movie";

type Props = {
    search: MovieInfo[] | undefined;
};

function FilmsList({ search }: Props) {
    return (
        <div className="bg-gray-100  py-10 px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {search ? (
                    search.map((film: MovieInfo) => {
                        return <FilmItem key={film.imdbID} film={film} />;
                    })
                ) : (
                    <h1>No data</h1>
                )}
            </div>
        </div>
    );
}

export { FilmsList };
