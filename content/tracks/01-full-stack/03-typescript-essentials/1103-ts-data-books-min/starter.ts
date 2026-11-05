interface Book {
  id: number;
  title: string;
  pages: number;
  year: number;
  genre: "fiction" | "classic" | "tech" | "sci-fi";
  available: boolean;
}

export function lowestPages(books: Book[]): string | null {
  // TODO
  return 0 as any;
}
