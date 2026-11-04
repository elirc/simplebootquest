test('timer ticks three times', () => {
  timer.ticks = 0;
  timer.start();
  expect(timer.ticks).toBe(3);
});

test('detached click handler still works', () => {
  const button = createButton('Save');
  const handler = button.onClick;
  expect(handler()).toBe('Clicked Save');
});

test('boundGreet', () => {
  const person = { name: 'Ada', greet() { return `Hi, I'm ${this.name}`; } };
  const greet = boundGreet(person);
  expect(greet()).toBe("Hi, I'm Ada");
});
