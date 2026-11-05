interface Book {
  id: number;
  title: string;
  pages: number;
  year: number;
  genre: "fiction" | "classic" | "tech" | "sci-fi";
  available: boolean;
}

export function booksAbove(books: Book[], min: number): string[] {
  return books.filter((x) => x.pages > min).map((x) => x.title);
}
