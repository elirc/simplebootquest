const active = (todos) => todos.filter((t) => !t.done);

const compact = (values) => values.filter(Boolean);

const search = (users, text) => users.filter((u) => u.name.toLowerCase().includes(text.toLowerCase()));

const between = (numbers, min, max) => numbers.filter((n) => n >= min && n <= max);

function withoutIds(records, idsToRemove) {
  const remove = new Set(idsToRemove);
  return records.filter((r) => !remove.has(r.id));
}
