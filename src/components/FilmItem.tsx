import { useDispatch, useSelector } from "react-redux";
import { MovieInfo } from "../models/Movie";
import PropTypes from "prop-types";
import { getAuthStatusSelector } from "../redux/slices/authSlice";
import { Link } from "react-router-dom";
import { addFavorite, deleteFavorite } from "../redux/slices/favoritesSlice";
import { AddToFavorite } from "./AddToFavorite";

type Props = {
    film: MovieInfo;
    isFavorite: boolean;
};

const FilmItem = ({ film, isFavorite }: Props) => {
    const dispatch = useDispatch();

    const authStatus = useSelector(getAuthStatusSelector);

    const handleLikeClick = (idFilm: string) => {
        if (isFavorite) {
            dispatch(deleteFavorite(idFilm));
            return;
        }
        dispatch(addFavorite(film));
    };
    return (
        <div className="flex-column justify-evenly max-w-sm bg-white border border-gray-200 rounded-lg shadow">
            <div>
                <img
                    className="rounded-t h-72 w-full object-contain pointer-events-none bg-blue-100"
                    src={film.Poster}
                    alt=""
                />
            </div>
            <div className="p-5">
                <div className="h-40">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                        {film.Title}
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 ">
                        {film.Year}
                    </p>
                </div>
                <div className="relative">
                    <Link
                        to={`/:${film.imdbID}`}
                        className="inline-flex items-center px-4 py-4 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300   "
                    >
                        Read more
                        <svg
                            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                        </svg>
                    </Link>
                    {authStatus ? (
                        <div className="hidden lg:block">
                            <AddToFavorite
                                handleClick={() => handleLikeClick(film.imdbID)}
                            />
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

FilmItem.propTypes = {
    isFavorite: PropTypes.bool.isRequired,
};

export { FilmItem };
