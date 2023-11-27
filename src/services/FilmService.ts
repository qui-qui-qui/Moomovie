import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Movie, MovieInfo } from "../models/Movie";

const API_KEY = "fae51faf";
const baseUrl = `http://www.omdbapi.com/?apikey=${API_KEY}`;

const filmApi = createApi({
    reducerPath: "filmApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (build) => ({
        getFilms: build.query<MovieInfo[], string | void>({
            query: () => ({
                url: `${baseUrl}&s=lynch&page=1`,
            }),
            transformResponse: (res: Movie) => {
                return res.Search;
            },
        }),
        getFilmsById: build.query<MovieInfo, string | void>({
            query: (id) => ({
                url: `${baseUrl}&i=${id}`,
            }),
        }),
        getFilmsByTitle: build.query<MovieInfo[], string | void>({
            query: (q) => ({
                url: `${baseUrl}&s=${q}&page=1`,
            }),
            transformResponse: (res: Movie) => {
                return res.Search;
            },
        }),
    }),
});

export const {
    useGetFilmsQuery,
    useGetFilmsByIdQuery,
    useGetFilmsByTitleQuery,
} = filmApi;

export { filmApi };
