import { useParams } from "react-router-dom";
import { useGetFilmsByIdQuery } from "../redux/services/filmService";
import { Loader } from "./Loader";
import { AddToFavorite } from "./AddToFavorite";
import { useDispatch, useSelector } from "react-redux";
import { getAuthStatusSelector } from "../redux/slices/authSlice";
import { addFavorite, deleteFavorite } from "../redux/slices/favoritesSlice";
import { useFavoritesCheck } from "../hooks/useFavoritesCheck";

function FilmInfo() {
    const id = prepareId(useParams().id);
    const { data: film, isLoading } = useGetFilmsByIdQuery(id);
    const dispatch = useDispatch();

    const authStatus = useSelector(getAuthStatusSelector);

    const isFavoriteCheck = useFavoritesCheck;

    const isFavorite = isFavoriteCheck(film?.imdbID);

    const handleLikeClick = (idFilm: string | undefined) => {
        if (isFavorite) {
            dispatch(deleteFavorite(idFilm));
            return;
        }
        dispatch(addFavorite(film));
    };

    if (isLoading) {
        return <Loader />;
    }

    function prepareId(id: string | undefined) {
        //remove first letter from useParams id
        return id?.slice(1);
    }

    return (
        <div className="mt-20 grid place-items-center font-mono bg-gray-100 dark:bg-slate-200">
            <div className="rounded-md bg-blue-300 shadow-lg dark:bg-gray-600">
                <div className="md:flex px-4 leading-none max-w-4xl">
                    <div className="flex-none mr-20">
                        <img
                            src={film?.Poster}
                            alt="pic"
                            className="h-72 w-56 rounded-md transform -translate-y-4 border-4 border-gray-300 shadow-lg"
                        />
                    </div>

                    <div className="flex-col text-white relative">
                        {authStatus ? (
                            <AddToFavorite
                                handleClick={() =>
                                    handleLikeClick(film?.imdbID)
                                }
                                isFavorite={isFavorite}
                            />
                        ) : null}
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
