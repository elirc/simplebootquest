// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = plants.map((x) => ({ ...x }));
  return () => { plants.length = 0; plants.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("groups", async () => {
  const res = await request(app).get("/plants/by-light");
  expect(res.status).toBe(200);
  expect(res.body).toEqual({"low":4,"medium":3,"bright":1});
});
