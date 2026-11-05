// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = songs.map((x) => ({ ...x }));
  return () => { songs.length = 0; songs.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("updates allowed fields only", async () => {
  const res = await request(app).patch("/songs/3").send({"plays":42,"id":99,"hacked":true});
  expect(res.status).toBe(200);
  expect(res.body).toEqual({"id":3,"title":"Echoes","seconds":180,"plays":42,"artist":"Nova","mood":"dark"});
});

test("missing", async () => {
  const res = await request(app).patch("/songs/999").send({"plays":1});
  expect(res.status).toBe(404);
  expect(res.body).toEqual({"error":"Not found"});
});
