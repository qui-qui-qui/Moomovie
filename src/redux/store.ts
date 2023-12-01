import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { filmApi } from "../services/FilmService";

const rootReducer = combineReducers({
    [filmApi.reducerPath]: filmApi.reducer,
});

export const store = () => {
    return configureStore({
        reducer: rootReducer,
        middleware(getDefaultMiddleware) {
            return getDefaultMiddleware().concat(filmApi.middleware);
        },
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof store>;
export type AppDispatch = AppStore["dispatch"];
