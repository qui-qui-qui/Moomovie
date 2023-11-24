import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Movie, MovieInfo } from "../models/Movie";

const API_KEY = "fae51faf";
const baseUrl = `http://www.omdbapi.com/?apikey=${API_KEY}`;

const filmApi = createApi({
    reducerPath: "filmApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (build) => ({
        getFilms: build.query<Movie, string | void>({
            query: () => ({
                url: `${baseUrl}&s=lynch&page=1`,
            }),
        }),
        getFilmsById: build.query<MovieInfo, string | void>({
            query: (id) => ({
                url: `${baseUrl}&i=${id?.slice(1)}`,
            }),
        }),
    }),
});

export const { useGetFilmsQuery, useGetFilmsByIdQuery } = filmApi;

export { filmApi };
