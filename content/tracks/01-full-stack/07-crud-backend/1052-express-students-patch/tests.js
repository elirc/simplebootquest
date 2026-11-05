// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = students.map((x) => ({ ...x }));
  return () => { students.length = 0; students.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("updates allowed fields only", async () => {
  const res = await request(app).patch("/students/3").send({"score":42,"id":99,"hacked":true});
  expect(res.status).toBe(200);
  expect(res.body).toEqual({"id":3,"name":"Jonah","score":42,"age":32,"course":"web","graduated":false});
});

test("missing", async () => {
  const res = await request(app).patch("/students/999").send({"score":1});
  expect(res.status).toBe(404);
  expect(res.body).toEqual({"error":"Not found"});
});
