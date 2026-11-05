test("accepts a valid body (trimmed)", () => {
  expect(validateEmployee({"name":"  Ada ","salary":99299,"yearsAtCompany":6,"team":"product","level":"senior"})).toEqual({"ok":true,"data":{"name":"Ada","salary":99299,"yearsAtCompany":6,"team":"product","level":"senior"}});
});

test("requires a name", () => {
  expect(validateEmployee({"name":"   ","salary":99299,"yearsAtCompany":6,"team":"product","level":"senior"})).toEqual({"ok":false,"errors":[{"field":"name","message":"must be 1-40 characters"}]});
});

test("checks number ranges", () => {
  expect(validateEmployee({"name":"  Ada ","salary":41999,"yearsAtCompany":6,"team":"product","level":"senior"})).toEqual({"ok":false,"errors":[{"field":"salary","message":"must be a number from 42000 to 160000"}]});
});

test("rejects wrong types", () => {
  expect(validateEmployee({"name":"  Ada ","salary":"42000","yearsAtCompany":6,"team":"product","level":"senior"})).toEqual({"ok":false,"errors":[{"field":"salary","message":"must be a number from 42000 to 160000"}]});
});

test("reports every problem at once", () => {
  expect(validateEmployee({"name":"","team":"nope"})).toEqual({"ok":false,"errors":[{"field":"name","message":"must be 1-40 characters"},{"field":"salary","message":"must be a number from 42000 to 160000"},{"field":"yearsAtCompany","message":"must be a number from 0 to 15"},{"field":"team","message":"must be one of platform, product, data"},{"field":"level","message":"must be one of junior, mid, senior"}]});
});

test("strips unknown fields like ownerId", () => {
  expect(validateEmployee({"name":"  Ada ","salary":99299,"yearsAtCompany":6,"team":"product","level":"senior","ownerId":99})).toEqual({"ok":true,"data":{"name":"Ada","salary":99299,"yearsAtCompany":6,"team":"product","level":"senior"}});
});

test("rejects null", () => {
  expect(validateEmployee(null)).toEqual({"ok":false,"errors":[{"field":"_","message":"must be an object"}]});
});
