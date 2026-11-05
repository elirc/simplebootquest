const data = { user: { name: 'Ada', plan: '' }, count: 3 };
test('replaces paths', () => expect(renderTemplate('Hi {{ user.name }}, you have {{count}} items', data)).toBe('Hi Ada, you have 3 items'));
test('missing values are empty', () => expect(renderTemplate('[{{ user.age }}]', data)).toBe('[]'));
test('filters', () => {
  expect(renderTemplate('{{ user.name | upper }}', data)).toBe('ADA');
  expect(renderTemplate('Plan: {{ user.plan | default:"free" }}', data)).toBe('Plan: free');
});
