// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = events.map((x) => ({ ...x }));
  return () => { events.length = 0; events.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("filtered", async () => {
  const res = await request(app).get("/events?format=in-person");
  expect(res.status).toBe(200);
  expect(res.body).toEqual([{"id":1,"name":"AI Panel","capacity":186,"registered":190,"format":"in-person","free":false},{"id":2,"name":"Demo Day","capacity":295,"registered":225,"format":"in-person","free":true},{"id":4,"name":"Code Dojo","capacity":317,"registered":134,"format":"in-person","free":false},{"id":6,"name":"Book Club","capacity":330,"registered":212,"format":"in-person","free":true},{"id":7,"name":"Design Jam","capacity":150,"registered":272,"format":"in-person","free":true},{"id":8,"name":"Startup Night","capacity":23,"registered":165,"format":"in-person","free":false}]);
});

test("no filter", async () => {
  const res = await request(app).get("/events");
  expect(res.body).toEqual([{"id":1,"name":"AI Panel","capacity":186,"registered":190,"format":"in-person","free":false},{"id":2,"name":"Demo Day","capacity":295,"registered":225,"format":"in-person","free":true},{"id":3,"name":"Workshop","capacity":156,"registered":26,"format":"online","free":false},{"id":4,"name":"Code Dojo","capacity":317,"registered":134,"format":"in-person","free":false},{"id":5,"name":"Hackathon","capacity":86,"registered":112,"format":"online","free":true},{"id":6,"name":"Book Club","capacity":330,"registered":212,"format":"in-person","free":true},{"id":7,"name":"Design Jam","capacity":150,"registered":272,"format":"in-person","free":true},{"id":8,"name":"Startup Night","capacity":23,"registered":165,"format":"in-person","free":false}]);
});

test("no matches", async () => {
  const res = await request(app).get("/events?format=nope");
  expect(res.body).toEqual([]);
});
