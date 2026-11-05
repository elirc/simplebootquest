const cases = [
  ['correct horse battery staple', true],
];

for (const [password, expected] of cases) {
  test(`isStrongPassword(${JSON.stringify(password)}) is ${expected}`, () => {
    expect(isStrongPassword(password)).toBe(expected);
  });
}
