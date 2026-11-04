function required() {
  return (v) => (String(v ?? '').trim() === '' ? 'is required' : null);
}
function minLength(n) {
  return (v) => (String(v ?? '').length < n ? `must be at least ${n} characters` : null);
}
function maxLength(n) {
  return (v) => (String(v ?? '').length > n ? `must be at most ${n} characters` : null);
}
function matches(regex, message) {
  return (v) => (regex.test(String(v ?? '')) ? null : message);
}

function validateField(value, rules) {
  for (const rule of rules) {
    const error = rule(value);
    if (error) return error;
  }
  return null;
}

function validateForm(values, schema) {
  const errors = {};
  for (const [field, rules] of Object.entries(schema)) {
    const error = validateField(values[field], rules);
    if (error) errors[field] = error;
  }
  return errors;
}
