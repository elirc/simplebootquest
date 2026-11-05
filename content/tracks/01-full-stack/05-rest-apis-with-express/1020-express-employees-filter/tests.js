// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = employees.map((x) => ({ ...x }));
  return () => { employees.length = 0; employees.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("filtered", async () => {
  const res = await request(app).get("/employees?team=product");
  expect(res.status).toBe(200);
  expect(res.body).toEqual([{"id":2,"name":"Margaret","salary":117030,"yearsAtCompany":7,"team":"product","level":"mid","remote":true},{"id":8,"name":"Grace","salary":66482,"yearsAtCompany":6,"team":"product","level":"senior","remote":false}]);
});

test("no filter", async () => {
  const res = await request(app).get("/employees");
  expect(res.body).toEqual([{"id":1,"name":"Tim","salary":59833,"yearsAtCompany":2,"team":"data","level":"senior","remote":false},{"id":2,"name":"Margaret","salary":117030,"yearsAtCompany":7,"team":"product","level":"mid","remote":true},{"id":3,"name":"Katherine","salary":146421,"yearsAtCompany":13,"team":"data","level":"mid","remote":true},{"id":4,"name":"Frances","salary":131232,"yearsAtCompany":8,"team":"data","level":"senior","remote":false},{"id":5,"name":"Ken","salary":130831,"yearsAtCompany":12,"team":"platform","level":"senior","remote":false},{"id":6,"name":"Dennis","salary":112186,"yearsAtCompany":14,"team":"platform","level":"mid","remote":false},{"id":7,"name":"Alan","salary":114713,"yearsAtCompany":6,"team":"data","level":"junior","remote":false},{"id":8,"name":"Grace","salary":66482,"yearsAtCompany":6,"team":"product","level":"senior","remote":false}]);
});

test("no matches", async () => {
  const res = await request(app).get("/employees?team=nope");
  expect(res.body).toEqual([]);
});
