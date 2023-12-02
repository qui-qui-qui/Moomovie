import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useDebounce } from "../hooks/useDebounce";
import { search } from "../redux/actions/search";
import { getUserNameSelector } from "../redux/slices/authSlice";
import { MovieInfo } from "../models/Movie";
import { SuggestList } from "./Suggest";
import { fetchFilmsSuggest } from "../utils/fetchFilmsSuggest";
function SearchBar() {
    const user = useSelector(getUserNameSelector);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [query, setQuery] = useState(useParams().query || "");
    const [suggests, setSuggests] = useState<MovieInfo[] | null>(null);
    const debounce = useDebounce(query, 500);

    const inputRef = useRef<HTMLInputElement>(null);
    let isSubmitInvoked = false;

    const searchKeyHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            searchHandler();
        }
    };

    const dataSuggest = async (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
        if (isSubmitInvoked) {
            return;
        }
        if (e.target.value) {
            const response = await fetchFilmsSuggest(e.target.value, 5);
            setSuggests(response || null);
        } else {
            setSuggests(null);
        }
    };

    const searchHandler = () => {
        if (debounce) {
            dispatch(search({ user, query }));
            navigate(`/search/${debounce}`);
        }
        setQuery("");
        setSuggests(null);
    };

    const SubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        isSubmitInvoked = true;
    };

    return (
        <div>
            <form
                onSubmit={SubmitHandler}
                className="searchbar grid place-items-center bg-gray-100 pt-12 dark:bg-slate-400"
            >
                <label
                    htmlFor="default-search"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only"
                >
                    Search
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg
                            className="w-4 h-4 text-gray-500 "
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                        </svg>
                    </div>
                    <input
                        type="search"
                        id="default-search"
                        ref={inputRef}
                        className="pr-80 block w-full p-4 ps-10 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none"
                        placeholder="Enter the film"
                        value={query}
                        onChange={(e) => dataSuggest(e)}
                        onKeyUp={searchKeyHandler}
                    />
                    <button
                        onClick={searchHandler}
                        className="text-white absolute end-2.5 bottom-2.5 bg-blue-500 hover:bg-blue-600 active:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Search
                    </button>
                </div>
            </form>
            {suggests && <SuggestList results={suggests} />}
        </div>
    );
}

export { SearchBar };
