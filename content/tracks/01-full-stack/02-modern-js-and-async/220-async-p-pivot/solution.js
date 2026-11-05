function pivot(rows, rowKey, colKey, valueKey) {
  return rows.reduce((acc, r) => {
    const row = (acc[r[rowKey]] ??= {});
    row[r[colKey]] = (row[r[colKey]] ?? 0) + r[valueKey];
    return acc;
  }, {});
}
