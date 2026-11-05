function movingAverage(values, size) {
  const out = [];
  let windowSum = 0;
  values.forEach((v, i) => {
    windowSum += v;
    if (i >= size) windowSum -= values[i - size];
    if (i >= size - 1) out.push(Math.round((windowSum / size) * 100) / 100);
  });
  return out;
}

function runningTotals(values) {
  let total = 0;
  return values.map((v) => (total += v));
}
