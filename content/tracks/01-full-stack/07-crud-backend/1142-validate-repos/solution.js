function validateRepo(input) {
  if (typeof input !== 'object' || input === null || Array.isArray(input)) return { ok: false, errors: [{ field: '_', message: 'must be an object' }] };
  const errors = [];
  if ((typeof input.name !== 'string' || input.name.trim() === '' || input.name.length > 40)) errors.push({ field: 'name', message: 'must be 1-40 characters' });
  if ((typeof input.stars !== 'number' || Number.isNaN(input.stars) || input.stars < 0 || input.stars > 5400)) errors.push({ field: 'stars', message: 'must be a number from 0 to 5400' });
  if ((typeof input.openIssues !== 'number' || Number.isNaN(input.openIssues) || input.openIssues < 0 || input.openIssues > 140)) errors.push({ field: 'openIssues', message: 'must be a number from 0 to 140' });
  if (!["TypeScript","Go","Python"].includes(input.language)) errors.push({ field: 'language', message: 'must be one of TypeScript, Go, Python' });
  if (input.archived !== undefined && typeof input.archived !== 'boolean') errors.push({ field: 'archived', message: 'must be true or false' });
  if (errors.length) return { ok: false, errors };
  // Only known fields pass through (no mass assignment).
  const data = {};
  for (const key of ["name","stars","openIssues","language","archived"]) if (input[key] !== undefined) data[key] = key === 'name' ? input[key].trim() : input[key];
  return { ok: true, data };
}
