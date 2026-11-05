function validate(schema, input) {
  if (typeof input !== 'object' || input === null || Array.isArray(input)) {
    return { ok: false, errors: [{ path: '', message: 'Expected an object' }] };
  }
  const data = {};
  const errors = [];
  for (const [path, rule] of Object.entries(schema)) {
    let value = input[path];
    if (value === undefined) {
      if (rule.required) errors.push({ path, message: 'Required' });
      continue;
    }
    const typeOk = rule.type === 'number' ? typeof value === 'number' && !Number.isNaN(value) : typeof value === rule.type;
    if (!typeOk) {
      errors.push({ path, message: `Expected ${rule.type}` });
      continue;
    }
    if (rule.type === 'string') {
      value = value.trim();
      if (rule.required && value === '') {
        errors.push({ path, message: 'Required' });
        continue;
      }
      if (rule.maxLength !== undefined && value.length > rule.maxLength) {
        errors.push({ path, message: `Must be at most ${rule.maxLength} characters` });
        continue;
      }
    }
    if (rule.type === 'number') {
      if (rule.min !== undefined && value < rule.min) {
        errors.push({ path, message: `Must be at least ${rule.min}` });
        continue;
      }
      if (rule.max !== undefined && value > rule.max) {
        errors.push({ path, message: `Must be at most ${rule.max}` });
        continue;
      }
    }
    data[path] = value;
  }
  return errors.length ? { ok: false, errors } : { ok: true, data };
}
