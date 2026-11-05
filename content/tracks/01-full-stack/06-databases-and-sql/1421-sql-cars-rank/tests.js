test('returns the expected rows', () => {
  expect(result).toEqual([{"fuel":"diesel","model":"Mazda3","price_k":47,"rank":1},{"fuel":"diesel","model":"Ioniq","price_k":19,"rank":2},{"fuel":"electric","model":"Clio","price_k":40,"rank":1},{"fuel":"electric","model":"Golf","price_k":35,"rank":2},{"fuel":"electric","model":"Prius","price_k":30,"rank":3},{"fuel":"hybrid","model":"Model 3","price_k":58,"rank":1},{"fuel":"hybrid","model":"Fiesta","price_k":45,"rank":2},{"fuel":"petrol","model":"Leaf","price_k":53,"rank":1},{"fuel":"petrol","model":"Polo","price_k":39,"rank":2}]);
});
