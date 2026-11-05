// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = workouts.map((x) => ({ ...x }));
  return () => { workouts.length = 0; workouts.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("lists everything", async () => {
  const res = await request(app).get("/workouts");
  expect(res.status).toBe(200);
  expect(res.body).toEqual([{"id":1,"label":"Tue swim","minutes":41,"calories":601,"kind":"strength"},{"id":2,"label":"Mon run","minutes":60,"calories":283,"kind":"strength"},{"id":3,"label":"Thu yoga","minutes":69,"calories":547,"kind":"mobility"},{"id":4,"label":"Tue run","minutes":21,"calories":564,"kind":"mobility"},{"id":5,"label":"Wed lift","minutes":111,"calories":527,"kind":"mobility"},{"id":6,"label":"Sun walk","minutes":50,"calories":520,"kind":"cardio"},{"id":7,"label":"Sat ride","minutes":80,"calories":291,"kind":"cardio"},{"id":8,"label":"Thu ride","minutes":58,"calories":821,"kind":"strength"}]);
});
