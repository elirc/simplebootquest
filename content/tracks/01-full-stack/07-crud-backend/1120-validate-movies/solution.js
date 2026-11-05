function validateMovie(input) {
  if (typeof input !== 'object' || input === null || Array.isArray(input)) return { ok: false, errors: [{ field: '_', message: 'must be an object' }] };
  const errors = [];
  if ((typeof input.title !== 'string' || input.title.trim() === '' || input.title.length > 40)) errors.push({ field: 'title', message: 'must be 1-40 characters' });
  if ((typeof input.year !== 'number' || Number.isNaN(input.year) || input.year < 1980 || input.year > 2024)) errors.push({ field: 'year', message: 'must be a number from 1980 to 2024' });
  if ((typeof input.minutes !== 'number' || Number.isNaN(input.minutes) || input.minutes < 82 || input.minutes > 175)) errors.push({ field: 'minutes', message: 'must be a number from 82 to 175' });
  if ((typeof input.rating !== 'number' || Number.isNaN(input.rating) || input.rating < 4 || input.rating > 9.5)) errors.push({ field: 'rating', message: 'must be a number from 4 to 9.5' });
  if (!["drama","comedy","sci-fi","thriller"].includes(input.genre)) errors.push({ field: 'genre', message: 'must be one of drama, comedy, sci-fi, thriller' });
  if (errors.length) return { ok: false, errors };
  // Only known fields pass through (no mass assignment).
  const data = {};
  for (const key of ["title","year","minutes","rating","genre"]) if (input[key] !== undefined) data[key] = key === 'title' ? input[key].trim() : input[key];
  return { ok: true, data };
}
