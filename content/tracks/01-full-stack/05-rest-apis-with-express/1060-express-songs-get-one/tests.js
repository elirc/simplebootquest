// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = songs.map((x) => ({ ...x }));
  return () => { songs.length = 0; songs.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("found", async () => {
  const res = await request(app).get("/songs/2");
  expect(res.status).toBe(200);
  expect(res.body).toEqual({"id":2,"title":"Drift","seconds":135,"plays":4929,"artist":"Kairo","mood":"dark"});
});

test("missing", async () => {
  const res = await request(app).get("/songs/999");
  expect(res.status).toBe(404);
  expect(res.body).toEqual({"error":"Not found"});
});

test("invalid id", async () => {
  const res = await request(app).get("/songs/abc");
  expect(res.status).toBe(400);
  expect(res.body).toEqual({"error":"Invalid id"});
});
