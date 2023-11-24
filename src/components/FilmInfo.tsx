import { useParams } from "react-router-dom";
import { useGetFilmsByIdQuery } from "../services/FilmService";
import { Loader } from "../pages/Loader";

function FilmInfo() {
    const { id } = useParams();
    const { data: film, isLoading } = useGetFilmsByIdQuery(id);

    if (isLoading) {
        return <Loader />;
    }

    return (
        <div className="mt-20 grid place-items-center font-mono bg-white">
            <div className="rounded-md bg-gray-500 shadow-lg">
                <div className="md:flex px-4 leading-none max-w-4xl">
                    <div className="flex-none mr-20">
                        <img
                            src={film?.Poster}
                            alt="pic"
                            className="h-72 w-56 rounded-md transform -translate-y-4 border-4 border-gray-300 shadow-lg"
                        />
                    </div>

                    <div className="flex-col text-gray-300">
                        <p className="pt-4 text-2xl font-bold">
                            {film?.Title} ({film?.Year})
                        </p>
                        <div className="text-md flex justify-between px-4 my-2">
                            <span className="font-bold">
                                {film?.Country} | {film?.Type}
                            </span>
                            <span className="font-bold"></span>
                        </div>
                        <p className="hidden md:block px-4 my-4 text-sm text-left">
                            {film?.Plot}
                        </p>

                        <p className="flex text-md px-4 my-2">
                            Rating: {film?.imdbRating}/10
                            <span className="font-bold px-2">|</span>
                            Director: {film?.Director} <br />
                            Actors: {film?.Actors}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { FilmInfo };
