function Field({ id, label, type = 'text', value, onChange, hint, error, required }) {
  const hintId = hint ? `${id}-hint` : null;
  const errorId = error ? `${id}-error` : null;
  const describedBy = [hintId, errorId].filter(Boolean).join(' ') || undefined;
  return (
    <div className="field">
      <label htmlFor={id}>
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
        onChange={(e) => onChange(e.target.value)}
      />
      {hint && <p id={hintId} className="hint">{hint}</p>}
      {error && <p id={errorId} className="error" role="alert">{error}</p>}
    </div>
  );
}
