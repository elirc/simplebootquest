function sumDigits(n) {
  if (n < 10) return n;
  return (n % 10) + sumDigits(Math.floor(n / 10));
}

function flatten(array) {
  const out = [];
  for (const item of array) {
    if (Array.isArray(item)) out.push(...flatten(item));
    else out.push(item);
  }
  return out;
}

function countFiles(node) {
  if (node.type === 'file') return 1;
  let total = 0;
  for (const child of node.children) total += countFiles(child);
  return total;
}
