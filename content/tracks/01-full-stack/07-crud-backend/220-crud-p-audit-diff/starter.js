function diff(before, after, { ignore = ['updatedAt'] } = {}) {
  return Object.keys(after).filter((k) => before[k] !== after[k]).map((field) => ({ field, from: before[field], to: after[field] }));
}
