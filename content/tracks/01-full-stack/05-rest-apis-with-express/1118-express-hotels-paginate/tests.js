// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = hotels.map((x) => ({ ...x }));
  return () => { hotels.length = 0; hotels.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("defaults", async () => {
  const res = await request(app).get("/hotels");
  expect(res.body).toEqual({"data":["Riverside Inn","Old Mill","Pine Lodge"],"meta":{"page":1,"limit":3,"total":8}});
});

test("page 2", async () => {
  const res = await request(app).get("/hotels?page=2&limit=2");
  expect(res.body).toEqual({"data":["Pine Lodge","Station Hotel"],"meta":{"page":2,"limit":2,"total":8}});
});

test("caps the limit", async () => {
  const res = await request(app).get("/hotels?limit=50");
  expect(res.body).toEqual({"data":["Riverside Inn","Old Mill","Pine Lodge","Station Hotel","Harbour View"],"meta":{"page":1,"limit":5,"total":8}});
});

test("bad input", async () => {
  const res = await request(app).get("/hotels?page=-1&limit=abc");
  expect(res.body).toEqual({"data":["Riverside Inn","Old Mill","Pine Lodge"],"meta":{"page":1,"limit":3,"total":8}});
});
