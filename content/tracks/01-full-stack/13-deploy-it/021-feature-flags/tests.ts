test('bucket is stable and in range', () => {
  expect(bucket('new-ui', 'u1')).toBe(bucket('new-ui', 'u1'));
  for (let i = 0; i < 50; i++) {
    const b = bucket('flag', `user${i}`);
    expect(b).toBeGreaterThanOrEqual(0);
    expect(b).toBeLessThan(100);
  }
});

test('rollout percentage is roughly right', () => {
  const flags = { beta: { enabled: true, rollout: 20 } };
  let on = 0;
  for (let i = 0; i < 2000; i++) if (isEnabled(flags, 'beta', { id: `user-${i}` })) on++;
  expect(on / 2000).toBeGreaterThan(0.15);
  expect(on / 2000).toBeLessThan(0.25);
});

test('allow, deny, disabled and unknown', () => {
  const flags = { f: { enabled: true, rollout: 0, allow: ['staff'], deny: ['banned'] }, off: { enabled: false, allow: ['staff'] } };
  expect(isEnabled(flags, 'f', { id: 'staff' })).toBe(true);
  expect(isEnabled(flags, 'f', { id: 'random' })).toBe(false);
  expect(isEnabled({ f: { ...flags.f, rollout: 100 } }, 'f', { id: 'banned' })).toBe(false);
  expect(isEnabled(flags, 'off', { id: 'staff' })).toBe(false);
  expect(isEnabled(flags, 'missing', { id: 'x' })).toBe(false);
  expect(isEnabled({ g: { enabled: true } }, 'g', { id: 'x' })).toBe(true);
});
