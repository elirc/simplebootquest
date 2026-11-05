export function splitBooksByAvailable(books) {
  const yes = [];
  const no = [];
  for (const x of books) (x.available ? yes : no).push(x.title);
  return { yes, no };
}
