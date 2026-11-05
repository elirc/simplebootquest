interface Movie {
  id: number;
  title: string;
  year: number;
  minutes: number;
  rating: number;
  genre: "drama" | "comedy" | "sci-fi" | "thriller";
}

export function moviesAbove(movies: Movie[], min: number): string[] {
  return movies.filter((x) => x.rating > min).map((x) => x.title);
}
