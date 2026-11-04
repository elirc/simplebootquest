---
slug: "react-data-table"
title: "Building a Sortable Table"
type: "code"
language: "jsx"
xp: 25
hints: ["Sort a copy: `[...rows].sort(...)`.", "The next direction is \"desc\" only when this column is currently sorted ascending."]
---
# Building a Sortable Table

Tables are everywhere in CRUD apps. A reusable `DataTable` takes **column definitions as data**, so each screen only describes *what* to show:

```jsx
const columns = [
  { key: 'name', label: 'Name', sortable: true },
  { key: 'price', label: 'Price', sortable: true, render: (row) => `$${row.price}` },
];
<DataTable rows={products} columns={columns} sort={{ key: 'price', dir: 'asc' }} onSort={setSort} />
```

The table doesn't own the sort state. It **reports** clicks through `onSort`, and the parent decides. That's "controlled" components again.

## Your task

`DataTable({ rows, columns, sort, onSort, emptyMessage = 'No results' })` renders a `<table>` with:

- `<thead><tr>` containing one `<th>` per column. Sortable columns contain a `<button>` with the label. Clicking it calls `onSort({ key, dir })`, where `dir` is `'desc'` if the column is already sorted `'asc'`, otherwise `'asc'`. The active sorted column's `<th>` gets `aria-sort="ascending"` or `aria-sort="descending"`.
- `<tbody>` with a `<tr key={row.id}>` per row (**sorted** according to `sort`, without mutating `rows`) and a `<td>` per column, showing `column.render ? column.render(row) : row[column.key]`.
- If there are no rows, a single `<tr><td colSpan={columns.length}>{emptyMessage}</td></tr>`.
