interface Book {
  id: number;
  title: string;
  pages: number;
  year: number;
  genre: "fiction" | "classic" | "tech" | "sci-fi";
  available: boolean;
}

export function averagePages(books: Book[]): number | null {
  // TODO
  return 0 as any;
}
