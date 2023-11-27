import { FilmsList } from "../components/FilmsList";
import { Navbar } from "../components/Navbar";
import { SearchBar } from "../components/SearchBar";
import { useGetFilmsQuery } from "../services/FilmService";
import { Loader } from "./Loader";

function Home() {
    const { data: initFilms, isLoading } = useGetFilmsQuery("");
    return (
        <>
            <Navbar />
            <SearchBar />
            {isLoading ? <Loader /> : <FilmsList search={initFilms} />}
        </>
    );
}

export { Home };
