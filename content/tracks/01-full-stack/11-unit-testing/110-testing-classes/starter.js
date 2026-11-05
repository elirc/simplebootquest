describe('Inventory', () => {
  let inv;
  beforeEach(() => {
    inv = new Inventory();
  });

  test('receives stock', () => {
    inv.receive('pen', 10);
    expect(inv.available('pen')).toBe(10);
  });
});
