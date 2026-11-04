function plan(sqlText) {
  return query(`EXPLAIN QUERY PLAN ${sqlText}`).map((r) => r.detail).join(' | ');
}

test('user timeline query uses an index without a temp sort', () => {
  const p = plan('SELECT * FROM events WHERE user_id = 42 ORDER BY created_at DESC');
  expect(p).toMatch(/USING INDEX/);
  expect(p).not.toMatch(/TEMP B-TREE/);
});

test('type filter uses an index', () => {
  expect(plan("SELECT * FROM events WHERE type = 'purchase'")).toMatch(/USING INDEX/);
});
