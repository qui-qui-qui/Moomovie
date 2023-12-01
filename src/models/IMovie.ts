export interface IMovieInfo {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
    Released: string;
    Director: string;
    Actors: string;
    Plot: string;
    Country: string;
    imdbRating: string;
}

export interface IMovie {
    Search: IMovieInfo[];
    totalResults: string;
}
