import { IMovieInfo } from "../models/IMovie";
import { Loader } from "../pages/Loader";
import { useGetFilmsQuery } from "../services/FilmService";
import { FilmItem } from "./FilmItem";

function FilmsList() {
    const { data, isLoading } = useGetFilmsQuery("");
    if (data) {
        const movies = data.Search;
        console.log(movies);
    }

    if (isLoading) {
        return <Loader />;
    }

    return (
        <div className="bg-gray-100  py-10 px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {data?.Search.map((film) => {
                    return (
                        <FilmItem key={film.imdbID} film={film as IMovieInfo} />
                    );
                })}
            </div>
        </div>
    );
}

export { FilmsList };
