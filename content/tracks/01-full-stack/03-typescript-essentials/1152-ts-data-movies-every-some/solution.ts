interface Movie {
  id: number;
  title: string;
  year: number;
  minutes: number;
  rating: number;
  genre: "drama" | "comedy" | "sci-fi" | "thriller";
}

export function allMoviesUnder(movies: Movie[], limit: number): boolean {
  return movies.every((x) => x.rating < limit);
}
