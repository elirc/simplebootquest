function sumEvens(numbers) {
  let total = 0;
  for (const n of numbers) {
    if (n % 2 === 0) total += n;
  }
  return total;
}

function largest(numbers) {
  if (numbers.length === 0) return undefined;
  let max = numbers[0];
  for (const n of numbers) {
    if (n > max) max = n;
  }
  return max;
}

function sortedCopy(numbers) {
  return [...numbers].sort((a, b) => a - b);
}
