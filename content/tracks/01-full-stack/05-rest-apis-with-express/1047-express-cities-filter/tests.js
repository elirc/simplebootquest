// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = cities.map((x) => ({ ...x }));
  return () => { cities.length = 0; cities.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("filtered", async () => {
  const res = await request(app).get("/cities?continent=Europe");
  expect(res.status).toBe(200);
  expect(res.body).toEqual([{"id":2,"name":"Seoul","population":1420,"avgTemp":14,"continent":"Europe"}]);
});

test("no filter", async () => {
  const res = await request(app).get("/cities");
  expect(res.body).toEqual([{"id":1,"name":"Lagos","population":3796,"avgTemp":22,"continent":"Americas"},{"id":2,"name":"Seoul","population":1420,"avgTemp":14,"continent":"Europe"},{"id":3,"name":"Quito","population":4867,"avgTemp":6,"continent":"Americas"},{"id":4,"name":"Lima","population":2433,"avgTemp":3,"continent":"Americas"},{"id":5,"name":"Perth","population":1895,"avgTemp":26,"continent":"Oceania"},{"id":6,"name":"Lisbon","population":7803,"avgTemp":7,"continent":"Asia"},{"id":7,"name":"Oslo","population":5480,"avgTemp":21,"continent":"Africa"},{"id":8,"name":"Hanoi","population":1746,"avgTemp":14,"continent":"Americas"}]);
});

test("no matches", async () => {
  const res = await request(app).get("/cities?continent=nope");
  expect(res.body).toEqual([]);
});
