function validateCity(input) {
  if (typeof input !== 'object' || input === null || Array.isArray(input)) return { ok: false, errors: [{ field: '_', message: 'must be an object' }] };
  const errors = [];
  if ((typeof input.name !== 'string' || input.name.trim() === '' || input.name.length > 40)) errors.push({ field: 'name', message: 'must be 1-40 characters' });
  if ((typeof input.population !== 'number' || Number.isNaN(input.population) || input.population < 300 || input.population > 9900)) errors.push({ field: 'population', message: 'must be a number from 300 to 9900' });
  if ((typeof input.avgTemp !== 'number' || Number.isNaN(input.avgTemp) || input.avgTemp < 2 || input.avgTemp > 29)) errors.push({ field: 'avgTemp', message: 'must be a number from 2 to 29' });
  if (!["Europe","Africa","Americas","Asia","Oceania"].includes(input.continent)) errors.push({ field: 'continent', message: 'must be one of Europe, Africa, Americas, Asia, Oceania' });
  if (errors.length) return { ok: false, errors };
  // Only known fields pass through (no mass assignment).
  const data = {};
  for (const key of ["name","population","avgTemp","continent"]) if (input[key] !== undefined) data[key] = key === 'name' ? input[key].trim() : input[key];
  return { ok: true, data };
}
