function NewStudent({ create }) {
  const [value, setValue] = useState('');
  const [state, setState] = useState({ status: 'idle', error: null });
  async function onSubmit(e) {
    e.preventDefault();
    setState({ status: 'saving', error: null });
    try {
      await create({ name: value });
      setValue('');
      setState({ status: 'saved', error: null });
    } catch (err) {
      setState({ status: 'error', error: err.message });
    }
  }
  const saving = state.status === 'saving';
  return (
    <form onSubmit={onSubmit}>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button disabled={saving}>{saving ? 'Saving…' : 'Save'}</button>
      {state.status === 'saved' && <p role="status">Saved!</p>}
      {state.status === 'error' && <p role="alert">{state.error}</p>}
    </form>
  );
}
