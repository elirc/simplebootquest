test('does not mutate the input', () => {
  const before = JSON.stringify(CARS);
  bumpPriceK(CARS, "petrol", 10);
  expect(JSON.stringify(CARS)).toBe(before);
});

test("with \"petrol\", 10", () => {
  expect(bumpPriceK(CARS, "petrol", 10)).toEqual([{"id":1,"model":"Polo","priceK":42,"km":129232,"year":2013,"fuel":"electric"},{"id":2,"model":"Fiesta","priceK":40,"km":51015,"year":2022,"fuel":"hybrid"},{"id":3,"model":"Ioniq","priceK":30,"km":164713,"year":2018,"fuel":"diesel"},{"id":4,"model":"Prius","priceK":27,"km":30049,"year":2018,"fuel":"hybrid"},{"id":5,"model":"Mustang","priceK":62,"km":173281,"year":2019,"fuel":"petrol"},{"id":6,"model":"Model 3","priceK":31,"km":97819,"year":2017,"fuel":"electric"},{"id":7,"model":"Golf","priceK":33,"km":113352,"year":2015,"fuel":"diesel"},{"id":8,"model":"Leaf","priceK":43,"km":79126,"year":2022,"fuel":"electric"}]);
});

test("with \"diesel\", 1", () => {
  expect(bumpPriceK(CARS, "diesel", 1)).toEqual([{"id":1,"model":"Polo","priceK":42,"km":129232,"year":2013,"fuel":"electric"},{"id":2,"model":"Fiesta","priceK":40,"km":51015,"year":2022,"fuel":"hybrid"},{"id":3,"model":"Ioniq","priceK":31,"km":164713,"year":2018,"fuel":"diesel"},{"id":4,"model":"Prius","priceK":27,"km":30049,"year":2018,"fuel":"hybrid"},{"id":5,"model":"Mustang","priceK":52,"km":173281,"year":2019,"fuel":"petrol"},{"id":6,"model":"Model 3","priceK":31,"km":97819,"year":2017,"fuel":"electric"},{"id":7,"model":"Golf","priceK":34,"km":113352,"year":2015,"fuel":"diesel"},{"id":8,"model":"Leaf","priceK":43,"km":79126,"year":2022,"fuel":"electric"}]);
});
