import { FilmsList } from "../components/FilmsList";
import { Navbar } from "../components/Navbar";
import { SearchBar } from "../components/SearchBar";
import { useGetFilmsQuery } from "../redux/services/filmService";
import { Loader } from "../components/Loader";

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
