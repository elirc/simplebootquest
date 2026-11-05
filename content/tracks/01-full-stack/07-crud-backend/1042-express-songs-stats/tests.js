// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = songs.map((x) => ({ ...x }));
  return () => { songs.length = 0; songs.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("computes stats", async () => {
  const res = await request(app).get("/songs/stats");
  expect(res.status).toBe(200);
  expect(res.body).toEqual({"count":8,"totalPlays":38792,"averagePlays":4849});
});
