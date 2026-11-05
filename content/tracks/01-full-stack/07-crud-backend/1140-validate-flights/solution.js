function validateFlight(input) {
  if (typeof input !== 'object' || input === null || Array.isArray(input)) return { ok: false, errors: [{ field: '_', message: 'must be an object' }] };
  const errors = [];
  if ((typeof input.number !== 'string' || input.number.trim() === '' || input.number.length > 40)) errors.push({ field: 'number', message: 'must be 1-40 characters' });
  if ((typeof input.durationMin !== 'number' || Number.isNaN(input.durationMin) || input.durationMin < 55 || input.durationMin > 840)) errors.push({ field: 'durationMin', message: 'must be a number from 55 to 840' });
  if ((typeof input.delayMin !== 'number' || Number.isNaN(input.delayMin) || input.delayMin < 0 || input.delayMin > 180)) errors.push({ field: 'delayMin', message: 'must be a number from 0 to 180' });
  if ((typeof input.seats !== 'number' || Number.isNaN(input.seats) || input.seats < 0 || input.seats > 48)) errors.push({ field: 'seats', message: 'must be a number from 0 to 48' });
  if (!["oneworld","skyteam","star"].includes(input.airline)) errors.push({ field: 'airline', message: 'must be one of oneworld, skyteam, star' });
  if (errors.length) return { ok: false, errors };
  // Only known fields pass through (no mass assignment).
  const data = {};
  for (const key of ["number","durationMin","delayMin","seats","airline"]) if (input[key] !== undefined) data[key] = key === 'number' ? input[key].trim() : input[key];
  return { ok: true, data };
}
