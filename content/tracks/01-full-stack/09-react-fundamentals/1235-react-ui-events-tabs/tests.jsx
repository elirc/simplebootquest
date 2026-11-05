const EVENTS = [
  {id: 1, name: "Workshop", capacity: 39, registered: 249, format: "hybrid", free: true},
  {id: 2, name: "Hackathon", capacity: 279, registered: 154, format: "hybrid", free: false},
  {id: 3, name: "Code Dojo", capacity: 291, registered: 10, format: "hybrid", free: true},
  {id: 4, name: "Demo Day", capacity: 391, registered: 370, format: "in-person", free: false},
  {id: 5, name: "JS Meetup", capacity: 149, registered: 7, format: "in-person", free: true},
  {id: 6, name: "Book Club", capacity: 98, registered: 169, format: "hybrid", free: false}
];

test('one tab per format', () => {
  const ui = mount(<EventTabs items={EVENTS} />);
  expect(ui.findAll('button').map(text)).toEqual(["hybrid","in-person"]);
  expect(ui.findAll('button').map((b) => b.props['aria-selected'])).toEqual([true,false]);
  expect(ui.findAll('li').map(text)).toEqual(["Workshop","Hackathon","Code Dojo","Book Club"]);
});

test('switching tabs', () => {
  const ui = mount(<EventTabs items={EVENTS} />);
  ui.click(ui.findAll('button')[1]);
  expect(ui.findAll('li').map(text)).toEqual(["Demo Day","JS Meetup"]);
});
