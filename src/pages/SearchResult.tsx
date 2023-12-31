import { useParams } from "react-router-dom";
import { FilmsList } from "../components/FilmsList";
import { Navbar } from "../components/Navbar";
import { SearchBar } from "../components/SearchBar";
import { useGetFilmsByTitleQuery } from "../redux/services/filmService";
import { Loader } from "../components/Loader";

function SearchResult() {
    const { query } = useParams();
    const { data, isLoading } = useGetFilmsByTitleQuery(query);

    return (
        <>
            <Navbar />
            <SearchBar />
            {isLoading ? <Loader /> : <FilmsList search={data} />}
        </>
    );
}

export { SearchResult };
