test('does not mutate the input', () => {
  const before = JSON.stringify(BOOKS);
  bumpPages(BOOKS, "fiction", 10);
  expect(JSON.stringify(BOOKS)).toBe(before);
});

test("with \"fiction\", 10", () => {
  expect(bumpPages(BOOKS, "fiction", 10)).toEqual([{"id":1,"title":"Neuromancer","pages":346,"year":1871,"genre":"fiction","available":false},{"id":2,"title":"Siddhartha","pages":723,"year":1984,"genre":"fiction","available":false},{"id":3,"title":"Ulysses","pages":200,"year":1831,"genre":"tech","available":true},{"id":4,"title":"Matilda","pages":166,"year":1937,"genre":"tech","available":true},{"id":5,"title":"Hamlet","pages":520,"year":1926,"genre":"classic","available":true},{"id":6,"title":"Dune","pages":161,"year":1873,"genre":"fiction","available":true},{"id":7,"title":"Persuasion","pages":278,"year":2003,"genre":"classic","available":true},{"id":8,"title":"Emma","pages":441,"year":1941,"genre":"fiction","available":true}]);
});

test("with \"classic\", 1", () => {
  expect(bumpPages(BOOKS, "classic", 1)).toEqual([{"id":1,"title":"Neuromancer","pages":336,"year":1871,"genre":"fiction","available":false},{"id":2,"title":"Siddhartha","pages":713,"year":1984,"genre":"fiction","available":false},{"id":3,"title":"Ulysses","pages":200,"year":1831,"genre":"tech","available":true},{"id":4,"title":"Matilda","pages":166,"year":1937,"genre":"tech","available":true},{"id":5,"title":"Hamlet","pages":521,"year":1926,"genre":"classic","available":true},{"id":6,"title":"Dune","pages":151,"year":1873,"genre":"fiction","available":true},{"id":7,"title":"Persuasion","pages":279,"year":2003,"genre":"classic","available":true},{"id":8,"title":"Emma","pages":431,"year":1941,"genre":"fiction","available":true}]);
});
