function checkField(rule, raw) {
  if (typeof raw !== rule.type) return { error: `must be a ${rule.type}` };
  const v = typeof raw === 'string' ? raw.trim() : raw;
  if (rule.type === 'number' && Number.isNaN(v)) return { error: 'must be a number' };
  if (rule.minLength !== undefined && v.length < rule.minLength) return { error: `must be at least ${rule.minLength} characters` };
  if (rule.maxLength !== undefined && v.length > rule.maxLength) return { error: `must be at most ${rule.maxLength} characters` };
  if (rule.min !== undefined && v < rule.min) return { error: `must be at least ${rule.min}` };
  if (rule.max !== undefined && v > rule.max) return { error: `must be at most ${rule.max}` };
  if (rule.enum && !rule.enum.includes(v)) return { error: `must be one of: ${rule.enum.join(', ')}` };
  return { value: v };
}

function validate(schema, data) {
  const errors = {};
  const value = {};
  const input = data ?? {};
  for (const [field, rule] of Object.entries(schema)) {
    const raw = input[field];
    if (raw === undefined) {
      if (rule.required) errors[field] = 'is required';
      else if (rule.default !== undefined) value[field] = rule.default;
      continue;
    }
    const result = checkField(rule, raw);
    if (result.error) errors[field] = result.error;
    else value[field] = result.value;
  }
  return Object.keys(errors).length > 0 ? { ok: false, errors } : { ok: true, value };
}
