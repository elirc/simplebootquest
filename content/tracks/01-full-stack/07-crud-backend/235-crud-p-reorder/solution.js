function moveItem(items, id, toIndex) {
  const sorted = [...items].sort((a, b) => a.position - b.position);
  const from = sorted.findIndex((i) => i.id === id);
  if (from === -1) throw new Error('Item not found');
  const [moved] = sorted.splice(from, 1);
  const target = Math.max(0, Math.min(toIndex, sorted.length));
  sorted.splice(target, 0, moved);
  const original = new Map(items.map((i) => [i.id, i.position]));
  const result = sorted.map((item, position) => ({ ...item, position }));
  const changed = result.filter((i) => original.get(i.id) !== i.position).map((i) => i.id);
  return { items: result, changed };
}
