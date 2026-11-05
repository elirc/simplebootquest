interface Movie {
  id: number;
  title: string;
  year: number;
  minutes: number;
  rating: number;
  genre: "drama" | "comedy" | "sci-fi" | "thriller";
}

export function averageRating(movies: Movie[]): number | null {
  // TODO
  return 0 as any;
}
