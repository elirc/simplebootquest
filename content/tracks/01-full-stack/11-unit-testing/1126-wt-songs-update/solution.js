test('does not mutate the input', () => {
  const before = JSON.stringify(SONGS);
  bumpPlays(SONGS, "calm", 10);
  expect(JSON.stringify(SONGS)).toBe(before);
});

test("with \"calm\", 10", () => {
  expect(bumpPlays(SONGS, "calm", 10)).toEqual([{"id":1,"title":"Tides","seconds":162,"plays":6379,"artist":"Nova","mood":"calm"},{"id":2,"title":"Drift","seconds":385,"plays":8552,"artist":"The Pines","mood":"calm"},{"id":3,"title":"Velvet","seconds":192,"plays":7927,"artist":"Nova","mood":"calm"},{"id":4,"title":"Lanterns","seconds":390,"plays":1868,"artist":"Kairo","mood":"dark"},{"id":5,"title":"Paper Planes","seconds":140,"plays":3978,"artist":"Kairo","mood":"dark"},{"id":6,"title":"Echoes","seconds":229,"plays":7622,"artist":"Kairo","mood":"happy"},{"id":7,"title":"Halo","seconds":310,"plays":1298,"artist":"The Pines","mood":"calm"},{"id":8,"title":"Neon","seconds":218,"plays":5276,"artist":"Nova","mood":"calm"}]);
});

test("with \"happy\", 1", () => {
  expect(bumpPlays(SONGS, "happy", 1)).toEqual([{"id":1,"title":"Tides","seconds":162,"plays":6369,"artist":"Nova","mood":"calm"},{"id":2,"title":"Drift","seconds":385,"plays":8542,"artist":"The Pines","mood":"calm"},{"id":3,"title":"Velvet","seconds":192,"plays":7917,"artist":"Nova","mood":"calm"},{"id":4,"title":"Lanterns","seconds":390,"plays":1868,"artist":"Kairo","mood":"dark"},{"id":5,"title":"Paper Planes","seconds":140,"plays":3978,"artist":"Kairo","mood":"dark"},{"id":6,"title":"Echoes","seconds":229,"plays":7623,"artist":"Kairo","mood":"happy"},{"id":7,"title":"Halo","seconds":310,"plays":1288,"artist":"The Pines","mood":"calm"},{"id":8,"title":"Neon","seconds":218,"plays":5266,"artist":"Nova","mood":"calm"}]);
});
