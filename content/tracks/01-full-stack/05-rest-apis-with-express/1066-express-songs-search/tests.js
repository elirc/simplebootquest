// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = songs.map((x) => ({ ...x }));
  return () => { songs.length = 0; songs.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("finds matches", async () => {
  const res = await request(app).get("/songs/search?q=ve");
  expect(res.status).toBe(200);
  expect(res.body).toEqual(["Velvet","Riverside"]);
});

test("requires q", async () => {
  const res = await request(app).get("/songs/search?q=%20");
  expect(res.status).toBe(400);
  expect(res.body).toEqual({"error":"q is required"});
});
