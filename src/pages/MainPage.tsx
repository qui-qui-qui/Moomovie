import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { ExtraInfo } from "./ExtraInfo";
import { SearchResult } from "./SearchResult";
import { SignUp } from "./SignUpPage";
import { LogInPage } from "./LoginPage";
import { Favorites } from "./Favorites";
import { History } from "./History";

function MainPage() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:id" element={<ExtraInfo />} />
                <Route path="/search/:query" element={<SearchResult />} />
                <Route path="/login" element={<LogInPage />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/history" element={<History />} />
            </Routes>
        </BrowserRouter>
    );
}

export { MainPage };
