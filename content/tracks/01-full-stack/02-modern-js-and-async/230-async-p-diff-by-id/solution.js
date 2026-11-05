function diffById(before, after) {
  const b = new Map(before.map((r) => [r.id, r]));
  const a = new Map(after.map((r) => [r.id, r]));
  const sort = (ids) => ids.sort((x, y) => x - y);
  return {
    added: sort([...a.keys()].filter((id) => !b.has(id))),
    removed: sort([...b.keys()].filter((id) => !a.has(id))),
    changed: sort([...a.keys()].filter((id) => b.has(id) && JSON.stringify(a.get(id)) !== JSON.stringify(b.get(id)))),
  };
}
