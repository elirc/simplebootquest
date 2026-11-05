test('does not mutate the input', () => {
  const before = JSON.stringify(CITIES);
  bumpAvgTemp(CITIES, "Europe", 10);
  expect(JSON.stringify(CITIES)).toBe(before);
});

test("with \"Europe\", 10", () => {
  expect(bumpAvgTemp(CITIES, "Europe", 10)).toEqual([{"id":1,"name":"Lima","population":3195,"avgTemp":28,"continent":"Africa"},{"id":2,"name":"Quito","population":6975,"avgTemp":20,"continent":"Europe"},{"id":3,"name":"Accra","population":6819,"avgTemp":7,"continent":"Africa"},{"id":4,"name":"Cairo","population":6674,"avgTemp":27,"continent":"Americas"},{"id":5,"name":"Oslo","population":9111,"avgTemp":3,"continent":"Africa"},{"id":6,"name":"Lagos","population":1256,"avgTemp":13,"continent":"Americas"},{"id":7,"name":"Austin","population":4331,"avgTemp":12,"continent":"Asia"},{"id":8,"name":"Perth","population":1173,"avgTemp":15,"continent":"Europe"}]);
});

test("with \"Africa\", 1", () => {
  expect(bumpAvgTemp(CITIES, "Africa", 1)).toEqual([{"id":1,"name":"Lima","population":3195,"avgTemp":29,"continent":"Africa"},{"id":2,"name":"Quito","population":6975,"avgTemp":10,"continent":"Europe"},{"id":3,"name":"Accra","population":6819,"avgTemp":8,"continent":"Africa"},{"id":4,"name":"Cairo","population":6674,"avgTemp":27,"continent":"Americas"},{"id":5,"name":"Oslo","population":9111,"avgTemp":4,"continent":"Africa"},{"id":6,"name":"Lagos","population":1256,"avgTemp":13,"continent":"Americas"},{"id":7,"name":"Austin","population":4331,"avgTemp":12,"continent":"Asia"},{"id":8,"name":"Perth","population":1173,"avgTemp":5,"continent":"Europe"}]);
});
