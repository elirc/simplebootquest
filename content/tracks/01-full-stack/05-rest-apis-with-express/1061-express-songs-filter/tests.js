// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = songs.map((x) => ({ ...x }));
  return () => { songs.length = 0; songs.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("filtered", async () => {
  const res = await request(app).get("/songs?mood=dark");
  expect(res.status).toBe(200);
  expect(res.body).toEqual([{"id":1,"title":"Velvet","seconds":195,"plays":1570,"artist":"The Pines","mood":"dark"},{"id":2,"title":"Drift","seconds":135,"plays":4929,"artist":"Kairo","mood":"dark"},{"id":3,"title":"Echoes","seconds":180,"plays":8849,"artist":"Nova","mood":"dark"},{"id":6,"title":"Sunrise","seconds":271,"plays":7856,"artist":"The Pines","mood":"dark"}]);
});

test("no filter", async () => {
  const res = await request(app).get("/songs");
  expect(res.body).toEqual([{"id":1,"title":"Velvet","seconds":195,"plays":1570,"artist":"The Pines","mood":"dark"},{"id":2,"title":"Drift","seconds":135,"plays":4929,"artist":"Kairo","mood":"dark"},{"id":3,"title":"Echoes","seconds":180,"plays":8849,"artist":"Nova","mood":"dark"},{"id":4,"title":"Gravity","seconds":169,"plays":7021,"artist":"The Pines","mood":"happy"},{"id":5,"title":"Lanterns","seconds":260,"plays":91,"artist":"Nova","mood":"calm"},{"id":6,"title":"Sunrise","seconds":271,"plays":7856,"artist":"The Pines","mood":"dark"},{"id":7,"title":"Riverside","seconds":387,"plays":7421,"artist":"Nova","mood":"calm"},{"id":8,"title":"Paper Planes","seconds":328,"plays":1055,"artist":"Kairo","mood":"happy"}]);
});

test("no matches", async () => {
  const res = await request(app).get("/songs?mood=nope");
  expect(res.body).toEqual([]);
});
