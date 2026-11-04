function fibIterative(n) {}

function fibMemo(n, memo = new Map()) {
  // TODO: this naive version is correct but far too slow for n = 80.
  // Add memoisation before running the tests!
  if (n < 2) return n;
  if (n > 30) return -1; // safety net so the naive version doesn't hang your browser
  return fibMemo(n - 1) + fibMemo(n - 2);
}

function fibSequence(count) {}
