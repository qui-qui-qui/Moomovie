import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IMovie } from "../models/IMovie";

const API_KEY = "fae51faf";
const baseUrl = `http://www.omdbapi.com/?apikey=${API_KEY}`;

const filmApi = createApi({
    reducerPath: "filmApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (build) => ({
        getFilms: build.query<IMovie, string | void>({
            query: () => ({
                url: `${baseUrl}&s=computer&page=1`,
            }),
        }),
    }),
});

export const { useGetFilmsQuery } = filmApi;

export { filmApi };
