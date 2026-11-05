function BookToggle({ items }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen((o) => !o)}>{open ? 'Hide books' : 'Show books'}</button>
      {open && (
        <ul>
          {items.map((x) => (
            <li key={x.id}>{x.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
