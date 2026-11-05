const EVENTS = [
  {id: 1, name: "Workshop", capacity: 39, registered: 249, format: "hybrid", free: true},
  {id: 2, name: "Hackathon", capacity: 279, registered: 154, format: "hybrid", free: false},
  {id: 3, name: "Code Dojo", capacity: 291, registered: 10, format: "hybrid", free: true},
  {id: 4, name: "Demo Day", capacity: 391, registered: 370, format: "in-person", free: false},
  {id: 5, name: "JS Meetup", capacity: 149, registered: 7, format: "in-person", free: true},
  {id: 6, name: "Book Club", capacity: 98, registered: 169, format: "hybrid", free: false}
];

test('starts hidden', () => {
  const ui = mount(<EventToggle items={EVENTS} />);
  expect(ui.find('ul')).toBeUndefined();
  expect(text(ui.find('button'))).toBe('Show events');
});

test('shows and hides', () => {
  const ui = mount(<EventToggle items={EVENTS} />);
  ui.click('button');
  expect(ui.findAll('li').map(text)).toEqual(["Workshop","Hackathon","Code Dojo","Demo Day","JS Meetup","Book Club"]);
  expect(text(ui.find('button'))).toBe('Hide events');
  ui.click('button');
  expect(ui.find('ul')).toBeUndefined();
});
