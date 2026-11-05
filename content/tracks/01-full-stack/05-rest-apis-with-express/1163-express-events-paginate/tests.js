// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = events.map((x) => ({ ...x }));
  return () => { events.length = 0; events.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("defaults", async () => {
  const res = await request(app).get("/events");
  expect(res.body).toEqual({"data":["AI Panel","Demo Day","Workshop"],"meta":{"page":1,"limit":3,"total":8}});
});

test("page 2", async () => {
  const res = await request(app).get("/events?page=2&limit=2");
  expect(res.body).toEqual({"data":["Workshop","Code Dojo"],"meta":{"page":2,"limit":2,"total":8}});
});

test("caps the limit", async () => {
  const res = await request(app).get("/events?limit=50");
  expect(res.body).toEqual({"data":["AI Panel","Demo Day","Workshop","Code Dojo","Hackathon"],"meta":{"page":1,"limit":5,"total":8}});
});

test("bad input", async () => {
  const res = await request(app).get("/events?page=-1&limit=abc");
  expect(res.body).toEqual({"data":["AI Panel","Demo Day","Workshop"],"meta":{"page":1,"limit":3,"total":8}});
});
