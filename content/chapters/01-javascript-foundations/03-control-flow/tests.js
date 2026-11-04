test('fizzBuzz(5)', () => {
  expect(fizzBuzz(5)).toEqual([1, 2, 'Fizz', 4, 'Buzz']);
});

test('fizzBuzz(15) ends with FizzBuzz', () => {
  const out = fizzBuzz(15);
  expect(out).toHaveLength(15);
  expect(out[14]).toBe('FizzBuzz');
  expect(out[8]).toBe('Fizz');
});

test('fizzBuzz(0) is empty', () => {
  expect(fizzBuzz(0)).toEqual([]);
});

test('letter grades at the boundaries', () => {
  expect(letterGrade(100)).toBe('A');
  expect(letterGrade(90)).toBe('A');
  expect(letterGrade(89)).toBe('B');
  expect(letterGrade(70)).toBe('C');
  expect(letterGrade(60)).toBe('D');
  expect(letterGrade(0)).toBe('F');
});

test('rejects invalid scores', () => {
  expect(letterGrade(101)).toBe('Invalid');
  expect(letterGrade(-1)).toBe('Invalid');
  expect(letterGrade('95')).toBe('Invalid');
});
