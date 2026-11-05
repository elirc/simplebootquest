const EMPLOYEES = [
  {id: 1, name: "Frances", salary: 47148, yearsAtCompany: 4, team: "product", level: "junior", remote: false},
  {id: 2, name: "Dennis", salary: 116139, yearsAtCompany: 10, team: "product", level: "junior", remote: true},
  {id: 3, name: "Radia", salary: 96335, yearsAtCompany: 13, team: "product", level: "mid", remote: true},
  {id: 4, name: "Alan", salary: 134299, yearsAtCompany: 1, team: "data", level: "junior", remote: true},
  {id: 5, name: "Ken", salary: 100275, yearsAtCompany: 11, team: "platform", level: "junior", remote: true}
];
const byId = (id) => EMPLOYEES.find((x) => x.id === id);

test('loads by id', async () => {
  const load = vi.fn(async (id) => byId(id));
  const ui = mount(<EmployeeDetail id={2} load={load} />);
  await waitFor(() => expect(text(ui.find('h2'))).toBe("Dennis"));
  expect(ui.text()).toContain("years at the company: 10");
});

test('reloads when the id changes', async () => {
  const load = vi.fn(async (id) => byId(id));
  const ui = mount(<EmployeeDetail id={1} load={load} />);
  await waitFor(() => expect(ui.find('h2')).toBeDefined());
  ui.rerender(<EmployeeDetail id={3} load={load} />);
  await waitFor(() => expect(text(ui.find('h2'))).toBe("Radia"));
  expect(load).toHaveBeenCalledWith(3);
});

test('ignores a slow response for an old id', async () => {
  const load = (id) => new Promise((r) => setTimeout(() => r(byId(id)), id === 1 ? 30 : 1));
  const ui = mount(<EmployeeDetail id={1} load={load} />);
  ui.rerender(<EmployeeDetail id={4} load={load} />);
  await sleep(60);
  await waitFor(() => expect(text(ui.find('h2'))).toBe("Alan"));
});
