// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = hotels.map((x) => ({ ...x }));
  return () => { hotels.length = 0; hotels.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("creates", async () => {
  const res = await request(app).post("/hotels").send({"name":"Brand new","nightlyPrice":5});
  expect(res.status).toBe(201);
  expect(res.body).toEqual({"id":9,"name":"Brand new","nightlyPrice":5});
  expect(res.headers.location).toBe("/hotels/9");
});

test("missing name", async () => {
  const res = await request(app).post("/hotels").send({"nightlyPrice":3});
  expect(res.status).toBe(400);
  expect(res.body).toEqual({"error":"Invalid hotel"});
});

test("negative number", async () => {
  const res = await request(app).post("/hotels").send({"name":"x","nightlyPrice":-1});
  expect(res.status).toBe(400);
});

test("wrong type", async () => {
  const res = await request(app).post("/hotels").send({"name":"x","nightlyPrice":"5"});
  expect(res.status).toBe(400);
});
