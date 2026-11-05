function splitBill(totalCents, people, tipPercent = 0) {
  if (people < 1) throw new RangeError('Need at least one person');
  const total = Math.round(totalCents * (1 + tipPercent / 100));
  const base = Math.floor(total / people);
  const remainder = total - base * people;
  return Array.from({ length: people }, (_, i) => base + (i < remainder ? 1 : 0));
}
