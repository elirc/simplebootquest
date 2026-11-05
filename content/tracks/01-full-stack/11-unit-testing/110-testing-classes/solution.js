describe('Inventory', () => {
  let inv;
  beforeEach(() => {
    inv = new Inventory();
    inv.receive('pen', 10);
    inv.receive('cup', 2);
  });

  test('receive adds to existing stock', () => {
    inv.receive('pen', 5);
    expect(inv.available('pen')).toBe(15);
    expect(inv.available('ghost')).toBe(0);
  });

  test('receive rejects invalid quantities', () => {
    for (const bad of [0, -1, 1.5]) expect(() => inv.receive('pen', bad)).toThrow(RangeError);
  });

  test('reserve reduces stock', () => {
    expect(inv.reserve('pen', 4)).toBe(true);
    expect(inv.available('pen')).toBe(6);
  });

  test('reserve can take exactly everything', () => {
    expect(inv.reserve('cup', 2)).toBe(true);
    expect(inv.available('cup')).toBe(0);
  });

  test('reserve fails without changing stock when there is not enough', () => {
    expect(inv.reserve('cup', 3)).toBe(false);
    expect(inv.available('cup')).toBe(2);
  });

  test('lowStock includes the threshold and is sorted', () => {
    inv.receive('bag', 1);
    expect(inv.lowStock(2)).toEqual(['bag', 'cup']);
    expect(inv.lowStock(1)).toEqual(['bag']);
  });
});
