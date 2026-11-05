export function averagePages(books) {
  if (books.length === 0) return null;
  const total = books.reduce((sum, x) => sum + x.pages, 0);
  return Math.round((total / books.length) * 10) / 10;
}
