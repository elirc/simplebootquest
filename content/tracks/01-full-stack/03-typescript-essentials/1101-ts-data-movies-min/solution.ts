interface Movie {
  id: number;
  title: string;
  year: number;
  minutes: number;
  rating: number;
  genre: "drama" | "comedy" | "sci-fi" | "thriller";
}

export function lowestMinutes(movies: Movie[]): string | null {
  let best = null;
  for (const x of movies) if (best === null || x.minutes < best.minutes) best = x;
  return best ? best.title : null;
}
