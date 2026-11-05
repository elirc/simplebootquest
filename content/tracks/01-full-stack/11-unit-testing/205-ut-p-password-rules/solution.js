test('a strong password has no problems', () => {
  expect(passwordProblems('Correct-Horse-9')).toEqual([]);
});
test('length boundary', () => {
  expect(passwordProblems('Abcdefghij1')).toEqual(['too short']);
  expect(passwordProblems('Abcdefghijk1')).toEqual([]);
});
test('needs a number', () => expect(passwordProblems('Abcdefghijklm')).toEqual(['needs a number']));
test('needs an uppercase letter', () => expect(passwordProblems('abcdefghijk1')).toEqual(['needs an uppercase letter']));
test('rejects "password" in any case', () => {
  expect(passwordProblems('MyPassWord123')).toEqual(['contains "password"']);
  expect(passwordProblems('xxpasswordXX1')).toEqual(['contains "password"']);
});
test('reports several problems in order', () => expect(passwordProblems('password')).toEqual(['too short', 'needs a number', 'needs an uppercase letter', 'contains "password"']));
