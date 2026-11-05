const STUDENTS = [
  {id: 1, name: "Chen", score: 48, age: 29, course: "web", graduated: true},
  {id: 2, name: "Amara", score: 87, age: 34, course: "data", graduated: true},
  {id: 3, name: "Bilal", score: 94, age: 17, course: "data", graduated: true},
  {id: 4, name: "Luca", score: 58, age: 25, course: "data", graduated: true},
  {id: 5, name: "Dara", score: 80, age: 17, course: "design", graduated: false}
];

test('only the latest results win', async () => {
  const signals = [];
  const search = (q, signal) => {
    signals.push(signal);
    const delay = q === 'a' ? 40 : 2;
    return new Promise((r) => setTimeout(() => r(STUDENTS.filter((x) => x.name.toLowerCase().includes(q))), delay));
  };
  const ui = mount(<LiveStudentSearch search={search} />);
  ui.type('input', 'a');
  ui.type('input', "ch");
  await sleep(80);
  await waitFor(() => expect(ui.findAll('li').map(text)).toEqual(["Chen"]));
  expect(signals[1].aborted).toBe(true);
});
