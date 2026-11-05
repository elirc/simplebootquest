// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = cities.map((x) => ({ ...x }));
  return () => { cities.length = 0; cities.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("groups", async () => {
  const res = await request(app).get("/cities/by-continent");
  expect(res.status).toBe(200);
  expect(res.body).toEqual({"Americas":4,"Europe":1,"Oceania":1,"Asia":1,"Africa":1});
});
