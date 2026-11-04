function collatzSteps(n) {
  let steps = 0;
  while (n !== 1) {
    n = n % 2 === 0 ? n / 2 : 3 * n + 1;
    steps++;
  }
  return steps;
}

function doublingsToReach(start, target) {
  let count = 0;
  let value = start;
  while (value < target) {
    value *= 2;
    count++;
  }
  return count;
}

function digitsOf(n) {
  if (n === 0) return [0];
  const digits = [];
  while (n > 0) {
    digits.unshift(n % 10);
    n = Math.floor(n / 10);
  }
  return digits;
}
