// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = hotels.map((x) => ({ ...x }));
  return () => { hotels.length = 0; hotels.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("updates allowed fields only", async () => {
  const res = await request(app).patch("/hotels/3").send({"stars":42,"id":99,"hacked":true});
  expect(res.status).toBe(200);
  expect(res.body).toEqual({"id":3,"name":"Pine Lodge","nightlyPrice":79,"stars":42,"city":"Lisbon","breakfast":false});
});

test("missing", async () => {
  const res = await request(app).patch("/hotels/999").send({"stars":1});
  expect(res.status).toBe(404);
  expect(res.body).toEqual({"error":"Not found"});
});
