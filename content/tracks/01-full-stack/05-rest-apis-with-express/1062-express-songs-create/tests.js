// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = songs.map((x) => ({ ...x }));
  return () => { songs.length = 0; songs.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("creates", async () => {
  const res = await request(app).post("/songs").send({"title":"Brand new","seconds":5});
  expect(res.status).toBe(201);
  expect(res.body).toEqual({"id":9,"title":"Brand new","seconds":5});
  expect(res.headers.location).toBe("/songs/9");
});

test("missing name", async () => {
  const res = await request(app).post("/songs").send({"seconds":3});
  expect(res.status).toBe(400);
  expect(res.body).toEqual({"error":"Invalid song"});
});

test("negative number", async () => {
  const res = await request(app).post("/songs").send({"title":"x","seconds":-1});
  expect(res.status).toBe(400);
});

test("wrong type", async () => {
  const res = await request(app).post("/songs").send({"title":"x","seconds":"5"});
  expect(res.status).toBe(400);
});
