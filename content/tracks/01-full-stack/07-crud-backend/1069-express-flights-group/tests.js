// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = flights.map((x) => ({ ...x }));
  return () => { flights.length = 0; flights.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("groups", async () => {
  const res = await request(app).get("/flights/by-airline");
  expect(res.status).toBe(200);
  expect(res.body).toEqual({"star":2,"oneworld":3,"skyteam":3});
});
