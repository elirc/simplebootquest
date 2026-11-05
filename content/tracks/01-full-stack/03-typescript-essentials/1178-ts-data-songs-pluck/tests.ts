const SONGS = [
  {id: 1, title: "Tides", seconds: 194, plays: 6580, artist: "Nova", mood: "calm"},
  {id: 2, title: "Velvet", seconds: 416, plays: 1744, artist: "Kairo", mood: "happy"},
  {id: 3, title: "Riverside", seconds: 317, plays: 5999, artist: "The Pines", mood: "dark"},
  {id: 4, title: "Static", seconds: 183, plays: 5181, artist: "Kairo", mood: "calm"},
  {id: 5, title: "Neon", seconds: 418, plays: 2426, artist: "The Pines", mood: "calm"},
  {id: 6, title: "Echoes", seconds: 196, plays: 9458, artist: "Nova", mood: "dark"},
  {id: 7, title: "Lanterns", seconds: 338, plays: 3482, artist: "Kairo", mood: "dark"},
  {id: 8, title: "Halo", seconds: 276, plays: 2535, artist: "Nova", mood: "calm"}
];

test("an empty list", () => {
  expect(summariseSongs([])).toEqual([]);
});

test("all songs", () => {
  expect(summariseSongs(SONGS)).toEqual([{"id":1,"title":"Tides","seconds":194},{"id":2,"title":"Velvet","seconds":416},{"id":3,"title":"Riverside","seconds":317},{"id":4,"title":"Static","seconds":183},{"id":5,"title":"Neon","seconds":418},{"id":6,"title":"Echoes","seconds":196},{"id":7,"title":"Lanterns","seconds":338},{"id":8,"title":"Halo","seconds":276}]);
});
