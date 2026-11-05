// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = books.map((x) => ({ ...x }));
  return () => { books.length = 0; books.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("found", async () => {
  const res = await request(app).get("/books/2");
  expect(res.status).toBe(200);
  expect(res.body).toEqual({"id":2,"title":"Siddhartha","pages":426,"year":1864,"genre":"classic","available":true});
});

test("missing", async () => {
  const res = await request(app).get("/books/999");
  expect(res.status).toBe(404);
  expect(res.body).toEqual({"error":"Not found"});
});

test("invalid id", async () => {
  const res = await request(app).get("/books/abc");
  expect(res.status).toBe(400);
  expect(res.body).toEqual({"error":"Invalid id"});
});
