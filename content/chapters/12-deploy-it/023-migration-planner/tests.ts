const m = (name, checksum = name + '-sum') => ({ name, checksum });

test('nothing applied yet', () => {
  expect(planMigrations([m('20260102_b'), m('20260101_a')], [])).toEqual({ ok: true, pending: ['20260101_a', '20260102_b'] });
});

test('only new migrations are pending', () => {
  expect(planMigrations([m('20260101_a'), m('20260102_b'), m('20260103_c')], [m('20260101_a'), m('20260102_b')])).toEqual({ ok: true, pending: ['20260103_c'] });
});

test('detects every problem', () => {
  const local = [m('20260101_a', 'EDITED'), m('20260102_b'), m('20260101_zz_late')];
  const applied = [m('20260101_a'), m('20260102_b'), m('20260105_hotfix')];
  expect(planMigrations(local, applied)).toEqual({
    ok: false,
    errors: ['Modified migration: 20260101_a', 'Missing locally: 20260105_hotfix', 'Out of order: 20260101_zz_late'],
  });
});
