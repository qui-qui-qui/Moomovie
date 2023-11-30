import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { filmApi } from "./services/filmService";
import { auth } from "./slices/authSlice";
import { favorite } from "./slices/favoritesSlice";
import { userStateSyncMiddleware } from "./middleware/userStateMiddleware";
import { history } from "./slices/historySlice";

const rootReducer = combineReducers({
    [filmApi.reducerPath]: filmApi.reducer,
    AUTH: auth.reducer,
    FAVORITE: favorite.reducer,
    HISTORY: history.reducer,
});

export const store = () => {
    return configureStore({
        reducer: rootReducer,
        middleware(getDefaultMiddleware) {
            return getDefaultMiddleware()
                .prepend(userStateSyncMiddleware.middleware)
                .concat(filmApi.middleware);
        },
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof store>;
export type AppDispatch = AppStore["dispatch"];
