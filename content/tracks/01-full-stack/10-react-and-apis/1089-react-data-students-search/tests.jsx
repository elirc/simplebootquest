const STUDENTS = [
  {id: 1, name: "Chen", score: 48, age: 29, course: "web", graduated: true},
  {id: 2, name: "Amara", score: 87, age: 34, course: "data", graduated: true},
  {id: 3, name: "Bilal", score: 94, age: 17, course: "data", graduated: true},
  {id: 4, name: "Luca", score: 58, age: 25, course: "data", graduated: true},
  {id: 5, name: "Dara", score: 80, age: 17, course: "design", graduated: false}
];
const search = vi.fn(async (q) => STUDENTS.filter((x) => x.name.toLowerCase().includes(q.toLowerCase())));

test('searches on submit', async () => {
  const ui = mount(<StudentSearch search={search} />);
  ui.type('input', '  ch ');
  await ui.act(async () => ui.submit('form'));
  await waitFor(() => expect(ui.text()).toContain('1 results'));
  expect(ui.findAll('li').map(text)).toEqual(["Chen"]);
  expect(search).toHaveBeenCalledWith('ch');
});

test('ignores blank queries', () => {
  const spy = vi.fn(async () => []);
  const ui = mount(<StudentSearch search={spy} />);
  ui.type('input', '   ');
  ui.submit('form');
  expect(spy).not.toHaveBeenCalled();
});

test('disables the button while searching', async () => {
  let finish;
  const slow = () => new Promise((r) => (finish = r));
  const ui = mount(<StudentSearch search={slow} />);
  ui.type('input', 'x');
  ui.submit('form');
  await waitFor(() => expect(ui.find('button').props.disabled).toBe(true));
  finish([]);
  await waitFor(() => expect(ui.find('button').props.disabled).toBe(false));
});
