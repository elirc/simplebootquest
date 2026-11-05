// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = students.map((x) => ({ ...x }));
  return () => { students.length = 0; students.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("sorted desc", async () => {
  const res = await request(app).get("/students?sort=score&order=desc");
  expect(res.body).toEqual(["Dara","Jonah","Amara","Luca","Keiko","Chen","Bilal","Elif"]);
});

test("sorted by name", async () => {
  const res = await request(app).get("/students?sort=name");
  expect(res.body).toEqual(["Amara","Bilal","Chen","Dara","Elif","Jonah","Keiko","Luca"]);
});

test("rejects unknown fields", async () => {
  const res = await request(app).get("/students?sort=password");
  expect(res.status).toBe(400);
  expect(res.body).toEqual({"error":"Cannot sort by password"});
});
