export class ValidationError extends Error {
  constructor(public fields: Record<string, string>) {
    super('Validation failed');
  }
}

export function applyPatch(todo: any, patch: Record<string, unknown>) {
  return { ...todo, ...patch };
}
