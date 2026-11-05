function validatePlantUpdate(input) {
  if (typeof input !== 'object' || input === null || Array.isArray(input)) return { ok: false, errors: [{ field: '_', message: 'must be an object' }] };
  const errors = [];
  if (input.name !== undefined && (typeof input.name !== 'string' || input.name.trim() === '' || input.name.length > 40)) errors.push({ field: 'name', message: 'must be 1-40 characters' });
  if (input.waterEveryDays !== undefined && (typeof input.waterEveryDays !== 'number' || Number.isNaN(input.waterEveryDays) || input.waterEveryDays < 1 || input.waterEveryDays > 21)) errors.push({ field: 'waterEveryDays', message: 'must be a number from 1 to 21' });
  if (input.heightCm !== undefined && (typeof input.heightCm !== 'number' || Number.isNaN(input.heightCm) || input.heightCm < 5 || input.heightCm > 160)) errors.push({ field: 'heightCm', message: 'must be a number from 5 to 160' });
  if (input.light !== undefined && !["low","medium","bright"].includes(input.light)) errors.push({ field: 'light', message: 'must be one of low, medium, bright' });
  if (input.petSafe !== undefined && typeof input.petSafe !== 'boolean') errors.push({ field: 'petSafe', message: 'must be true or false' });
  if (errors.length) return { ok: false, errors };
  // Only known fields pass through (no mass assignment).
  const data = {};
  for (const key of ["name","waterEveryDays","heightCm","light","petSafe"]) if (input[key] !== undefined) data[key] = key === 'name' ? input[key].trim() : input[key];
  return { ok: true, data };
}
