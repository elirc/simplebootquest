// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = hotels.map((x) => ({ ...x }));
  return () => { hotels.length = 0; hotels.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("soft deletes", async () => {
  const res = await request(app).delete("/hotels/2");
  expect(res.status).toBe(204);
  const res2 = await request(app).get("/hotels");
  expect(res2.body).toEqual(["Riverside Inn","Pine Lodge","Station Hotel","Harbour View","Sky Garden","Sea Breeze","Northern Star"]);
});

test("cannot delete twice", async () => {
  const res = await request(app).delete("/hotels/2");
  expect(res.status).toBe(204);
  const res2 = await request(app).delete("/hotels/2");
  expect(res2.status).toBe(404);
  expect(res2.body).toEqual({"error":"Not found"});
});
