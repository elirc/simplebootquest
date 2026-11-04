function parseAge(input) {
  const age = Number(input);
  if (Number.isNaN(age)) throw new TypeError('Age must be a number');
  if (age < 0 || age > 150) throw new RangeError('Age must be between 0 and 150');
  return age;
}

function divide(a, b) {
  if (b === 0) throw new Error('Cannot divide by zero');
  return a / b;
}

function safeDivide(a, b) {
  try {
    return { ok: true, value: divide(a, b) };
  } catch (err) {
    return { ok: false, error: err.message };
  }
}

function withCleanup(fn, log) {
  try {
    return fn();
  } finally {
    log('done');
  }
}
