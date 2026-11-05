interface Movie {
  id: number;
  title: string;
  year: number;
  minutes: number;
  rating: number;
  genre: "drama" | "comedy" | "sci-fi" | "thriller";
}

export function totalRating(movies: Movie[]): number {
  return movies.reduce((sum, x) => sum + x.rating, 0);
}
