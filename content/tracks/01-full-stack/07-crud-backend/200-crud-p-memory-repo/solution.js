function createRepo({ now = () => new Date().toISOString() } = {}) {
  const rows = new Map();
  let nextId = 1;
  const copy = (r) => ({ ...r });
  return {
    create(data) {
      const t = now();
      const row = { ...data, id: nextId++, createdAt: t, updatedAt: t };
      rows.set(row.id, row);
      return copy(row);
    },
    findById(id) {
      const row = rows.get(id);
      return row ? copy(row) : null;
    },
    findMany({ where = {}, orderBy, take, skip = 0 } = {}) {
      let list = [...rows.values()].filter((r) => Object.entries(where).every(([k, v]) => r[k] === v));
      if (orderBy) {
        const [[field, dir]] = Object.entries(orderBy);
        const sign = dir === 'desc' ? -1 : 1;
        list = list.sort((a, b) => (a[field] < b[field] ? -sign : a[field] > b[field] ? sign : 0));
      }
      list = list.slice(skip, take === undefined ? undefined : skip + take);
      return list.map(copy);
    },
    update(id, data) {
      const row = rows.get(id);
      if (!row) return null;
      const { id: _id, createdAt: _c, ...rest } = data;
      Object.assign(row, rest, { updatedAt: now() });
      return copy(row);
    },
    delete(id) {
      return rows.delete(id);
    },
  };
}
