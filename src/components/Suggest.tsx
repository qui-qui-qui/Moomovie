import { Link } from "react-router-dom";
import { MovieInfo } from "../models/Movie";

type SearchResultsListProps = {
    results: MovieInfo[] | null;
};

function SuggestList({ results }: SearchResultsListProps) {
    return (
        <div className="absolute z-[1000] m-auto left-0 right-0 w-96 list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block">
            {results &&
                results.map((result) => (
                    <Link
                        to={`/:${result.imdbID}`}
                        className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                        key={result.imdbID}
                    >
                        {result.Title}
                    </Link>
                ))}
        </div>
    );
}

export { SuggestList };
