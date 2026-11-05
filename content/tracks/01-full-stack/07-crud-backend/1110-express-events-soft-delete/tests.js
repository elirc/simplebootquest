// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = events.map((x) => ({ ...x }));
  return () => { events.length = 0; events.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("soft deletes", async () => {
  const res = await request(app).delete("/events/2");
  expect(res.status).toBe(204);
  const res2 = await request(app).get("/events");
  expect(res2.body).toEqual(["AI Panel","Workshop","Code Dojo","Hackathon","Book Club","Design Jam","Startup Night"]);
});

test("cannot delete twice", async () => {
  const res = await request(app).delete("/events/2");
  expect(res.status).toBe(204);
  const res2 = await request(app).delete("/events/2");
  expect(res2.status).toBe(404);
  expect(res2.body).toEqual({"error":"Not found"});
});
