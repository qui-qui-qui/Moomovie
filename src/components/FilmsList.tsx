import { MovieInfo } from "../models/Movie";
import { Loader } from "../pages/Loader";
import { useGetFilmsQuery } from "../services/FilmService";
import { FilmItem } from "./FilmItem";

function FilmsList() {
    const { data, isLoading } = useGetFilmsQuery("");

    if (isLoading) {
        return <Loader />;
    }

    return (
        <div className="bg-gray-100  py-10 px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {data?.Search.map((film: MovieInfo) => {
                    return <FilmItem key={film.imdbID} film={film} />;
                })}
            </div>
        </div>
    );
}

export { FilmsList };
