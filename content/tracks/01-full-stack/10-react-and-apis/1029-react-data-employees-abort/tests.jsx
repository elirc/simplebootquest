const EMPLOYEES = [
  {id: 1, name: "Frances", salary: 47148, yearsAtCompany: 4, team: "product", level: "junior", remote: false},
  {id: 2, name: "Dennis", salary: 116139, yearsAtCompany: 10, team: "product", level: "junior", remote: true},
  {id: 3, name: "Radia", salary: 96335, yearsAtCompany: 13, team: "product", level: "mid", remote: true},
  {id: 4, name: "Alan", salary: 134299, yearsAtCompany: 1, team: "data", level: "junior", remote: true},
  {id: 5, name: "Ken", salary: 100275, yearsAtCompany: 11, team: "platform", level: "junior", remote: true}
];

test('only the latest results win', async () => {
  const signals = [];
  const search = (q, signal) => {
    signals.push(signal);
    const delay = q === 'a' ? 40 : 2;
    return new Promise((r) => setTimeout(() => r(EMPLOYEES.filter((x) => x.name.toLowerCase().includes(q))), delay));
  };
  const ui = mount(<LiveEmployeeSearch search={search} />);
  ui.type('input', 'a');
  ui.type('input', "fr");
  await sleep(80);
  await waitFor(() => expect(ui.findAll('li').map(text)).toEqual(["Frances"]));
  expect(signals[1].aborted).toBe(true);
});
