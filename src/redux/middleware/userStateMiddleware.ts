import { createListenerMiddleware } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { init } from "../actions/init";
import { search } from "../actions/search";
import { logIn } from "../slices/authSlice";
import { setHistory, updateHistory } from "../slices/historySlice";
import {
    addFavorite,
    deleteFavorite,
    setFavorites,
} from "../slices/favoritesSlice";
import { HistoryRecord } from "../../models/HistoryRecord";
import { localStorageUtils } from "../../utils/localStorage";

const userStateSyncMiddleware = createListenerMiddleware();

userStateSyncMiddleware.startListening({
    actionCreator: init,
    effect: (action, listenerApi) => {
        const userName = localStorageUtils.getAuth();
        if (userName) {
            const userInfo = localStorageUtils.getUser(userName);
            listenerApi.dispatch(logIn(userInfo));
            listenerApi.dispatch(setHistory(userInfo?.history));
            listenerApi.dispatch(setFavorites(userInfo?.favorites));
        }
    },
});

userStateSyncMiddleware.startListening({
    actionCreator: logIn,
    effect: (action) => {
        localStorageUtils.setItem(action.payload.userName, action.payload);
        localStorageUtils.setAuth(action.payload.userName);
    },
});

userStateSyncMiddleware.startListening({
    actionCreator: search,
    effect: (action, listenerApi) => {
        const { user, query } = action.payload;
        if (user) {
            if (query === "") {
                return;
            }
            const currentHistory = localStorageUtils.getSearchHistory(user);

            const historyRecord: HistoryRecord = {
                id: uuidv4(),
                query: query,
                timestamp: new Date().toLocaleString(),
                queryResultLink: `/search/${query}`,
            };
            const updatedHistory = currentHistory
                ? [historyRecord, ...currentHistory]
                : [historyRecord];
            localStorageUtils.setSearchHistory(user, updatedHistory);
            listenerApi.dispatch(updateHistory(historyRecord));
        }
    },
});

userStateSyncMiddleware.startListening({
    actionCreator: addFavorite,
    effect: (action) => {
        const userName = localStorageUtils.getAuth();
        if (userName) {
            localStorageUtils.addFavorite(userName, action.payload);
        }
    },
});

userStateSyncMiddleware.startListening({
    actionCreator: deleteFavorite,
    effect: (action) => {
        const userName = localStorageUtils.getAuth();
        if (userName) {
            localStorageUtils.deleteFavorite(userName, action.payload);
        }
    },
});

export { userStateSyncMiddleware };
