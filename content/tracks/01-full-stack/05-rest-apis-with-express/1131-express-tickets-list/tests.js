// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = tickets.map((x) => ({ ...x }));
  return () => { tickets.length = 0; tickets.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("lists everything", async () => {
  const res = await request(app).get("/tickets");
  expect(res.status).toBe(200);
  expect(res.body).toEqual([{"id":1,"subject":"Bug in export","ageHours":186,"replies":11,"priority":"urgent","channel":"email","resolved":false},{"id":2,"subject":"Missing order","ageHours":43,"replies":4,"priority":"low","channel":"phone","resolved":true},{"id":3,"subject":"Password reset","ageHours":91,"replies":3,"priority":"urgent","channel":"chat","resolved":true},{"id":4,"subject":"App crash","ageHours":31,"replies":9,"priority":"urgent","channel":"email","resolved":true},{"id":5,"subject":"Refund request","ageHours":86,"replies":6,"priority":"urgent","channel":"email","resolved":true},{"id":6,"subject":"Wrong invoice","ageHours":78,"replies":11,"priority":"normal","channel":"email","resolved":false},{"id":7,"subject":"Dark mode","ageHours":166,"replies":12,"priority":"normal","channel":"chat","resolved":true},{"id":8,"subject":"Billing error","ageHours":171,"replies":1,"priority":"low","channel":"chat","resolved":true}]);
});
