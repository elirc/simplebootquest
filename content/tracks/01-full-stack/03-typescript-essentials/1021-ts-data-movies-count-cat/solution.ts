interface Movie {
  id: number;
  title: string;
  year: number;
  minutes: number;
  rating: number;
  genre: "drama" | "comedy" | "sci-fi" | "thriller";
}

export function countMoviesByGenre(movies: Movie[], value: string): number {
  let count = 0;
  for (const x of movies) if (x.genre === value) count++;
  return count;
}
