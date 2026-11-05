// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = hotels.map((x) => ({ ...x }));
  return () => { hotels.length = 0; hotels.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("groups", async () => {
  const res = await request(app).get("/hotels/by-city");
  expect(res.status).toBe(200);
  expect(res.body).toEqual({"Kyoto":3,"Lisbon":2,"Toronto":3});
});
