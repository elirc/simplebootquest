function isCloseTo(received, expected, numDigits = 2) {
  if (Number.isNaN(received) || Number.isNaN(expected)) return false;
  if (received === Infinity && expected === Infinity) return true;
  if (received === -Infinity && expected === -Infinity) return true;
  return Math.abs(expected - received) < 10 ** -numDigits / 2;
}

function closeToMessage(received, expected, numDigits = 2) {
  if (isCloseTo(received, expected, numDigits)) return null;
  const tolerance = 10 ** -numDigits / 2;
  return `expected ${received} to be close to ${expected} (± ${tolerance}), difference ${Math.abs(expected - received)}`;
}
