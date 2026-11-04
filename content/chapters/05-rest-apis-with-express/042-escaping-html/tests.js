const out = (v) => (typeof v === 'string' ? v : v.value);

test('escapeHtml', () => {
  expect(escapeHtml(`<a href="x">Tom & Jerry's</a>`)).toBe('&lt;a href=&quot;x&quot;&gt;Tom &amp; Jerry&#39;s&lt;/a&gt;');
});

test('html escapes interpolations', () => {
  const comment = '<script>alert(1)</script>';
  expect(out(html`<p>${comment}</p>`)).toBe('<p>&lt;script&gt;alert(1)&lt;/script&gt;</p>');
});

test('raw and nesting', () => {
  const items = ['a<b', 'c'];
  const list = html`<ul>${items.map((i) => html`<li>${i}</li>`)}</ul>`;
  expect(out(list)).toBe('<ul><li>a&lt;b</li><li>c</li></ul>');
  expect(out(html`${raw('<b>ok</b>')}`)).toBe('<b>ok</b>');
});

test('empty values', () => {
  expect(out(html`[${null}${undefined}${false}${0}]`)).toBe('[0]');
});
