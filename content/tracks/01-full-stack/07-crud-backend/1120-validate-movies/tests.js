test("accepts a valid body (trimmed)", () => {
  expect(validateMovie({"title":"  Night Train ","year":2011,"minutes":162,"rating":5,"genre":"sci-fi"})).toEqual({"ok":true,"data":{"title":"Night Train","year":2011,"minutes":162,"rating":5,"genre":"sci-fi"}});
});

test("requires a name", () => {
  expect(validateMovie({"title":"   ","year":2011,"minutes":162,"rating":5,"genre":"sci-fi"})).toEqual({"ok":false,"errors":[{"field":"title","message":"must be 1-40 characters"}]});
});

test("checks number ranges", () => {
  expect(validateMovie({"title":"  Night Train ","year":1979,"minutes":162,"rating":5,"genre":"sci-fi"})).toEqual({"ok":false,"errors":[{"field":"year","message":"must be a number from 1980 to 2024"}]});
});

test("rejects wrong types", () => {
  expect(validateMovie({"title":"  Night Train ","year":"1980","minutes":162,"rating":5,"genre":"sci-fi"})).toEqual({"ok":false,"errors":[{"field":"year","message":"must be a number from 1980 to 2024"}]});
});

test("reports every problem at once", () => {
  expect(validateMovie({"title":"","genre":"nope"})).toEqual({"ok":false,"errors":[{"field":"title","message":"must be 1-40 characters"},{"field":"year","message":"must be a number from 1980 to 2024"},{"field":"minutes","message":"must be a number from 82 to 175"},{"field":"rating","message":"must be a number from 4 to 9.5"},{"field":"genre","message":"must be one of drama, comedy, sci-fi, thriller"}]});
});

test("strips unknown fields like ownerId", () => {
  expect(validateMovie({"title":"  Night Train ","year":2011,"minutes":162,"rating":5,"genre":"sci-fi","ownerId":99})).toEqual({"ok":true,"data":{"title":"Night Train","year":2011,"minutes":162,"rating":5,"genre":"sci-fi"}});
});

test("rejects null", () => {
  expect(validateMovie(null)).toEqual({"ok":false,"errors":[{"field":"_","message":"must be an object"}]});
});
