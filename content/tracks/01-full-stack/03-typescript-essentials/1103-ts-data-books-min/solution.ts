interface Book {
  id: number;
  title: string;
  pages: number;
  year: number;
  genre: "fiction" | "classic" | "tech" | "sci-fi";
  available: boolean;
}

export function lowestPages(books: Book[]): string | null {
  let best = null;
  for (const x of books) if (best === null || x.pages < best.pages) best = x;
  return best ? best.title : null;
}
