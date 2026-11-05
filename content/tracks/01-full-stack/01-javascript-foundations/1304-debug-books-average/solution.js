export function averageYear(books) {
  if (books.length === 0) return null;
  const total = books.reduce((sum, x) => sum + x.year, 0);
  return Math.round((total / books.length) * 10) / 10;
}
