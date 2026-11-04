const sumBy = (items, fn) => items.reduce((sum, item) => sum + fn(item), 0);

const indexBy = (records, key) => records.reduce((acc, r) => ({ ...acc, [r[key]]: r }), {});

function groupBy(records, key) {
  return records.reduce((acc, r) => {
    (acc[r[key]] ??= []).push(r);
    return acc;
  }, {});
}

const maxBy = (items, fn) => items.reduce((best, item) => (best === undefined || fn(item) > fn(best) ? item : best), undefined);

const pipeline = (value, fns) => fns.reduce((v, fn) => fn(v), value);
