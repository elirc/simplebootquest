function validateSongUpdate(input) {
  if (typeof input !== 'object' || input === null || Array.isArray(input)) return { ok: false, errors: [{ field: '_', message: 'must be an object' }] };
  const errors = [];
  if (input.title !== undefined && (typeof input.title !== 'string' || input.title.trim() === '' || input.title.length > 40)) errors.push({ field: 'title', message: 'must be 1-40 characters' });
  if (input.seconds !== undefined && (typeof input.seconds !== 'number' || Number.isNaN(input.seconds) || input.seconds < 120 || input.seconds > 420)) errors.push({ field: 'seconds', message: 'must be a number from 120 to 420' });
  if (input.plays !== undefined && (typeof input.plays !== 'number' || Number.isNaN(input.plays) || input.plays < 10 || input.plays > 9800)) errors.push({ field: 'plays', message: 'must be a number from 10 to 9800' });
  if (input.artist !== undefined && !["Nova","The Pines","Kairo"].includes(input.artist)) errors.push({ field: 'artist', message: 'must be one of Nova, The Pines, Kairo' });
  if (input.mood !== undefined && !["calm","happy","dark"].includes(input.mood)) errors.push({ field: 'mood', message: 'must be one of calm, happy, dark' });
  if (errors.length) return { ok: false, errors };
  // Only known fields pass through (no mass assignment).
  const data = {};
  for (const key of ["title","seconds","plays","artist","mood"]) if (input[key] !== undefined) data[key] = key === 'title' ? input[key].trim() : input[key];
  return { ok: true, data };
}
