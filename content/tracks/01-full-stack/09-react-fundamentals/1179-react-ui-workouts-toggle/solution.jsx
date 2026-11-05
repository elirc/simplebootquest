function WorkoutToggle({ items }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen((o) => !o)}>{open ? 'Hide workouts' : 'Show workouts'}</button>
      {open && (
        <ul>
          {items.map((x) => (
            <li key={x.id}>{x.label}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
