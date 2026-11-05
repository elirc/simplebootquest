const STUDENTS = [
  {id: 1, name: "Chen", score: 48, age: 29, course: "web", graduated: true},
  {id: 2, name: "Amara", score: 87, age: 34, course: "data", graduated: true},
  {id: 3, name: "Bilal", score: 94, age: 17, course: "data", graduated: true},
  {id: 4, name: "Luca", score: 58, age: 25, course: "data", graduated: true},
  {id: 5, name: "Dara", score: 80, age: 17, course: "design", graduated: false}
];
const loadPage = vi.fn(async (page) => ({ items: STUDENTS.slice((page - 1) * 2, page * 2), hasMore: page * 2 < STUDENTS.length }));

test('loads pages and appends', async () => {
  const ui = mount(<StudentFeed loadPage={loadPage} />);
  await waitFor(() => expect(ui.findAll('li').length).toBe(2));
  ui.click(ui.getByText('Load more'));
  await waitFor(() => expect(ui.findAll('li').length).toBe(4));
  ui.click(ui.getByText('Load more'));
  await waitFor(() => expect(ui.findAll('li').map(text)).toEqual(["Chen","Amara","Bilal","Luca","Dara"]));
  expect(ui.find('button')).toBeUndefined();
});
