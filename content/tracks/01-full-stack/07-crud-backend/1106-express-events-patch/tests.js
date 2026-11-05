// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = events.map((x) => ({ ...x }));
  return () => { events.length = 0; events.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("updates allowed fields only", async () => {
  const res = await request(app).patch("/events/3").send({"capacity":42,"id":99,"hacked":true});
  expect(res.status).toBe(200);
  expect(res.body).toEqual({"id":3,"name":"Workshop","capacity":42,"registered":26,"format":"online","free":false});
});

test("missing", async () => {
  const res = await request(app).patch("/events/999").send({"capacity":1});
  expect(res.status).toBe(404);
  expect(res.body).toEqual({"error":"Not found"});
});
