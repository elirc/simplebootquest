function MovieToggle({ items }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen((o) => !o)}>{open ? 'Hide movies' : 'Show movies'}</button>
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
