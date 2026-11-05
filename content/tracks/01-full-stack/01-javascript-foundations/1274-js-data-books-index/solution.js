export function booksById(books) {
  const byId = {};
  for (const x of books) byId[x.id] = x.title;
  return byId;
}
