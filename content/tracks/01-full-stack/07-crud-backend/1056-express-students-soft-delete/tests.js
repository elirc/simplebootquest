// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = students.map((x) => ({ ...x }));
  return () => { students.length = 0; students.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("soft deletes", async () => {
  const res = await request(app).delete("/students/2");
  expect(res.status).toBe(204);
  const res2 = await request(app).get("/students");
  expect(res2.body).toEqual(["Amara","Jonah","Bilal","Chen","Elif","Dara","Luca"]);
});

test("cannot delete twice", async () => {
  const res = await request(app).delete("/students/2");
  expect(res.status).toBe(204);
  const res2 = await request(app).delete("/students/2");
  expect(res2.status).toBe(404);
  expect(res2.body).toEqual({"error":"Not found"});
});
