import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IMovie, IMovieInfo } from "../models/IMovie";

const API_KEY = "fae51faf";
const baseUrl = `http://www.omdbapi.com/?apikey=${API_KEY}`;

const filmApi = createApi({
    reducerPath: "filmApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (build) => ({
        getFilms: build.query<IMovie, string | void>({
            query: () => ({
                url: `${baseUrl}&s=lynch&page=1`,
            }),
        }),
        getFilmsById: build.query<IMovieInfo, string | void>({
            query: (id) => ({
                url: `${baseUrl}&i=${id}`,
            }),
        }),
    }),
});

export const { useGetFilmsQuery, useGetFilmsByIdQuery } = filmApi;

export { filmApi };
