function validateTransaction(input) {
  if (typeof input !== 'object' || input === null || Array.isArray(input)) return { ok: false, errors: [{ field: '_', message: 'must be an object' }] };
  const errors = [];
  if ((typeof input.reference !== 'string' || input.reference.trim() === '' || input.reference.length > 40)) errors.push({ field: 'reference', message: 'must be 1-40 characters' });
  if ((typeof input.amount !== 'number' || Number.isNaN(input.amount) || input.amount < -400 || input.amount > 1200)) errors.push({ field: 'amount', message: 'must be a number from -400 to 1200' });
  if ((typeof input.day !== 'number' || Number.isNaN(input.day) || input.day < 1 || input.day > 28)) errors.push({ field: 'day', message: 'must be a number from 1 to 28' });
  if (!["food","rent","salary","travel","fun"].includes(input.category)) errors.push({ field: 'category', message: 'must be one of food, rent, salary, travel, fun' });
  if (errors.length) return { ok: false, errors };
  // Only known fields pass through (no mass assignment).
  const data = {};
  for (const key of ["reference","amount","day","category"]) if (input[key] !== undefined) data[key] = key === 'reference' ? input[key].trim() : input[key];
  return { ok: true, data };
}
