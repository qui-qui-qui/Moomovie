import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import { Loader } from "../components/Loader";
import {
    ExtraInfoPageLazy,
    FavoritesPageLazy,
    HistoryPageLazy,
    HomePageLazy,
    LogInPageLazy,
    SearchPageLazy,
    SignUpPageLazy,
} from "../routing/lazy";
import { NotFoundPage } from "./NotFoundPage";
import { ErrorBoundary } from "../components/ErrorBoundary";
import { PrivateOutlet } from "../routing/PrivateOutlet";

function MainPage() {
    return (
        <BrowserRouter>
            <ErrorBoundary>
                <Suspense fallback={<Loader />}>
                    <Routes>
                        <Route path="/" element={<HomePageLazy />} />
                        <Route path="/:id" element={<ExtraInfoPageLazy />} />
                        <Route
                            path="/search/:query"
                            element={<SearchPageLazy />}
                        />
                        <Route path="/login" element={<LogInPageLazy />} />
                        <Route path="/signup" element={<SignUpPageLazy />} />
                        <Route path="/history" element={<PrivateOutlet />}>
                            <Route index element={<HistoryPageLazy />} />
                        </Route>

                        <Route path="/favorites" element={<PrivateOutlet />}>
                            <Route index element={<FavoritesPageLazy />} />
                        </Route>
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </Suspense>
            </ErrorBoundary>
        </BrowserRouter>
    );
}

export { MainPage };
