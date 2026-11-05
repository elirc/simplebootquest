// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = songs.map((x) => ({ ...x }));
  return () => { songs.length = 0; songs.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("soft deletes", async () => {
  const res = await request(app).delete("/songs/2");
  expect(res.status).toBe(204);
  const res2 = await request(app).get("/songs");
  expect(res2.body).toEqual(["Velvet","Echoes","Gravity","Lanterns","Sunrise","Riverside","Paper Planes"]);
});

test("cannot delete twice", async () => {
  const res = await request(app).delete("/songs/2");
  expect(res.status).toBe(204);
  const res2 = await request(app).delete("/songs/2");
  expect(res2.status).toBe(404);
  expect(res2.body).toEqual({"error":"Not found"});
});
