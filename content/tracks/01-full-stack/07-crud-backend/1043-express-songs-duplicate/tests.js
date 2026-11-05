// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = songs.map((x) => ({ ...x }));
  return () => { songs.length = 0; songs.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("creates new", async () => {
  const res = await request(app).post("/songs").send({"title":"Unique One"});
  expect(res.status).toBe(201);
  expect(res.body).toEqual({"id":9,"title":"Unique One"});
});

test("rejects duplicates", async () => {
  const res = await request(app).post("/songs").send({"title":"VELVET"});
  expect(res.status).toBe(409);
  expect(res.body).toEqual({"error":"Song already exists"});
});
