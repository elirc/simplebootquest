function validateTaskUpdate(input) {
  if (typeof input !== 'object' || input === null || Array.isArray(input)) return { ok: false, errors: [{ field: '_', message: 'must be an object' }] };
  const errors = [];
  if (input.title !== undefined && (typeof input.title !== 'string' || input.title.trim() === '' || input.title.length > 40)) errors.push({ field: 'title', message: 'must be 1-40 characters' });
  if (input.estimate !== undefined && (typeof input.estimate !== 'number' || Number.isNaN(input.estimate) || input.estimate < 1 || input.estimate > 16)) errors.push({ field: 'estimate', message: 'must be a number from 1 to 16' });
  if (input.priority !== undefined && (typeof input.priority !== 'number' || Number.isNaN(input.priority) || input.priority < 1 || input.priority > 5)) errors.push({ field: 'priority', message: 'must be a number from 1 to 5' });
  if (input.status !== undefined && !["todo","doing","done"].includes(input.status)) errors.push({ field: 'status', message: 'must be one of todo, doing, done' });
  if (input.assignee !== undefined && !["ada","grace","linus"].includes(input.assignee)) errors.push({ field: 'assignee', message: 'must be one of ada, grace, linus' });
  if (input.blocked !== undefined && typeof input.blocked !== 'boolean') errors.push({ field: 'blocked', message: 'must be true or false' });
  if (errors.length) return { ok: false, errors };
  // Only known fields pass through (no mass assignment).
  const data = {};
  for (const key of ["title","estimate","priority","status","assignee","blocked"]) if (input[key] !== undefined) data[key] = key === 'title' ? input[key].trim() : input[key];
  return { ok: true, data };
}
