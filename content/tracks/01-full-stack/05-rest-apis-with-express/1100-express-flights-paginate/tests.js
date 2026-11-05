// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = flights.map((x) => ({ ...x }));
  return () => { flights.length = 0; flights.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("defaults", async () => {
  const res = await request(app).get("/flights");
  expect(res.body).toEqual({"data":["KL641","TK1","EK3"],"meta":{"page":1,"limit":3,"total":8}});
});

test("page 2", async () => {
  const res = await request(app).get("/flights?page=2&limit=2");
  expect(res.body).toEqual({"data":["EK3","QF1"],"meta":{"page":2,"limit":2,"total":8}});
});

test("caps the limit", async () => {
  const res = await request(app).get("/flights?limit=50");
  expect(res.body).toEqual({"data":["KL641","TK1","EK3","QF1","UA90"],"meta":{"page":1,"limit":5,"total":8}});
});

test("bad input", async () => {
  const res = await request(app).get("/flights?page=-1&limit=abc");
  expect(res.body).toEqual({"data":["KL641","TK1","EK3"],"meta":{"page":1,"limit":3,"total":8}});
});
