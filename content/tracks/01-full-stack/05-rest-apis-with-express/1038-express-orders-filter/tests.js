// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = orders.map((x) => ({ ...x }));
  return () => { orders.length = 0; orders.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("filtered", async () => {
  const res = await request(app).get("/orders?country=DE");
  expect(res.status).toBe(200);
  expect(res.body).toEqual([{"id":2,"code":"C-300","totalCents":16714,"items":8,"status":"pending","country":"DE"},{"id":3,"code":"A-100","totalCents":10966,"items":1,"status":"paid","country":"DE"},{"id":4,"code":"C-301","totalCents":16580,"items":3,"status":"pending","country":"DE"},{"id":8,"code":"E-501","totalCents":2591,"items":8,"status":"cancelled","country":"DE"}]);
});

test("no filter", async () => {
  const res = await request(app).get("/orders");
  expect(res.body).toEqual([{"id":1,"code":"E-500","totalCents":14355,"items":5,"status":"paid","country":"UK"},{"id":2,"code":"C-300","totalCents":16714,"items":8,"status":"pending","country":"DE"},{"id":3,"code":"A-100","totalCents":10966,"items":1,"status":"paid","country":"DE"},{"id":4,"code":"C-301","totalCents":16580,"items":3,"status":"pending","country":"DE"},{"id":5,"code":"B-201","totalCents":21163,"items":2,"status":"shipped","country":"US"},{"id":6,"code":"B-200","totalCents":22346,"items":4,"status":"shipped","country":"UK"},{"id":7,"code":"A-101","totalCents":12737,"items":9,"status":"pending","country":"UK"},{"id":8,"code":"E-501","totalCents":2591,"items":8,"status":"cancelled","country":"DE"}]);
});

test("no matches", async () => {
  const res = await request(app).get("/orders?country=nope");
  expect(res.body).toEqual([]);
});
