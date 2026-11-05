// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = tickets.map((x) => ({ ...x }));
  return () => { tickets.length = 0; tickets.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("updates allowed fields only", async () => {
  const res = await request(app).patch("/tickets/3").send({"ageHours":42,"id":99,"hacked":true});
  expect(res.status).toBe(200);
  expect(res.body).toEqual({"id":3,"subject":"Password reset","ageHours":42,"replies":3,"priority":"urgent","channel":"chat","resolved":true});
});

test("missing", async () => {
  const res = await request(app).patch("/tickets/999").send({"ageHours":1});
  expect(res.status).toBe(404);
  expect(res.body).toEqual({"error":"Not found"});
});
