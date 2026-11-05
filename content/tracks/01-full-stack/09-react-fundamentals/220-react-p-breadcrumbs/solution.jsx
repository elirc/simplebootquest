function Breadcrumbs({ items }) {
  if (items.length === 0) return null;
  return (
    <nav aria-label="Breadcrumb">
      <ol>
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.href ?? item.label}>
              {i > 0 && <span aria-hidden="true">/</span>}
              {last ? <span aria-current="page">{item.label}</span> : <a href={item.href}>{item.label}</a>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
