interface Movie {
  id: number;
  title: string;
  year: number;
  minutes: number;
  rating: number;
  genre: "drama" | "comedy" | "sci-fi" | "thriller";
}

export function countMoviesByGenre(movies: Movie[], value: string): number {
  // TODO
  return 0 as any;
}
