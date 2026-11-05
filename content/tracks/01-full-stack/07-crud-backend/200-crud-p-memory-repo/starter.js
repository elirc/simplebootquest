function createRepo({ now = () => new Date().toISOString() } = {}) {
  const rows = [];
  return {
    create(data) { rows.push(data); return data; },
    findById(id) { return rows.find((r) => r.id === id); },
    findMany() { return rows; },
    update(id, data) { return null; },
    delete(id) { return false; },
  };
}
