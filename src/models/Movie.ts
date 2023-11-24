export interface MovieInfo {
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

export interface Movie {
    Search: MovieInfo[];
    totalResults: string;
}
