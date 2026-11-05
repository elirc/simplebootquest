interface Movie {
  id: number;
  title: string;
  year: number;
  minutes: number;
  rating: number;
  genre: "drama" | "comedy" | "sci-fi" | "thriller";
}

export function moviesInRange(movies: Movie[], low: number, high: number): string[] {
  return movies.filter((x) => x.minutes >= low && x.minutes <= high).map((x) => x.title);
}
