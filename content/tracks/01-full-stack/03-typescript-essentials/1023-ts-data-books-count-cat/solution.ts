interface Book {
  id: number;
  title: string;
  pages: number;
  year: number;
  genre: "fiction" | "classic" | "tech" | "sci-fi";
  available: boolean;
}

export function countBooksByGenre(books: Book[], value: string): number {
  let count = 0;
  for (const x of books) if (x.genre === value) count++;
  return count;
}
