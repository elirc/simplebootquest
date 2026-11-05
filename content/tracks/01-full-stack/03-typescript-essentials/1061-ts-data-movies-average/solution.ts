interface Movie {
  id: number;
  title: string;
  year: number;
  minutes: number;
  rating: number;
  genre: "drama" | "comedy" | "sci-fi" | "thriller";
}

export function averageRating(movies: Movie[]): number | null {
  if (movies.length === 0) return null;
  const total = movies.reduce((sum, x) => sum + x.rating, 0);
  return Math.round((total / movies.length) * 10) / 10;
}
