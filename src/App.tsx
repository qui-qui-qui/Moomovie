import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import "./App.css";
import { ExtraInfo } from "./pages/ExtraInfo";
import { SearchResult } from "./pages/SearchResult";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<ExtraInfo />} />
            <Route path="/search/:query" element={<SearchResult />} />
        </Routes>
    );
}

export { App };
