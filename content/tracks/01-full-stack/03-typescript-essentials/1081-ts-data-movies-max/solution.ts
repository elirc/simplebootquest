interface Movie {
  id: number;
  title: string;
  year: number;
  minutes: number;
  rating: number;
  genre: "drama" | "comedy" | "sci-fi" | "thriller";
}

export function highestRating(movies: Movie[]): string | null {
  let best = null;
  for (const x of movies) if (best === null || x.rating > best.rating) best = x;
  return best ? best.title : null;
}
