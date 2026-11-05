interface Book {
  id: number;
  title: string;
  pages: number;
  year: number;
  genre: "fiction" | "classic" | "tech" | "sci-fi";
  available: boolean;
}

export function percentAvailable(books: Book[]): number {
  if (books.length === 0) return 0;
  return Math.round((books.filter((x) => x.available).length / books.length) * 100);
}
