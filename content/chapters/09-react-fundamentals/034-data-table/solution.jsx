function DataTable({ rows, columns, sort, onSort, emptyMessage = 'No results' }) {
  const sorted = sort
    ? [...rows].sort((a, b) => {
        const av = a[sort.key];
        const bv = b[sort.key];
        const cmp = av < bv ? -1 : av > bv ? 1 : 0;
        return sort.dir === 'asc' ? cmp : -cmp;
      })
    : rows;

  return (
    <table>
      <thead>
        <tr>
          {columns.map((col) => {
            const active = sort?.key === col.key;
            return (
              <th key={col.key} aria-sort={active ? (sort.dir === 'asc' ? 'ascending' : 'descending') : undefined}>
                {col.sortable ? (
                  <button onClick={() => onSort({ key: col.key, dir: active && sort.dir === 'asc' ? 'desc' : 'asc' })}>{col.label}</button>
                ) : (
                  col.label
                )}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {sorted.length === 0 ? (
          <tr>
            <td colSpan={columns.length}>{emptyMessage}</td>
          </tr>
        ) : (
          sorted.map((row) => (
            <tr key={row.id}>
              {columns.map((col) => (
                <td key={col.key}>{col.render ? col.render(row) : row[col.key]}</td>
              ))}
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}
