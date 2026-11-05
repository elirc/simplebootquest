function TicketToggle({ items }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen((o) => !o)}>{open ? 'Hide tickets' : 'Show tickets'}</button>
      {open && (
        <ul>
          {items.map((x) => (
            <li key={x.id}>{x.subject}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
