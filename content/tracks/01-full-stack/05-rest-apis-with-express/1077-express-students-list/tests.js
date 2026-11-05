// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = students.map((x) => ({ ...x }));
  return () => { students.length = 0; students.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("lists everything", async () => {
  const res = await request(app).get("/students");
  expect(res.status).toBe(200);
  expect(res.body).toEqual([{"id":1,"name":"Amara","score":86,"age":29,"course":"web","graduated":false},{"id":2,"name":"Keiko","score":76,"age":33,"course":"web","graduated":true},{"id":3,"name":"Jonah","score":89,"age":32,"course":"web","graduated":false},{"id":4,"name":"Bilal","score":45,"age":31,"course":"web","graduated":false},{"id":5,"name":"Chen","score":60,"age":29,"course":"data","graduated":false},{"id":6,"name":"Elif","score":43,"age":28,"course":"web","graduated":false},{"id":7,"name":"Dara","score":90,"age":32,"course":"web","graduated":true},{"id":8,"name":"Luca","score":85,"age":22,"course":"web","graduated":false}]);
});
