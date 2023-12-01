import { FilmInfo } from "../components/FilmInfo";
import { Navbar } from "../components/Navbar";

function ExtraInfo() {
    return (
        <div className="dark:bg-slate-200 h-screen">
            <Navbar />
            <FilmInfo />
        </div>
    );
}

export { ExtraInfo };
