const ITEMS = [{ label: 'Home', href: '/' }, { label: 'Projects', href: '/projects' }, { label: 'SimpleBootQuest', href: '/projects/sbq' }];
test('structure', () => {
  const el = render(<Breadcrumbs items={ITEMS} />);
  expect(el.type).toBe('nav');
  expect(el.props['aria-label']).toBe('Breadcrumb');
  expect(findAll(find(el, 'ol'), 'li').length).toBe(3);
});
test('links and current page', () => {
  const el = render(<Breadcrumbs items={ITEMS} />);
  expect(findAll(el, 'a').map((a) => [text(a), a.props.href])).toEqual([['Home', '/'], ['Projects', '/projects']]);
  const current = find(el, (n) => n.props['aria-current'] === 'page');
  expect(current.type).toBe('span');
  expect(text(current)).toBe('SimpleBootQuest');
});
test('separators are hidden and only between items', () => {
  const el = render(<Breadcrumbs items={ITEMS} />);
  const seps = findAll(el, (n) => n.props['aria-hidden'] === 'true');
  expect(seps.length).toBe(2);
  expect(seps.map(text)).toEqual(['/', '/']);
  expect(text(el)).toBe('Home/Projects/SimpleBootQuest');
});
test('single and empty', () => {
  const one = render(<Breadcrumbs items={[{ label: 'Home', href: '/' }]} />);
  expect(findAll(one, 'a').length).toBe(0);
  expect(renderAll(<Breadcrumbs items={[]} />)).toEqual([]);
});
