const BEFORE = [
  {id: 1, name: "Falafel", minutes: 56, calories: 836, cuisine: "middle-eastern", difficulty: "medium", vegetarian: false},
  {id: 2, name: "Risotto", minutes: 110, calories: 472, cuisine: "italian", difficulty: "easy", vegetarian: false},
  {id: 3, name: "Pancakes", minutes: 34, calories: 400, cuisine: "middle-eastern", difficulty: "hard", vegetarian: true},
  {id: 4, name: "Shakshuka", minutes: 56, calories: 755, cuisine: "mexican", difficulty: "easy", vegetarian: false},
  {id: 5, name: "Lasagne", minutes: 106, calories: 368, cuisine: "mexican", difficulty: "medium", vegetarian: false},
  {id: 6, name: "Paella", minutes: 79, calories: 835, cuisine: "middle-eastern", difficulty: "medium", vegetarian: true},
  {id: 7, name: "Ramen", minutes: 67, calories: 563, cuisine: "italian", difficulty: "medium", vegetarian: true},
  {id: 8, name: "Curry", minutes: 69, calories: 584, cuisine: "middle-eastern", difficulty: "hard", vegetarian: false}
];
const AFTER = [
  {id: 1, name: "Falafel", minutes: 56, calories: 836, cuisine: "middle-eastern", difficulty: "medium", vegetarian: false},
  {id: 2, name: "Risotto", minutes: 117, calories: 472, cuisine: "italian", difficulty: "easy", vegetarian: false},
  {id: 3, name: "Pancakes", minutes: 34, calories: 400, cuisine: "middle-eastern", difficulty: "hard", vegetarian: true},
  {id: 4, name: "Shakshuka", minutes: 56, calories: 755, cuisine: "mexican", difficulty: "easy", vegetarian: false},
  {id: 5, name: "Lasagne", minutes: 113, calories: 368, cuisine: "mexican", difficulty: "medium", vegetarian: false},
  {id: 6, name: "Paella", minutes: 79, calories: 835, cuisine: "middle-eastern", difficulty: "medium", vegetarian: true},
  {id: 7, name: "Ramen", minutes: 67, calories: 563, cuisine: "italian", difficulty: "medium", vegetarian: true},
  {id: 8, name: "Curry", minutes: 76, calories: 584, cuisine: "middle-eastern", difficulty: "hard", vegetarian: false}
];

test("finds changed ids", () => {
  expect(minutesChanges(BEFORE, AFTER)).toEqual([2,5,8]);
});

test("no changes", () => {
  expect(minutesChanges(BEFORE, BEFORE)).toEqual([]);
});
