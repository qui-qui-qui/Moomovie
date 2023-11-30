import { HistoryRecord } from "./HistoryRecord";
import { MovieInfoWithId } from "./Movie";

export type User = {
    userName: string;
    password: string;
    favorites: MovieInfoWithId[];
    history: HistoryRecord[];
};
