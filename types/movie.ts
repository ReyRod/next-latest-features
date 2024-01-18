export type Pagination = {
    page: number;
    total_pages: number;
    total_results: number;
};

export type Movie = {
    id: number;
    title: string;
    poster_path: string;
    backdrop_path: string;
};

export type MoviesResponse = Pagination & {
    results: Movie[];
};

