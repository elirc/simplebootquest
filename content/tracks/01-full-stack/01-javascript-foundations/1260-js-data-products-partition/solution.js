export function splitProductsByOnSale(products) {
  const yes = [];
  const no = [];
  for (const x of products) (x.onSale ? yes : no).push(x.name);
  return { yes, no };
}
