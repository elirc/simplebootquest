function validateBookUpdate(input) {
  if (typeof input !== 'object' || input === null || Array.isArray(input)) return { ok: false, errors: [{ field: '_', message: 'must be an object' }] };
  const errors = [];
  if (input.title !== undefined && (typeof input.title !== 'string' || input.title.trim() === '' || input.title.length > 40)) errors.push({ field: 'title', message: 'must be 1-40 characters' });
  if (input.pages !== undefined && (typeof input.pages !== 'number' || Number.isNaN(input.pages) || input.pages < 120 || input.pages > 780)) errors.push({ field: 'pages', message: 'must be a number from 120 to 780' });
  if (input.year !== undefined && (typeof input.year !== 'number' || Number.isNaN(input.year) || input.year < 1813 || input.year > 2015)) errors.push({ field: 'year', message: 'must be a number from 1813 to 2015' });
  if (input.genre !== undefined && !["fiction","classic","tech","sci-fi"].includes(input.genre)) errors.push({ field: 'genre', message: 'must be one of fiction, classic, tech, sci-fi' });
  if (input.available !== undefined && typeof input.available !== 'boolean') errors.push({ field: 'available', message: 'must be true or false' });
  if (errors.length) return { ok: false, errors };
  // Only known fields pass through (no mass assignment).
  const data = {};
  for (const key of ["title","pages","year","genre","available"]) if (input[key] !== undefined) data[key] = key === 'title' ? input[key].trim() : input[key];
  return { ok: true, data };
}
