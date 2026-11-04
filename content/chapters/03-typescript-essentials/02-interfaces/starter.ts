interface Book {
  id: number;
  title: string;
  dueDate?: string;
}

export function isOverdue(book: Book, today: string): boolean {
  // TODO
  return false;
}

export function checkout(book: Book, today: string, days: number): Book {
  // TODO
  return book;
}

export function overdueTitles(books: Book[], today: string): string[] {
  // TODO
  return [];
}
