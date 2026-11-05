// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = repos.map((x) => ({ ...x }));
  return () => { repos.length = 0; repos.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("lists everything", async () => {
  const res = await request(app).get("/repos");
  expect(res.status).toBe(200);
  expect(res.body).toEqual([{"id":1,"name":"billing","stars":1301,"openIssues":39,"language":"TypeScript","archived":false},{"id":2,"name":"docs","stars":4401,"openIssues":100,"language":"Go","archived":false},{"id":3,"name":"infra","stars":2307,"openIssues":109,"language":"Python","archived":false},{"id":4,"name":"web-app","stars":3409,"openIssues":16,"language":"TypeScript","archived":false},{"id":5,"name":"api-gateway","stars":939,"openIssues":20,"language":"TypeScript","archived":true},{"id":6,"name":"analytics","stars":4195,"openIssues":1,"language":"Go","archived":true},{"id":7,"name":"mobile","stars":4296,"openIssues":44,"language":"TypeScript","archived":true},{"id":8,"name":"cli","stars":5026,"openIssues":80,"language":"TypeScript","archived":true}]);
});
