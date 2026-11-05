test("accepts a valid body (trimmed)", () => {
  expect(validateRepo({"name":"  analytics ","stars":5301,"openIssues":35,"language":"Go"})).toEqual({"ok":true,"data":{"name":"analytics","stars":5301,"openIssues":35,"language":"Go"}});
});

test("requires a name", () => {
  expect(validateRepo({"name":"   ","stars":5301,"openIssues":35,"language":"Go"})).toEqual({"ok":false,"errors":[{"field":"name","message":"must be 1-40 characters"}]});
});

test("checks number ranges", () => {
  expect(validateRepo({"name":"  analytics ","stars":-1,"openIssues":35,"language":"Go"})).toEqual({"ok":false,"errors":[{"field":"stars","message":"must be a number from 0 to 5400"}]});
});

test("rejects wrong types", () => {
  expect(validateRepo({"name":"  analytics ","stars":"0","openIssues":35,"language":"Go"})).toEqual({"ok":false,"errors":[{"field":"stars","message":"must be a number from 0 to 5400"}]});
});

test("reports every problem at once", () => {
  expect(validateRepo({"name":"","language":"nope"})).toEqual({"ok":false,"errors":[{"field":"name","message":"must be 1-40 characters"},{"field":"stars","message":"must be a number from 0 to 5400"},{"field":"openIssues","message":"must be a number from 0 to 140"},{"field":"language","message":"must be one of TypeScript, Go, Python"}]});
});

test("strips unknown fields like ownerId", () => {
  expect(validateRepo({"name":"  analytics ","stars":5301,"openIssues":35,"language":"Go","ownerId":99})).toEqual({"ok":true,"data":{"name":"analytics","stars":5301,"openIssues":35,"language":"Go"}});
});

test("rejects null", () => {
  expect(validateRepo(null)).toEqual({"ok":false,"errors":[{"field":"_","message":"must be an object"}]});
});
