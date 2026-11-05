function CourseToggle({ items }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen((o) => !o)}>{open ? 'Hide courses' : 'Show courses'}</button>
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
