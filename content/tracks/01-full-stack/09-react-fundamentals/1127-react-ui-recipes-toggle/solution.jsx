function RecipeToggle({ items }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen((o) => !o)}>{open ? 'Hide recipes' : 'Show recipes'}</button>
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
