function validateOrder(input) {
  if (typeof input !== 'object' || input === null || Array.isArray(input)) return { ok: false, errors: [{ field: '_', message: 'must be an object' }] };
  const errors = [];
  if ((typeof input.code !== 'string' || input.code.trim() === '' || input.code.length > 40)) errors.push({ field: 'code', message: 'must be 1-40 characters' });
  if ((typeof input.totalCents !== 'number' || Number.isNaN(input.totalCents) || input.totalCents < 500 || input.totalCents > 25000)) errors.push({ field: 'totalCents', message: 'must be a number from 500 to 25000' });
  if ((typeof input.items !== 'number' || Number.isNaN(input.items) || input.items < 1 || input.items > 9)) errors.push({ field: 'items', message: 'must be a number from 1 to 9' });
  if (!["pending","paid","shipped","cancelled"].includes(input.status)) errors.push({ field: 'status', message: 'must be one of pending, paid, shipped, cancelled' });
  if (!["UK","US","DE"].includes(input.country)) errors.push({ field: 'country', message: 'must be one of UK, US, DE' });
  if (errors.length) return { ok: false, errors };
  // Only known fields pass through (no mass assignment).
  const data = {};
  for (const key of ["code","totalCents","items","status","country"]) if (input[key] !== undefined) data[key] = key === 'code' ? input[key].trim() : input[key];
  return { ok: true, data };
}
