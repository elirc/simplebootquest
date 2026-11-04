export class ValidationError extends Error {
  constructor(public fields: Record<string, string>) {
    super('Validation failed');
  }
}

const IMMUTABLE = new Set(['id', 'ownerId', 'createdAt']);
const NULLABLE = new Set(['dueDate', 'notes']);
const REQUIRED = new Set(['title', 'done']);

export function applyPatch<T extends Record<string, unknown>>(todo: T, patch: Record<string, unknown>): T {
  const errors: Record<string, string> = {};
  const updates: Record<string, unknown> = {};

  for (const [key, value] of Object.entries(patch)) {
    if (IMMUTABLE.has(key)) continue;
    if (!NULLABLE.has(key) && !REQUIRED.has(key)) {
      errors[key] = 'unknown field';
      continue;
    }
    if (value === undefined) continue;
    if (value === null) {
      if (REQUIRED.has(key)) errors[key] = 'cannot be null';
      else updates[key] = null;
      continue;
    }
    if (key === 'title') {
      const title = String(value).trim();
      if (!title) errors[key] = 'must not be empty';
      else updates[key] = title;
      continue;
    }
    updates[key] = value;
  }

  if (Object.keys(errors).length) throw new ValidationError(errors);
  return { ...todo, ...updates };
}
