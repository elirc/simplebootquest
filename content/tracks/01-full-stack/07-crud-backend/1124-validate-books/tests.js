test("accepts a valid body (trimmed)", () => {
  expect(validateBook({"title":"  Rebecca ","pages":144,"year":1927,"genre":"sci-fi"})).toEqual({"ok":true,"data":{"title":"Rebecca","pages":144,"year":1927,"genre":"sci-fi"}});
});

test("requires a name", () => {
  expect(validateBook({"title":"   ","pages":144,"year":1927,"genre":"sci-fi"})).toEqual({"ok":false,"errors":[{"field":"title","message":"must be 1-40 characters"}]});
});

test("checks number ranges", () => {
  expect(validateBook({"title":"  Rebecca ","pages":119,"year":1927,"genre":"sci-fi"})).toEqual({"ok":false,"errors":[{"field":"pages","message":"must be a number from 120 to 780"}]});
});

test("rejects wrong types", () => {
  expect(validateBook({"title":"  Rebecca ","pages":"120","year":1927,"genre":"sci-fi"})).toEqual({"ok":false,"errors":[{"field":"pages","message":"must be a number from 120 to 780"}]});
});

test("reports every problem at once", () => {
  expect(validateBook({"title":"","genre":"nope"})).toEqual({"ok":false,"errors":[{"field":"title","message":"must be 1-40 characters"},{"field":"pages","message":"must be a number from 120 to 780"},{"field":"year","message":"must be a number from 1813 to 2015"},{"field":"genre","message":"must be one of fiction, classic, tech, sci-fi"}]});
});

test("strips unknown fields like ownerId", () => {
  expect(validateBook({"title":"  Rebecca ","pages":144,"year":1927,"genre":"sci-fi","ownerId":99})).toEqual({"ok":true,"data":{"title":"Rebecca","pages":144,"year":1927,"genre":"sci-fi"}});
});

test("rejects null", () => {
  expect(validateBook(null)).toEqual({"ok":false,"errors":[{"field":"_","message":"must be an object"}]});
});
