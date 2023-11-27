import { useState } from "react";
import { useNavigate } from "react-router-dom";
function SearchBar() {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const searchKeyHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            searchHandler();
        }
    };

    const searchHandler = () => {
        if (query.length > 0) {
            navigate(`/search/${query}`);
        }
    };

    const SubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    return (
        <form
            onSubmit={SubmitHandler}
            className="grid place-items-center bg-gray-100 pt-12"
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
                    className="pr-80 block w-full p-4 ps-10 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none"
                    placeholder="Enter the film"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyUp={searchKeyHandler}
                />
                <button
                    onClick={searchHandler}
                    className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 active:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2"
                >
                    Search
                </button>
            </div>
        </form>
    );
}

export { SearchBar };
