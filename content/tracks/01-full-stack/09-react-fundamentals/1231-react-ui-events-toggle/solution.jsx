function EventToggle({ items }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen((o) => !o)}>{open ? 'Hide events' : 'Show events'}</button>
      {open && (
        <ul>
          {items.map((x) => (
            <li key={x.id}>{x.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
