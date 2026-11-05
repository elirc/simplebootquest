function validateRecipe(input) {
  if (typeof input !== 'object' || input === null || Array.isArray(input)) return { ok: false, errors: [{ field: '_', message: 'must be an object' }] };
  const errors = [];
  if ((typeof input.name !== 'string' || input.name.trim() === '' || input.name.length > 40)) errors.push({ field: 'name', message: 'must be 1-40 characters' });
  if ((typeof input.minutes !== 'number' || Number.isNaN(input.minutes) || input.minutes < 10 || input.minutes > 120)) errors.push({ field: 'minutes', message: 'must be a number from 10 to 120' });
  if ((typeof input.calories !== 'number' || Number.isNaN(input.calories) || input.calories < 180 || input.calories > 950)) errors.push({ field: 'calories', message: 'must be a number from 180 to 950' });
  if (!["italian","asian","mexican","middle-eastern"].includes(input.cuisine)) errors.push({ field: 'cuisine', message: 'must be one of italian, asian, mexican, middle-eastern' });
  if (!["easy","medium","hard"].includes(input.difficulty)) errors.push({ field: 'difficulty', message: 'must be one of easy, medium, hard' });
  if (input.vegetarian !== undefined && typeof input.vegetarian !== 'boolean') errors.push({ field: 'vegetarian', message: 'must be true or false' });
  if (errors.length) return { ok: false, errors };
  // Only known fields pass through (no mass assignment).
  const data = {};
  for (const key of ["name","minutes","calories","cuisine","difficulty","vegetarian"]) if (input[key] !== undefined) data[key] = key === 'name' ? input[key].trim() : input[key];
  return { ok: true, data };
}
