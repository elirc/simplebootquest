// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = hotels.map((x) => ({ ...x }));
  return () => { hotels.length = 0; hotels.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("finds matches", async () => {
  const res = await request(app).get("/hotels/search?q=ri");
  expect(res.status).toBe(200);
  expect(res.body).toEqual(["Riverside Inn"]);
});

test("requires q", async () => {
  const res = await request(app).get("/hotels/search?q=%20");
  expect(res.status).toBe(400);
  expect(res.body).toEqual({"error":"q is required"});
});
