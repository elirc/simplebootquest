function validateCar(input) {
  if (typeof input !== 'object' || input === null || Array.isArray(input)) return { ok: false, errors: [{ field: '_', message: 'must be an object' }] };
  const errors = [];
  if ((typeof input.model !== 'string' || input.model.trim() === '' || input.model.length > 40)) errors.push({ field: 'model', message: 'must be 1-40 characters' });
  if ((typeof input.priceK !== 'number' || Number.isNaN(input.priceK) || input.priceK < 14 || input.priceK > 58)) errors.push({ field: 'priceK', message: 'must be a number from 14 to 58' });
  if ((typeof input.km !== 'number' || Number.isNaN(input.km) || input.km < 0 || input.km > 180000)) errors.push({ field: 'km', message: 'must be a number from 0 to 180000' });
  if ((typeof input.year !== 'number' || Number.isNaN(input.year) || input.year < 2008 || input.year > 2024)) errors.push({ field: 'year', message: 'must be a number from 2008 to 2024' });
  if (!["petrol","diesel","electric","hybrid"].includes(input.fuel)) errors.push({ field: 'fuel', message: 'must be one of petrol, diesel, electric, hybrid' });
  if (errors.length) return { ok: false, errors };
  // Only known fields pass through (no mass assignment).
  const data = {};
  for (const key of ["model","priceK","km","year","fuel"]) if (input[key] !== undefined) data[key] = key === 'model' ? input[key].trim() : input[key];
  return { ok: true, data };
}
