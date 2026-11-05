interface Book {
  id: number;
  title: string;
  pages: number;
  year: number;
  genre: "fiction" | "classic" | "tech" | "sci-fi";
  available: boolean;
}

export function totalPages(books: Book[]): number {
  return books.reduce((sum, x) => sum + x.pages, 0);
}
