interface Movie {
  id: number;
  title: string;
  year: number;
  minutes: number;
  rating: number;
  genre: "drama" | "comedy" | "sci-fi" | "thriller";
}

export function allMoviesUnder(movies: Movie[], limit: number): boolean {
  // TODO
  return 0 as any;
}
