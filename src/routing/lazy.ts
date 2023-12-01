import { lazy } from "react";

export const HomePageLazy = lazy(() =>
    import("../pages/Home").then((module) => ({ default: module.Home })),
);

export const SearchPageLazy = lazy(() =>
    import("../pages/SearchResult").then((module) => ({
        default: module.SearchResult,
    })),
);

export const ExtraInfoPageLazy = lazy(() =>
    import("../pages/ExtraInfo").then((module) => ({
        default: module.ExtraInfo,
    })),
);

export const LogInPageLazy = lazy(() =>
    import("../pages/LoginPage").then((module) => ({
        default: module.LogInPage,
    })),
);

export const SignUpPageLazy = lazy(() =>
    import("../pages/SignUpPage").then((module) => ({
        default: module.SignUp,
    })),
);

export const FavoritesPageLazy = lazy(() =>
    import("../pages/Favorites").then((module) => ({
        default: module.Favorites,
    })),
);

export const HistoryPageLazy = lazy(() =>
    import("../pages/History").then((module) => ({
        default: module.History,
    })),
);
