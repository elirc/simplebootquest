function CarToggle({ items }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen((o) => !o)}>{open ? 'Hide cars' : 'Show cars'}</button>
      {open && (
        <ul>
          {items.map((x) => (
            <li key={x.id}>{x.model}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
