import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import "./App.css";
import { ExtraInfo } from "./pages/ExtraInfo";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<ExtraInfo />} />
        </Routes>
    );
}

export { App };
