interface Book {
  id: number;
  title: string;
  pages: number;
  year: number;
  genre: "fiction" | "classic" | "tech" | "sci-fi";
  available: boolean;
}

export function countBooksByGenre(books: Book[], value: string): number {
  // TODO
  return 0 as any;
}
