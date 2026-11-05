function Favourite({ id, initial, save }) {
  const [on, setOn] = useState(initial);
  const [error, setError] = useState(false);
  async function toggle() {
    const next = !on;
    setOn(next);
    setError(false);
    try {
      await save(id, next);
    } catch {
      setOn(!next);
      setError(true);
    }
  }
  return (
    <div>
      <button aria-pressed={on} onClick={toggle}>{on ? '★ Saved' : '☆ Save'}</button>
      {error && <p role="alert">Could not save</p>}
    </div>
  );
}
