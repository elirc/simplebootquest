const BEFORE = [
  {id: 1, title: "Static", seconds: 350, plays: 2304, artist: "Nova", mood: "dark"},
  {id: 2, title: "Neon", seconds: 342, plays: 672, artist: "Kairo", mood: "dark"},
  {id: 3, title: "Gravity", seconds: 304, plays: 6623, artist: "Kairo", mood: "calm"},
  {id: 4, title: "Drift", seconds: 285, plays: 2879, artist: "Nova", mood: "dark"},
  {id: 5, title: "Riverside", seconds: 301, plays: 5328, artist: "The Pines", mood: "calm"},
  {id: 6, title: "Echoes", seconds: 289, plays: 2962, artist: "Nova", mood: "calm"},
  {id: 7, title: "Lanterns", seconds: 149, plays: 2121, artist: "The Pines", mood: "dark"},
  {id: 8, title: "Tides", seconds: 273, plays: 334, artist: "The Pines", mood: "dark"}
];
const AFTER = [
  {id: 1, title: "Static", seconds: 350, plays: 2304, artist: "Nova", mood: "dark"},
  {id: 2, title: "Neon", seconds: 349, plays: 672, artist: "Kairo", mood: "dark"},
  {id: 3, title: "Gravity", seconds: 304, plays: 6623, artist: "Kairo", mood: "calm"},
  {id: 4, title: "Drift", seconds: 285, plays: 2879, artist: "Nova", mood: "dark"},
  {id: 5, title: "Riverside", seconds: 308, plays: 5328, artist: "The Pines", mood: "calm"},
  {id: 6, title: "Echoes", seconds: 289, plays: 2962, artist: "Nova", mood: "calm"},
  {id: 7, title: "Lanterns", seconds: 149, plays: 2121, artist: "The Pines", mood: "dark"},
  {id: 8, title: "Tides", seconds: 280, plays: 334, artist: "The Pines", mood: "dark"}
];

test("finds changed ids", () => {
  expect(secondsChanges(BEFORE, AFTER)).toEqual([2,5,8]);
});

test("no changes", () => {
  expect(secondsChanges(BEFORE, BEFORE)).toEqual([]);
});
