const rows = [{ name: 'Pen, blue', qty: 2 }, { name: 'Say "hi"', qty: 1 }];
test('csv', () => {
  expect(new CsvExporter(['name', 'qty']).export(rows)).toBe('name,qty\n"Pen, blue",2\n"Say ""hi""",1');
});
test('markdown', () => {
  expect(new MarkdownExporter(['name', 'qty']).export([{ name: 'Pen', qty: 2 }])).toBe('| name | qty |\n| --- | --- |\n| Pen | 2 |');
});
test('shared algorithm', () => expect(new CsvExporter(['qty']).export([])).toBe('qty'));
