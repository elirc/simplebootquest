interface Movie {
  id: number;
  title: string;
  year: number;
  minutes: number;
  rating: number;
  genre: "drama" | "comedy" | "sci-fi" | "thriller";
}

export function moviesAbove(movies: Movie[], min: number): string[] {
  // TODO
  return [] as any;
}
