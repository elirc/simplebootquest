function sumAll(...numbers) {
  let total = 0;
  for (const n of numbers) total += n;
  return total;
}

function joinWith(separator, ...parts) {
  return parts.filter((p) => p !== '' && p !== null && p !== undefined).join(separator);
}

function maxOf(numbers) {
  return Math.max(...numbers);
}
