const cases = [
  ['correct horse battery staple', true],
  ['abcdefghij12', true],
  ['ABCDEFGHIJ12', true],
  ['abcdefghij1', false],
  ['abcdefghijkl', false],
  ['123456789012', false],
  ['            ', false],
  ['abc def ghij', true],
  ['PASSWORD1234', false],
  ['Qwertyuiop12', false],
];

for (const [password, expected] of cases) {
  test(`isStrongPassword(${JSON.stringify(password)}) is ${expected}`, () => {
    expect(isStrongPassword(password)).toBe(expected);
  });
}
