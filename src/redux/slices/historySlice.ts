import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { HistoryRecord } from "../../models/HistoryRecord";

type InitialState = {
    history: HistoryRecord[];
};

const initialState: InitialState = {
    history: [],
};

export const history = createSlice({
    name: "HISTORY",
    initialState,
    reducers: {
        updateHistory: (state, action: PayloadAction<HistoryRecord>) => {
            state.history.unshift(action.payload);
        },
        setHistory: (state, action) => {
            state.history = action.payload;
        },
        clearHistory: (state) => {
            state.history = [];
        },
    },
});

export const { updateHistory, setHistory, clearHistory } = history.actions;
