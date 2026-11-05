function makeChange(cents) {
  const coins = [200, 100, 50, 20, 10, 5, 2, 1];
  const result = {};
  let left = cents;
  for (const coin of coins) {
    const count = Math.floor(left / coin);
    if (count > 0) {
      result[coin] = count;
      left -= count * coin;
    }
  }
  return result;
}
