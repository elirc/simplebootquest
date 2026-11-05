const EVENTS = [
  {id: 1, name: "Workshop", capacity: 39, registered: 249, format: "hybrid", free: true},
  {id: 2, name: "Hackathon", capacity: 279, registered: 154, format: "hybrid", free: false},
  {id: 3, name: "Code Dojo", capacity: 291, registered: 10, format: "hybrid", free: true},
  {id: 4, name: "Demo Day", capacity: 391, registered: 370, format: "in-person", free: false},
  {id: 5, name: "JS Meetup", capacity: 149, registered: 7, format: "in-person", free: true},
  {id: 6, name: "Book Club", capacity: 98, registered: 169, format: "hybrid", free: false}
];

test('first page', () => {
  const ui = mount(<EventPager items={EVENTS} />);
  expect(ui.findAll('li').map(text)).toEqual(["Workshop","Hackathon"]);
  expect(text(ui.find('p'))).toBe('Page 1 of 3');
  expect(ui.getByText('Previous').props.disabled).toBe(true);
});

test('next and last page', () => {
  const ui = mount(<EventPager items={EVENTS} />);
  for (let i = 0; i < 10; i++) ui.click(ui.getByText('Next'));
  const last = 3;
  expect(text(ui.find('p'))).toBe(`Page ${last} of ${last}`);
  expect(ui.findAll('li').map(text)).toEqual(["JS Meetup","Book Club"]);
  expect(ui.getByText('Next').props.disabled).toBe(true);
});
