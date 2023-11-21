import { IMovieInfo } from "../models/IMovie";
import { useGetFilmsQuery } from "../services/FilmService";
import { FilmItem } from "./FilmItem";

function FilmsList() {
    const { data } = useGetFilmsQuery("");
    if (data) {
        const movies = data.Search;
        console.log(movies);
    }

    return (
        <div>
            <div>
                {data?.Search.map((film) => {
                    return (
                        <FilmItem
                            key={film.imdbID}
                            film={film as unknown as IMovieInfo}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export { FilmsList };
