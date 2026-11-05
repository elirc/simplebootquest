// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = hotels.map((x) => ({ ...x }));
  return () => { hotels.length = 0; hotels.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("found", async () => {
  const res = await request(app).get("/hotels/2");
  expect(res.status).toBe(200);
  expect(res.body).toEqual({"id":2,"name":"Old Mill","nightlyPrice":77,"stars":3,"city":"Kyoto","breakfast":false});
});

test("missing", async () => {
  const res = await request(app).get("/hotels/999");
  expect(res.status).toBe(404);
  expect(res.body).toEqual({"error":"Not found"});
});

test("invalid id", async () => {
  const res = await request(app).get("/hotels/abc");
  expect(res.status).toBe(400);
  expect(res.body).toEqual({"error":"Invalid id"});
});
