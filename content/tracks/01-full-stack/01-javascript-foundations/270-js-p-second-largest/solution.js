function secondLargest(numbers) {
  let first = -Infinity;
  let second = -Infinity;
  for (const n of numbers) {
    if (n > first) {
      second = first;
      first = n;
    } else if (n > second && n < first) {
      second = n;
    }
  }
  return second === -Infinity ? undefined : second;
}
