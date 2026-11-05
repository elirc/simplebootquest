// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = flights.map((x) => ({ ...x }));
  return () => { flights.length = 0; flights.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("filtered", async () => {
  const res = await request(app).get("/flights?airline=oneworld");
  expect(res.status).toBe(200);
  expect(res.body).toEqual([{"id":2,"number":"TK1","durationMin":607,"delayMin":173,"seats":16,"airline":"oneworld"},{"id":3,"number":"EK3","durationMin":778,"delayMin":123,"seats":45,"airline":"oneworld"},{"id":7,"number":"BA117","durationMin":331,"delayMin":139,"seats":34,"airline":"oneworld"}]);
});

test("no filter", async () => {
  const res = await request(app).get("/flights");
  expect(res.body).toEqual([{"id":1,"number":"KL641","durationMin":600,"delayMin":64,"seats":23,"airline":"star"},{"id":2,"number":"TK1","durationMin":607,"delayMin":173,"seats":16,"airline":"oneworld"},{"id":3,"number":"EK3","durationMin":778,"delayMin":123,"seats":45,"airline":"oneworld"},{"id":4,"number":"QF1","durationMin":384,"delayMin":32,"seats":33,"airline":"skyteam"},{"id":5,"number":"UA90","durationMin":168,"delayMin":135,"seats":20,"airline":"star"},{"id":6,"number":"LH400","durationMin":650,"delayMin":173,"seats":1,"airline":"skyteam"},{"id":7,"number":"BA117","durationMin":331,"delayMin":139,"seats":34,"airline":"oneworld"},{"id":8,"number":"DL15","durationMin":621,"delayMin":117,"seats":46,"airline":"skyteam"}]);
});

test("no matches", async () => {
  const res = await request(app).get("/flights?airline=nope");
  expect(res.body).toEqual([]);
});
