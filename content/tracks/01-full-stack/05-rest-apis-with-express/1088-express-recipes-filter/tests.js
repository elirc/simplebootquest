// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = recipes.map((x) => ({ ...x }));
  return () => { recipes.length = 0; recipes.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("filtered", async () => {
  const res = await request(app).get("/recipes?difficulty=medium");
  expect(res.status).toBe(200);
  expect(res.body).toEqual([{"id":2,"name":"Pancakes","minutes":39,"calories":529,"cuisine":"asian","difficulty":"medium","vegetarian":true},{"id":3,"name":"Curry","minutes":112,"calories":800,"cuisine":"italian","difficulty":"medium","vegetarian":false}]);
});

test("no filter", async () => {
  const res = await request(app).get("/recipes");
  expect(res.body).toEqual([{"id":1,"name":"Shakshuka","minutes":52,"calories":545,"cuisine":"italian","difficulty":"easy","vegetarian":true},{"id":2,"name":"Pancakes","minutes":39,"calories":529,"cuisine":"asian","difficulty":"medium","vegetarian":true},{"id":3,"name":"Curry","minutes":112,"calories":800,"cuisine":"italian","difficulty":"medium","vegetarian":false},{"id":4,"name":"Risotto","minutes":34,"calories":430,"cuisine":"middle-eastern","difficulty":"hard","vegetarian":false},{"id":5,"name":"Chili","minutes":110,"calories":940,"cuisine":"mexican","difficulty":"easy","vegetarian":true},{"id":6,"name":"Ramen","minutes":75,"calories":460,"cuisine":"italian","difficulty":"easy","vegetarian":true},{"id":7,"name":"Paella","minutes":66,"calories":784,"cuisine":"middle-eastern","difficulty":"hard","vegetarian":false},{"id":8,"name":"Tacos","minutes":80,"calories":610,"cuisine":"italian","difficulty":"hard","vegetarian":true}]);
});

test("no matches", async () => {
  const res = await request(app).get("/recipes?difficulty=nope");
  expect(res.body).toEqual([]);
});
