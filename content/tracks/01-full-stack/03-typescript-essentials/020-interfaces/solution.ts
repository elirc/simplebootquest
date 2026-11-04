interface Book {
  id: number;
  title: string;
  dueDate?: string;
}

export function isOverdue(book: Book, today: string): boolean {
  return book.dueDate !== undefined && book.dueDate < today;
}

export function checkout(book: Book, today: string, days: number): Book {
  const date = new Date(`${today}T00:00:00Z`);
  date.setUTCDate(date.getUTCDate() + days);
  return { ...book, dueDate: date.toISOString().slice(0, 10) };
}

export function overdueTitles(books: Book[], today: string): string[] {
  return books
    .filter((b) => isOverdue(b, today))
    .map((b) => b.title)
    .sort((a, b) => a.localeCompare(b));
}
