const BEFORE = [
  {id: 1, label: "Mon lift", minutes: 62, calories: 533, kind: "cardio"},
  {id: 2, label: "Thu ride", minutes: 40, calories: 457, kind: "cardio"},
  {id: 3, label: "Fri run", minutes: 31, calories: 512, kind: "strength"},
  {id: 4, label: "Tue swim", minutes: 115, calories: 890, kind: "cardio"},
  {id: 5, label: "Thu yoga", minutes: 108, calories: 703, kind: "mobility"},
  {id: 6, label: "Mon run", minutes: 38, calories: 862, kind: "strength"},
  {id: 7, label: "Wed swim", minutes: 25, calories: 227, kind: "mobility"},
  {id: 8, label: "Fri yoga", minutes: 85, calories: 412, kind: "cardio"}
];
const AFTER = [
  {id: 1, label: "Mon lift", minutes: 62, calories: 533, kind: "cardio"},
  {id: 2, label: "Thu ride", minutes: 47, calories: 457, kind: "cardio"},
  {id: 3, label: "Fri run", minutes: 31, calories: 512, kind: "strength"},
  {id: 4, label: "Tue swim", minutes: 115, calories: 890, kind: "cardio"},
  {id: 5, label: "Thu yoga", minutes: 115, calories: 703, kind: "mobility"},
  {id: 6, label: "Mon run", minutes: 38, calories: 862, kind: "strength"},
  {id: 7, label: "Wed swim", minutes: 25, calories: 227, kind: "mobility"},
  {id: 8, label: "Fri yoga", minutes: 92, calories: 412, kind: "cardio"}
];

test("finds changed ids", () => {
  expect(minutesChanges(BEFORE, AFTER)).toEqual([2,5,8]);
});

test("no changes", () => {
  expect(minutesChanges(BEFORE, BEFORE)).toEqual([]);
});
