const EMPLOYEES = [
  {id: 1, name: "Frances", salary: 47148, yearsAtCompany: 4, team: "product", level: "junior", remote: false},
  {id: 2, name: "Dennis", salary: 116139, yearsAtCompany: 10, team: "product", level: "junior", remote: true},
  {id: 3, name: "Radia", salary: 96335, yearsAtCompany: 13, team: "product", level: "mid", remote: true},
  {id: 4, name: "Alan", salary: 134299, yearsAtCompany: 1, team: "data", level: "junior", remote: true},
  {id: 5, name: "Ken", salary: 100275, yearsAtCompany: 11, team: "platform", level: "junior", remote: true}
];
const search = vi.fn(async (q) => EMPLOYEES.filter((x) => x.name.toLowerCase().includes(q.toLowerCase())));

test('searches on submit', async () => {
  const ui = mount(<EmployeeSearch search={search} />);
  ui.type('input', '  fr ');
  await ui.act(async () => ui.submit('form'));
  await waitFor(() => expect(ui.text()).toContain('1 results'));
  expect(ui.findAll('li').map(text)).toEqual(["Frances"]);
  expect(search).toHaveBeenCalledWith('fr');
});

test('ignores blank queries', () => {
  const spy = vi.fn(async () => []);
  const ui = mount(<EmployeeSearch search={spy} />);
  ui.type('input', '   ');
  ui.submit('form');
  expect(spy).not.toHaveBeenCalled();
});

test('disables the button while searching', async () => {
  let finish;
  const slow = () => new Promise((r) => (finish = r));
  const ui = mount(<EmployeeSearch search={slow} />);
  ui.type('input', 'x');
  ui.submit('form');
  await waitFor(() => expect(ui.find('button').props.disabled).toBe(true));
  finish([]);
  await waitFor(() => expect(ui.find('button').props.disabled).toBe(false));
});
