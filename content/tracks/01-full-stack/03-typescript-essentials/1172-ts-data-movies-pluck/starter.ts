interface Movie {
  id: number;
  title: string;
  year: number;
  minutes: number;
  rating: number;
  genre: "drama" | "comedy" | "sci-fi" | "thriller";
}

export function summariseMovies(movies: Movie[]): { id: number; title: string; minutes: number }[] {
  // TODO
  return {} as any;
}
