interface Book {
  id: number;
  title: string;
  pages: number;
  year: number;
  genre: "fiction" | "classic" | "tech" | "sci-fi";
  available: boolean;
}

export function booksInRange(books: Book[], low: number, high: number): string[] {
  return books.filter((x) => x.pages >= low && x.pages <= high).map((x) => x.title);
}
