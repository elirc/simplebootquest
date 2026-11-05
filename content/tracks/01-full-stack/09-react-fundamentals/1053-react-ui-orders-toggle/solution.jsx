function OrderToggle({ items }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen((o) => !o)}>{open ? 'Hide orders' : 'Show orders'}</button>
      {open && (
        <ul>
          {items.map((x) => (
            <li key={x.id}>{x.code}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
