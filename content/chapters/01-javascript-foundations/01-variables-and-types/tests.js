test('converts freezing point', () => {
  expect(celsiusToFahrenheit(0)).toBe(32);
});

test('converts boiling point', () => {
  expect(celsiusToFahrenheit(100)).toBe(212);
});

test('handles negatives', () => {
  expect(celsiusToFahrenheit(-40)).toBe(-40);
});

test('describes a temperature with a template literal', () => {
  expect(describeTemperature(20)).toBe('20°C is 68°F');
});
