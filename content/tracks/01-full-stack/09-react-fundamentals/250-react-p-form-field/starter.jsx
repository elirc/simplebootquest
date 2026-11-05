function Field({ id, label, type = 'text', value, onChange, hint, error, required }) {
  return (
    <div className="field">
      <label>{label}</label>
      <input value={value} onChange={onChange} />
      {error && <p className="error">{error}</p>}
    </div>
  );
}
