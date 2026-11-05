function binarySearch(sorted, target) {
  let lo = 0;
  let hi = sorted.length - 1;
  let steps = 0;
  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);
    steps++;
    if (sorted[mid] === target) return [mid, steps];
    if (sorted[mid] < target) lo = mid + 1;
    else hi = mid - 1;
  }
  return [-1, steps];
}
