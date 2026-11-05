// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = flights.map((x) => ({ ...x }));
  return () => { flights.length = 0; flights.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("soft deletes", async () => {
  const res = await request(app).delete("/flights/2");
  expect(res.status).toBe(204);
  const res2 = await request(app).get("/flights");
  expect(res2.body).toEqual(["KL641","EK3","QF1","UA90","LH400","BA117","DL15"]);
});

test("cannot delete twice", async () => {
  const res = await request(app).delete("/flights/2");
  expect(res.status).toBe(204);
  const res2 = await request(app).delete("/flights/2");
  expect(res2.status).toBe(404);
  expect(res2.body).toEqual({"error":"Not found"});
});
