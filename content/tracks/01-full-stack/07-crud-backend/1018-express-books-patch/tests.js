// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = books.map((x) => ({ ...x }));
  return () => { books.length = 0; books.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("updates allowed fields only", async () => {
  const res = await request(app).patch("/books/3").send({"pages":42,"id":99,"hacked":true});
  expect(res.status).toBe(200);
  expect(res.body).toEqual({"id":3,"title":"Clean Code","pages":42,"year":1826,"genre":"classic","available":false});
});

test("missing", async () => {
  const res = await request(app).patch("/books/999").send({"pages":1});
  expect(res.status).toBe(404);
  expect(res.body).toEqual({"error":"Not found"});
});
