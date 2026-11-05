function validateHotel(input) {
  if (typeof input !== 'object' || input === null || Array.isArray(input)) return { ok: false, errors: [{ field: '_', message: 'must be an object' }] };
  const errors = [];
  if ((typeof input.name !== 'string' || input.name.trim() === '' || input.name.length > 40)) errors.push({ field: 'name', message: 'must be 1-40 characters' });
  if ((typeof input.nightlyPrice !== 'number' || Number.isNaN(input.nightlyPrice) || input.nightlyPrice < 45 || input.nightlyPrice > 420)) errors.push({ field: 'nightlyPrice', message: 'must be a number from 45 to 420' });
  if ((typeof input.stars !== 'number' || Number.isNaN(input.stars) || input.stars < 1 || input.stars > 5)) errors.push({ field: 'stars', message: 'must be a number from 1 to 5' });
  if (!["Lisbon","Kyoto","Toronto"].includes(input.city)) errors.push({ field: 'city', message: 'must be one of Lisbon, Kyoto, Toronto' });
  if (input.breakfast !== undefined && typeof input.breakfast !== 'boolean') errors.push({ field: 'breakfast', message: 'must be true or false' });
  if (errors.length) return { ok: false, errors };
  // Only known fields pass through (no mass assignment).
  const data = {};
  for (const key of ["name","nightlyPrice","stars","city","breakfast"]) if (input[key] !== undefined) data[key] = key === 'name' ? input[key].trim() : input[key];
  return { ok: true, data };
}
