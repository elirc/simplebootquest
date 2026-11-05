interface Book {
  id: number;
  title: string;
  pages: number;
  year: number;
  genre: "fiction" | "classic" | "tech" | "sci-fi";
  available: boolean;
}

export function averagePages(books: Book[]): number | null {
  if (books.length === 0) return null;
  const total = books.reduce((sum, x) => sum + x.pages, 0);
  return Math.round((total / books.length) * 10) / 10;
}
