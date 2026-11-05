interface Movie {
  id: number;
  title: string;
  year: number;
  minutes: number;
  rating: number;
  genre: "drama" | "comedy" | "sci-fi" | "thriller";
}

export function moviesInRange(movies: Movie[], low: number, high: number): string[] {
  // TODO
  return [] as any;
}
