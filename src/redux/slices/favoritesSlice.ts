import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { MovieInfoWithId } from "../../models/Movie";

type InitialState = {
    favorites: MovieInfoWithId[];
};

const initialState: InitialState = {
    favorites: [],
};

export const favorite = createSlice({
    name: "FAVORITE",
    initialState,
    reducers: {
        setFavorites: (state, action) => {
            state.favorites = [...action.payload];
        },
        addFavorite: (state, action) => {
            state.favorites.push(action.payload);
        },
        deleteFavorite: (state, action) => {
            state.favorites = [
                ...state.favorites.filter(
                    (item) => item.imdbID !== action.payload,
                ),
            ];
        },
        clearFavorites: (state) => {
            state.favorites = [];
        },
    },
});

export const getFavorites = (state: RootState): MovieInfoWithId[] =>
    state.FAVORITE.favorites;

export const { setFavorites, addFavorite, deleteFavorite, clearFavorites } =
    favorite.actions;
