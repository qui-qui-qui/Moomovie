import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logIn } from "../slices/authSlice";
import { setFavorites } from "../slices/favoritesSlice";
import { setHistory } from "../slices/historySlice";
import { localStorageUtils } from "../../utils/localStorage";

type UserInfo = {
    userName: string;
    password: string;
};

type Hooks = {
    navigate: ReturnType<typeof useNavigate>;
    dispatch: ReturnType<typeof useDispatch>;
};
export function handleSignUp({ navigate, dispatch }: Hooks, user: UserInfo) {
    const existingUser = localStorageUtils.getUser(user.userName);
    if (!existingUser) {
        const userInfo = { ...user, history: [], favorites: [] };

        dispatch(logIn(userInfo));
        dispatch(setFavorites(userInfo.favorites));
        dispatch(setHistory(userInfo.history));
        navigate("/");
        return true;
    }

    return false;
}

export function handleLogIn({ navigate, dispatch }: Hooks, user: UserInfo) {
    const userInfo = localStorageUtils.getUser(user.userName);
    let result = { invalidLogin: true, invalidPassword: true };

    if (!userInfo) {
        result = { invalidLogin: true, invalidPassword: false };
    } else if (userInfo.password !== user.password) {
        result = { invalidLogin: false, invalidPassword: true };
    } else {
        dispatch(logIn(userInfo));
        dispatch(setHistory(userInfo?.history));
        dispatch(setFavorites(userInfo?.favorites));
        result = { invalidLogin: false, invalidPassword: false };
        navigate("/");
    }

    return result;
}
