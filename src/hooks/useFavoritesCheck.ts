import { useSelector } from "react-redux";
import { getFavorites } from "../redux/slices/favoritesSlice";

export const useFavoritesCheck = (id: string | undefined): boolean => {
    const favorites = useSelector(getFavorites);

    return !!favorites.find((item) => item.imdbID === id);
};
