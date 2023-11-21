import { FC } from "react";
import { IMovieInfo } from "../models/IMovie";

interface FilmItemProps {
    film: IMovieInfo;
}
const FilmItem: FC<FilmItemProps> = ({ film }) => {
    return (
        <a
            href="#"
            className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
        >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                {film.Title}, {film.Year}
            </h5>
            <div className="font-normal text-gray-700">{film.Poster}</div>
        </a>
    );
};

export { FilmItem };
