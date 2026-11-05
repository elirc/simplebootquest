test("accepts a valid body (trimmed)", () => {
  expect(validateHotel({"name":"  Northern Star ","nightlyPrice":375,"stars":5,"city":"Lisbon"})).toEqual({"ok":true,"data":{"name":"Northern Star","nightlyPrice":375,"stars":5,"city":"Lisbon"}});
});

test("requires a name", () => {
  expect(validateHotel({"name":"   ","nightlyPrice":375,"stars":5,"city":"Lisbon"})).toEqual({"ok":false,"errors":[{"field":"name","message":"must be 1-40 characters"}]});
});

test("checks number ranges", () => {
  expect(validateHotel({"name":"  Northern Star ","nightlyPrice":44,"stars":5,"city":"Lisbon"})).toEqual({"ok":false,"errors":[{"field":"nightlyPrice","message":"must be a number from 45 to 420"}]});
});

test("rejects wrong types", () => {
  expect(validateHotel({"name":"  Northern Star ","nightlyPrice":"45","stars":5,"city":"Lisbon"})).toEqual({"ok":false,"errors":[{"field":"nightlyPrice","message":"must be a number from 45 to 420"}]});
});

test("reports every problem at once", () => {
  expect(validateHotel({"name":"","city":"nope"})).toEqual({"ok":false,"errors":[{"field":"name","message":"must be 1-40 characters"},{"field":"nightlyPrice","message":"must be a number from 45 to 420"},{"field":"stars","message":"must be a number from 1 to 5"},{"field":"city","message":"must be one of Lisbon, Kyoto, Toronto"}]});
});

test("strips unknown fields like ownerId", () => {
  expect(validateHotel({"name":"  Northern Star ","nightlyPrice":375,"stars":5,"city":"Lisbon","ownerId":99})).toEqual({"ok":true,"data":{"name":"Northern Star","nightlyPrice":375,"stars":5,"city":"Lisbon"}});
});

test("rejects null", () => {
  expect(validateHotel(null)).toEqual({"ok":false,"errors":[{"field":"_","message":"must be an object"}]});
});
