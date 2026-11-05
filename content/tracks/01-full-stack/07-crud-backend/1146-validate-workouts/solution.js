function validateWorkout(input) {
  if (typeof input !== 'object' || input === null || Array.isArray(input)) return { ok: false, errors: [{ field: '_', message: 'must be an object' }] };
  const errors = [];
  if ((typeof input.label !== 'string' || input.label.trim() === '' || input.label.length > 40)) errors.push({ field: 'label', message: 'must be 1-40 characters' });
  if ((typeof input.minutes !== 'number' || Number.isNaN(input.minutes) || input.minutes < 15 || input.minutes > 120)) errors.push({ field: 'minutes', message: 'must be a number from 15 to 120' });
  if ((typeof input.calories !== 'number' || Number.isNaN(input.calories) || input.calories < 80 || input.calories > 900)) errors.push({ field: 'calories', message: 'must be a number from 80 to 900' });
  if (!["cardio","strength","mobility"].includes(input.kind)) errors.push({ field: 'kind', message: 'must be one of cardio, strength, mobility' });
  if (errors.length) return { ok: false, errors };
  // Only known fields pass through (no mass assignment).
  const data = {};
  for (const key of ["label","minutes","calories","kind"]) if (input[key] !== undefined) data[key] = key === 'label' ? input[key].trim() : input[key];
  return { ok: true, data };
}
