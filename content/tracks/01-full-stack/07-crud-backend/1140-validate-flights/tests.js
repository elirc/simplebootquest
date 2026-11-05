test("accepts a valid body (trimmed)", () => {
  expect(validateFlight({"number":"  DL15 ","durationMin":165,"delayMin":173,"seats":35,"airline":"skyteam"})).toEqual({"ok":true,"data":{"number":"DL15","durationMin":165,"delayMin":173,"seats":35,"airline":"skyteam"}});
});

test("requires a name", () => {
  expect(validateFlight({"number":"   ","durationMin":165,"delayMin":173,"seats":35,"airline":"skyteam"})).toEqual({"ok":false,"errors":[{"field":"number","message":"must be 1-40 characters"}]});
});

test("checks number ranges", () => {
  expect(validateFlight({"number":"  DL15 ","durationMin":54,"delayMin":173,"seats":35,"airline":"skyteam"})).toEqual({"ok":false,"errors":[{"field":"durationMin","message":"must be a number from 55 to 840"}]});
});

test("rejects wrong types", () => {
  expect(validateFlight({"number":"  DL15 ","durationMin":"55","delayMin":173,"seats":35,"airline":"skyteam"})).toEqual({"ok":false,"errors":[{"field":"durationMin","message":"must be a number from 55 to 840"}]});
});

test("reports every problem at once", () => {
  expect(validateFlight({"number":"","airline":"nope"})).toEqual({"ok":false,"errors":[{"field":"number","message":"must be 1-40 characters"},{"field":"durationMin","message":"must be a number from 55 to 840"},{"field":"delayMin","message":"must be a number from 0 to 180"},{"field":"seats","message":"must be a number from 0 to 48"},{"field":"airline","message":"must be one of oneworld, skyteam, star"}]});
});

test("strips unknown fields like ownerId", () => {
  expect(validateFlight({"number":"  DL15 ","durationMin":165,"delayMin":173,"seats":35,"airline":"skyteam","ownerId":99})).toEqual({"ok":true,"data":{"number":"DL15","durationMin":165,"delayMin":173,"seats":35,"airline":"skyteam"}});
});

test("rejects null", () => {
  expect(validateFlight(null)).toEqual({"ok":false,"errors":[{"field":"_","message":"must be an object"}]});
});
