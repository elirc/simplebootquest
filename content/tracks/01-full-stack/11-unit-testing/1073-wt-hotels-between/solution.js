test("with 186, 211", () => {
  expect(hotelsInRange(HOTELS, 186, 211)).toEqual(["Sea Breeze","Maple House","Harbour View"]);
});

test("with 211, 272", () => {
  expect(hotelsInRange(HOTELS, 211, 272)).toEqual(["Sea Breeze","Riverside Inn"]);
});

test("with 186, 186", () => {
  expect(hotelsInRange(HOTELS, 186, 186)).toEqual(["Harbour View"]);
});
