function TransactionToggle({ items }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen((o) => !o)}>{open ? 'Hide transactions' : 'Show transactions'}</button>
      {open && (
        <ul>
          {items.map((x) => (
            <li key={x.id}>{x.reference}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
