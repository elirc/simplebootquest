interface Movie {
  id: number;
  title: string;
  year: number;
  minutes: number;
  rating: number;
  genre: "drama" | "comedy" | "sci-fi" | "thriller";
}

export function lowestMinutes(movies: Movie[]): string | null {
  // TODO
  return 0 as any;
}
