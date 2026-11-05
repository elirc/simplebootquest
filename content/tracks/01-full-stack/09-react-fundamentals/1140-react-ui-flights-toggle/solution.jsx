function FlightToggle({ items }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen((o) => !o)}>{open ? 'Hide flights' : 'Show flights'}</button>
      {open && (
        <ul>
          {items.map((x) => (
            <li key={x.id}>{x.number}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
