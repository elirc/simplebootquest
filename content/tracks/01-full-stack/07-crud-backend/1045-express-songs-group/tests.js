// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = songs.map((x) => ({ ...x }));
  return () => { songs.length = 0; songs.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("groups", async () => {
  const res = await request(app).get("/songs/by-mood");
  expect(res.status).toBe(200);
  expect(res.body).toEqual({"dark":4,"happy":2,"calm":2});
});
