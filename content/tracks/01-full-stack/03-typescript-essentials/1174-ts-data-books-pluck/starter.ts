interface Book {
  id: number;
  title: string;
  pages: number;
  year: number;
  genre: "fiction" | "classic" | "tech" | "sci-fi";
  available: boolean;
}

export function summariseBooks(books: Book[]): { id: number; title: string; year: number }[] {
  // TODO
  return {} as any;
}
