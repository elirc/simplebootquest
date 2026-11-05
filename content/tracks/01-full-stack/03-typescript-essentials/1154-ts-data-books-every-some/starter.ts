interface Book {
  id: number;
  title: string;
  pages: number;
  year: number;
  genre: "fiction" | "classic" | "tech" | "sci-fi";
  available: boolean;
}

export function allBooksUnder(books: Book[], limit: number): boolean {
  // TODO
  return 0 as any;
}
