const EVENTS = [
  {id: 1, name: "Workshop", capacity: 39, registered: 249, format: "hybrid", free: true},
  {id: 2, name: "Hackathon", capacity: 279, registered: 154, format: "hybrid", free: false},
  {id: 3, name: "Code Dojo", capacity: 291, registered: 10, format: "hybrid", free: true},
  {id: 4, name: "Demo Day", capacity: 391, registered: 370, format: "in-person", free: false},
  {id: 5, name: "JS Meetup", capacity: 149, registered: 7, format: "in-person", free: true},
  {id: 6, name: "Book Club", capacity: 98, registered: 169, format: "hybrid", free: false}
];

test('ascending first', () => {
  const ui = mount(<EventSorter items={EVENTS} />);
  expect(ui.findAll('li').map(text)).toEqual(["Workshop","Book Club","JS Meetup","Hackathon","Code Dojo","Demo Day"]);
  expect(text(ui.find('button'))).toBe('Sort descending');
});

test('toggles', () => {
  const ui = mount(<EventSorter items={EVENTS} />);
  ui.click('button');
  expect(ui.findAll('li').map(text)).toEqual(["Demo Day","Code Dojo","Hackathon","JS Meetup","Book Club","Workshop"]);
  expect(text(ui.find('button'))).toBe('Sort ascending');
});

test('does not mutate props', () => {
  const before = JSON.stringify(EVENTS);
  const ui = mount(<EventSorter items={EVENTS} />);
  ui.click('button');
  expect(JSON.stringify(EVENTS)).toBe(before);
});
